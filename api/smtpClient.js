// smtpClient.js
export const sendEmail = async ({ to, from, subject, body, secureToken }) => {
  if (!window.Email) {
    // Dynamically load SMTP.js
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://smtpjs.com/v3/smtp.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  return window.Email.send({
    SecureToken: secureToken,
    To: to,
    From: from,
    Subject: subject,
    Body: body,
  });
};
