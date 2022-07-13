import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export default function BankDetails() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    setDetails(bdetails[0]);
  }, []);

  const bdetails = [
    {
      bankAcount: "Outside the US",
      currency: "USD",
      bsb: "SWIFT / BIC: CMFGUS33",
      acountnumber: "8311162566",
    },
    {
      bankAcount: "Outside the UK",
      currency: "GBP",
      bsb: "SWIFT / BIC: TRWIGB2L",
      acountnumber: "IBAN: GB74 TRWI 2314 7083 8262 69",
    },
    {
      bankAcount: "Outside EU and SEPA",
      currency: "Eur",
      bsb: "SWIFT/ BIC: TRWIBEB1XXX",
      acountnumber: "IBAN: BE96 9672 1622 6605",
    },
    {
      bankAcount: "AUS",
      currency: "AU",
      bsb: "032-778",
      acountnumber: "661543",
    },
  ];

  const handleChange = (e) => {
    const el = bdetails[e];

    setDetails(el);
  };

  return (
    <Box w="100%" textAlign="center" p="3% 0">
      <Box w="100%" textAlign="center" p="2% 0">
        <select onChange={(e) => handleChange(e.target.value)} defaultValue="0">
          {bdetails.map((x, idx) => (
            <option key={x.bankAcount} value={idx}>
              {x.bankAcount}
            </option>
          ))}
        </select>
      </Box>
      <Box w="100%" textAlign="center" p="2% 0">
        <table style={{ margin: "auto" }}>
          <thead>
            <tr
              style={{
                backgroundColor: "lightgray",
                height: "50px",
                border: "1px solid lightgray",
              }}
            >
              <th>Bank Account</th>
              <th>Currency</th>
              <th>BSB</th>
              <th>Account Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {details && (
                <>
                  <CustomTd>{details.bankAcount}</CustomTd>
                  <CustomTd>{details.currency}</CustomTd>
                  <CustomTd>{details.bsb}</CustomTd>
                  <CustomTd>{details.acountnumber}</CustomTd>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
}

const CustomTd = ({ children }) => {
  return (
    <td
      style={{
        minWidth: "280px",
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      {children}
    </td>
  );
};
