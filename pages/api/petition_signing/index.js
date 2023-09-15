import { transporter } from "../../../lib/emailService/transport";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, organization, phone, orgName, request, message } =
      req.body.data;

    const mailData = {
      from: "EDUCACION DIVERSA WEBSITE",
      to: {email},
      subject: "Gender equality petition signed",
      html: `
    <div>
    Dear ${name},<br/>
    <br/>
    Thank you for submitting your signature to make gender equality education mandatory in Australia!<br/>
    <br/>
    We would like to confirm that your signature has been received.
    We appreciate your support, time and the effort to make a better future with us!<br/>
    <br/>
    Please follow us for updates on our social media platforms Instagram or Linkedin under the name of: @educaciondiversa.<br/>
    For detailed information visit: https://www.educaciondiversa.com<br/>
    For questions or concerns: https://www.educaciondiversa.com/contact
    </div>
          `,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    return res.status(200);
  }
}
