// eslint-disable-next-line no-undef
const { createTransport } = require("nodemailer");

const createPasswordResetUrl = (id, token) =>
  `localhost:3000/reset-password/${id}/${token}`;

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "joseph.zulauf@ethereal.email",
    pass: "NkdDBU4YJJVhdFvD6a",
  },
});
const passwordResetTemplate = (user, url) => {
  const { email } = user;
  return {
    from: `Mail - <wisdomiyamu@gmail.com>`,
    to: email,
    subject: `Reset Password`,
    html: `
    <h2>Password Reset Link</h2>
    <p>Reset your password by clicking on the link below:</p>
    <a href=${url}><button>Reset Password</button></a>
    <br />
    <br />
		<small><a style="color: #38A169" href=${url}>${url}</a></small>
    <br />
		<small>The link will expire in 15 mins!</small>
		<small>If you haven't requested password reset, please ignore!</small>
    <br /><br />
    <p>Thanks,</p>
    <p>Authentication API</p>`,
  };
};

const passwordResetConfirmationTemplate = (user) => {
  const { email } = user;

  return {
    from: `Mail - <wisdomiyamu@gmail.com>`,
    to: email,
    subject: `Password Reset Successful`,
    html: `
    <h2>Password Reset Successful</h2>
    <p>You've successfully updated your password for your account <${email}>. </p>
		<small>If you did not change your password, reset it from your account.</small>
    <br /><br />
    <p>Thanks,</p>
    <p>Authentication API</p>`,
  };
};

// eslint-disable-next-line no-undef
module.exports = {
  transporter,
  createPasswordResetUrl,
  passwordResetTemplate,
  passwordResetConfirmationTemplate,
};
