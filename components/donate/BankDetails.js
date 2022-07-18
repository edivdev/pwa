import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export default function BankDetails({ isMobile }) {
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
      currency: "EUR",
      bsb: "SWIFT/ BIC: TRWIBEB1XXX",
      acountnumber: "IBAN: BE96 9672 1622 6605",
    },
    {
      bankAcount: "AUS",
      currency: "AUD",
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
      <Box
        style={{
          width: "270px",
          backgroundColor: "rgb(111,135,193)",
          margin: "0 auto 20px",
          borderRadius: "12px",
          boxShadow: "0 0 6px gray",
          padding: "10px 20px",
        }}
        className="b-select"
        w="100%"
        textAlign="center"
        p="2% 0"
      >
        <select
          style={{
            backgroundColor: "rgb(111,135,193)",
            fontSize: "20px",
            color: "white",
            fontWeight: "600",
          }}
          onChange={(e) => handleChange(e.target.value)}
          defaultValue="0"
        >
          {bdetails.map((x, idx) => (
            <option key={x.bankAcount} value={idx}>
              {x.bankAcount}
            </option>
          ))}
        </select>
      </Box>
      <Box w="100%" textAlign="center" p="2% 0">
        {!isMobile && (
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
        )}

        {isMobile && (
          <Box>
            <Box mb="10px">
              <b>Bank Account:</b>
              <br />
              {details.bankAcount}
            </Box>
            <Box mb="10px">
              <b>Currency:</b>
              <br />
              {details.currency}
            </Box>
            <Box mb="10px">
              <b>BSB:</b>
              <br />
              {details.bsb}
            </Box>
            <Box mb="10px">
              <b>Account Number:</b>
              <br />
              {details.acountnumber}
            </Box>
          </Box>
        )}
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
