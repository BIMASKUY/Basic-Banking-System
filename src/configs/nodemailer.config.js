import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
})

// mailtrap transporter
// const transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: process.env.MAILTRAP_USER,
//     pass: process.env.MAILTRAP_PASSWORD
//   }
// })

// const sendRegisterVerification = async (email, token) => {
//   const title = 'Konfirmasi akun anda'
//   const description = 'Silakan klik tombol di bawah untuk mengkonfirmasi akun anda'
//   const link = `http://localhost:3000/api/v1/users?token=${token}`
//   const boxLinkText = 'KONFIRMASI'
//   await transporter.sendMail({
//     from: "kestari.ittoday@gmail.com",
//     // from: process.env.MAIL_USER,
//     to: email,
//     subject: 'Verifikasi Registrasi https://binar999.dt.r.appspot.com',
//     html: emailHTML(title, description, link, boxLinkText)
//   })
//   console.log("email sent successfully")
// }

const sendResetPasswordVerification = async (email, token) => {
  try {
    const title = 'Atur ulang kata sandi'
    const description = 'Klik tombol di bawah untuk mengatur ulang kata sandi akun anda'
    const link = `http://localhost:3000/api/v1/auth/reset-password/${token}`
    const boxLinkText = 'ATUR ULANG'
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Verifikasi Reset Password https://binar999.dt.r.appspot.com',
      html: emailHTML(title, description, link, boxLinkText)
    })
    console.log("reset password sent successfully")
  } catch (error) {
    console.log(error, "reset paassword not sent")
  }
}

const emailHTML = (title, description, link, boxLinkText) => {
  return (
    `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
    <style type="text/css">
    table {
    border-collapse: separate;
    table-layout: fixed;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt
    }
    table td {
    border-collapse: collapse
    }
    .ExternalClass {
    width: 100%
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
    line-height: 100%
    }
    body, a, li, p, h1, h2, h3 {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    }
    html {
    -webkit-text-size-adjust: none !important
    }
    body, #innerTable {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
    }
    #innerTable img+div {
    display: none;
    display: none !important
    }
    img {
    Margin: 0;
    padding: 0;
    -ms-interpolation-mode: bicubic
    }
    h1, h2, h3, p, a {
    line-height: inherit;
    overflow-wrap: normal;
    white-space: normal;
    word-break: break-word
    }
    a {
    text-decoration: none
    }
    h1, h2, h3, p {
    min-width: 100%!important;
    width: 100%!important;
    max-width: 100%!important;
    display: inline-block!important;
    border: 0;
    padding: 0;
    margin: 0
    }
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important
    }
    u + #body a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    }
    a[href^="mailto"],
    a[href^="tel"],
    a[href^="sms"] {
    color: inherit;
    text-decoration: none
    }
    </style>
    <style type="text/css">
    @media (min-width: 481px) {
    .hd { display: none!important }
    }
    </style>
    <style type="text/css">
    @media (max-width: 480px) {
    .hm { display: none!important }
    }
    </style>
    <style type="text/css">
    @media (max-width: 480px) {
    .t30,.t35{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t31{padding:40px!important}.t33{border-radius:0!important;width:480px!important}.t15,.t28,.t9{width:400px!important}
    }
    </style>
    <!--[if !mso]>-->
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700;800&amp;family=Inter+Tight:wght@900&amp;display=swap" rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    <body id="body" class="t38" style="min-width:100%;Margin:0px;padding:0px;background-color:#F4F4F4;"><div class="t37" style="background-color:#F4F4F4;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t36" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F4F4F4;" valign="top" align="center">
    <!--[if mso]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
    <v:fill color="#F4F4F4"/>
    </v:background>
    <![endif]-->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t30" style="mso-line-height-rule:exactly;mso-line-height-alt:60px;line-height:60px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
    <table class="t34" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr>
    <!--[if mso]>
    <td width="600" class="t33" style="background-color:#FFFFFF;overflow:hidden;width:600px;border-radius:8px 8px 8px 8px;">
    <![endif]-->
    <!--[if !mso]>-->
    <td class="t33" style="background-color:#FFFFFF;overflow:hidden;width:600px;border-radius:8px 8px 8px 8px;">
    <!--<![endif]-->
    <table class="t32" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
    <td class="t31" style="padding:60px 60px 60px 60px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
    <table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;">
    <tr>
    <!--[if mso]>
    <td width="70" class="t3" style="width:70px;">
    <![endif]-->
    <!--[if !mso]>-->
    <td class="t3" style="width:70px;">
    <!--<![endif]-->
    <table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
    <td class="t1" style="padding:0 15px 0 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="55" height="35.78125" alt="" src="https://f6844dd7-5952-461f-9040-b635a80f7d81.b-cdn.net/e/4f3d35ff-0513-4be1-a855-c26f05c11c34/c1d53587-f2f3-4749-a65a-bec861b1706f.png"/></div></td>
    </tr></table>
    </td>
    </tr></table>
    </td></tr><tr><td><div class="t5" style="mso-line-height-rule:exactly;mso-line-height-alt:42px;line-height:42px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
    <table class="t10" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr>
    <!--[if mso]>
    <td width="480" class="t9" style="width:480px;">
    <![endif]-->
    <!--[if !mso]>-->
    <td class="t9" style="width:480px;">
    <!--<![endif]-->
    <table class="t8" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
    <td class="t7"><h1 class="t6" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-style:normal;font-size:39px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">${title}</h1></td>
    </tr></table>
    </td>
    </tr></table>
    </td></tr><tr><td><div class="t11" style="mso-line-height-rule:exactly;mso-line-height-alt:16px;line-height:16px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
    <table class="t16" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr>
    <!--[if mso]>
    <td width="480" class="t15" style="width:480px;">
    <![endif]-->
    <!--[if !mso]>-->
    <td class="t15" style="width:480px;">
    <!--<![endif]-->
    <table class="t14" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
    <td class="t13"><p class="t12" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${description}.<br>Link ini berlaku selama 5 menit.</p></td>
    </tr></table>
    </td>
    </tr></table>
    </td></tr><tr><td><div class="t18" style="mso-line-height-rule:exactly;mso-line-height-alt:35px;line-height:35px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
    <table class="t22" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;">
    <tr>
    <!--[if mso]>
    <td width="105" class="t21" style="background-color:#000000;overflow:hidden;width:105px;border-radius:40px 40px 40px 40px;">
    <![endif]-->
    <!--[if !mso]>-->
    <td class="t21" style="background-color:#000000;overflow:hidden;width:105px;border-radius:40px 40px 40px 40px;">
    <!--<![endif]-->
    <table class="t20" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
    <td class="t19" style="text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:6px;">
    <a href="${link}" class="t17" style="display:block;margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:900;font-style:normal;font-size:13px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:6px;">
    ${boxLinkText}
    </a></td></td>
    </tr></table>
    </td></tr><tr><td><div class="t25" style="mso-line-height-rule:exactly;mso-line-height-alt:35px;line-height:35px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
    <table class="t29" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <tr>
    <!--[if mso]>
    <td width="480" class="t28" style="width:480px;">
    <![endif]-->
    <!--[if !mso]>-->
    <td class="t28" style="width:480px;">
    <!--<![endif]-->
    <table class="t27" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
    <td class="t26"><p class="t24" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:21px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.64px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Bukan anda? <br> <b>Abaikan pesan ini</b></p></td>
    </tr></table>
    </td>
    </tr></table>
    </td></tr></table></td>
    </tr></table>
    </td>
    </tr></table>
    </td></tr><tr><td><div class="t35" style="mso-line-height-rule:exactly;mso-line-height-alt:60px;line-height:60px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
    </html>
    `
  )
}

export { sendResetPasswordVerification }