import { transporter } from "../../../lib/emailService/transport";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fname, lname, email, phone, country } = req.body.data;

    const mailData = {
      from: "EDUCACION DIVERSA WEBSITE",
      to: process.env.CONTACT_EMAIL_TARGET_ADDRESS,
      subject: "New volunteering request from website",
      html: `
      <div>
      This is a new volunteering form request from ED website<br/><br/>
      Fullname: ${fname} ${lname}<br/>
      Email: ${email}<br/>
      Phone: ${phone}<br/>
      Country: ${country}<br/>
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
