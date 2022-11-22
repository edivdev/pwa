import * as XLSX from "xlsx";
import axios from "axios";
import { SelectField } from "@chakra-ui/react";
import { useState } from "react";

const mockedData = [{}, {}];

const convertToArrayofObj = (arr) => {
  // console.log("from convertion func", arr);

  arr.shift();
  const data = [];

  arr.map((element) => {
    const result = {};

    result["fname"] = element[0];
    result["lname"] = element[1];
    result["country"] = element[2];
    result["bio"] = element[3];
    result["email"] = element[4];
    result["phone"] = element[5];

    data.push(result);
  });

  // console.log("data from convert fiunc", data);
  return data;
};

export default function Volunters() {
  const [fileArr, setFileArr] = useState([]);

  const sendVolunteer = async (data) => {
    await axios.post("/api/volunteers/bulk", data).then((response) => {
      console.log(response);
      // if (response.data.status) {
      //   console.log(response.data.status, response.data.message);
      // }
    });
  };

  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      //   const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      const convertedData = convertToArrayofObj(data);
      // JSON.stringify(convertedData)
      setFileArr(convertedData);
    };
    reader.readAsBinaryString(file);
  };

  const createElement = async () => {
    //console.log("bang!", fileArr);

    await sendVolunteer(fileArr);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <input type="file" onChange={onChange} />
        <button onClick={createElement}>send data</button>
      </div>
    </div>
  );
}
