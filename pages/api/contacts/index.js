import { transporter } from "../../../lib/emailService/transport";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, organization, phone, orgName, request, message } =
      req.body.data;

    const mailData = {
      from: "EDUCACION DIVERSA WEBSITE",
      to: process.env.CONTACT_EMAIL_TARGET_ADDRESS,
      subject: "New contact message from website",
      html: `
    <div>
        This is a new contact form message from ED website<br/><br/>
        Fullname: ${name}<br/>
        Email: ${email}<br/>
        Organization Type: ${organization}<br/>
        Phone: ${phone}<br/>
        Organization Name: ${orgName}<br/>
        How can we help: ${request}<br/>
        Message: ${message}<br/>
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
