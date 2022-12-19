import { transporter } from "../../../lib/emailService/transport";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fname, lname, email } = req.body.data;

    const mailData = {
      from: "EDUCACION DIVERSA WEBSITE",
      to: process.env.CONTACT_EMAIL_TARGET_ADDRESS,
      subject: `New susbscriber to our NEWSLETTER`,
      html: `
      <div>
        This is a new request subscription for newsletter from ED website<br/><br/>
        Fullname: ${fname} ${lname}<br/>
        Email: ${email}
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
