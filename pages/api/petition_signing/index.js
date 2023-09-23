import { transporter } from "../../../lib/emailService/transport";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      signature,
      comments,
      story,
      displayName,
      shareStory,
      isOver18,
      hasAdultPermission,
    } = req.body.data;

    const mailToSigner = {
      from: "EDUCACION DIVERSA WEBSITE",
      to: email,
      subject: "Gender equality petition signed",
      html: `
    <div>
    Dear ${firstName},<br/>
    <br/>
    Thank you for submitting your signature to make gender equality education mandatory in Australia!<br/>
    <br/>
    We would like to confirm that your signature has been received.
    We appreciate your support, time and the effort to make a better future with us!<br/>
    <br/>
    Please follow us for updates on our social media platforms Instagram or Linkedin under the name of: <a href="https://au.linkedin.com/company/educaci%C3%B3n-diversa">@educaciondiversa</a><br/>
    For detailed information visit: <a href="https://www.educaciondiversa.com">https://www.educaciondiversa.com</a><br/>
    For questions or concerns: <a href="https://www.educaciondiversa.com/contact">https://www.educaciondiversa.com/contact</a>
    </div>
          `,
    };

    const mailToSignerWithStory = {
      from: "EDUCACION DIVERSA WEBSITE",
      to: email,
      subject: "Gender equality petition signed",
      html: `
    <div>
    Dear ${firstName},<br/>
    <br/>
    Thank you for submitting your signature to make gender equality education mandatory in Australia!<br/>
    <br/>
    We would like to confirm that your signature has been received.
    We appreciate you taking the time to share your story with us. Your experiences and insights are valuable to us and will help us better serve our community.
    <br/>
    <br/>
    In the case of wanting to be a part of the storybook our team will review your story and will respond to you within [timeframe] with [the free link to the storybook]. Thank you for your participation.<br/>
    <br/>
    In the case of being under 18 years of age, we will require written consent from their parents or legal guardians. Our team will send a confirmation mail to complete the process. <br/>
    <br/>
    We appreciate your support, time and the effort to make a better future with us!
    Please follow us for updates on our social media platforms Instagram or Linkedin under the name of: <a href="https://au.linkedin.com/company/educaci%C3%B3n-diversa">@educaciondiversa</a><br/>
    For detailed information visit: <a href="https://www.educaciondiversa.com">https://www.educaciondiversa.com</a><br/>
    For questions or concerns: <a href="https://www.educaciondiversa.com/contact">https://www.educaciondiversa.com/contact</a>
    </div>
          `,
    };

    const mailToEDTeam = {
      from: "EDUCACION DIVERSA WEBSITE",
      to: process.env.CONTACT_EMAIL_TARGET_ADDRESS,
      subject: "Gender equality petition signed",
      html: `
    <div>
    This is a new sign for gender equality petition<br/><br/>
    Fullname: ${firstName} ${lastName}<br/>
    Email: ${email}<br/>
    Signature: ${signature},
    Comments: ${comments},
    Story: ${story || "No story shared"},
    Anonimous: ${displayName ? "Wants ot share name" : "Wants to be anonimous"},
    Wants to share story: ${
      shareStory
        ? "Wants to share story on social print material"
        : "Doesn't want to share story"
    },
    Is over 18: ${
      isOver18 ? "Yes, is over 18" : "No, should have adult permission"
    }
    Has an adult permission: ${
      hasAdultPermission
        ? "Yes, has an adult permission"
        : "No, should be over 18 already"
    }
    </div>
          `,
    };

    const mailData = story ? mailToSignerWithStory : mailToSigner;

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    transporter.sendMail(mailToEDTeam, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    return res.status(200);
  }
}
