interface SendEmailParams {
  to: string;
  from: string;
  subject: string;
  body: string;
  secureToken: string;
}

// Extend window for SMTP.js
declare global {
  interface Window {
    Email?: {
      send: (options: {
        SecureToken: string;
        To: string;
        From: string;
        Subject: string;
        Body: string;
      }) => Promise<any>;
    };
  }
}

export const sendEmail = async ({ to, from, subject, body, secureToken }: SendEmailParams): Promise<any> => {
  if (!window.Email) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://smtpjs.com/v3/smtp.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.body.appendChild(script);
    });
  }
   if (!window.Email) {
      throw new Error("SMTP.js is not loaded properly.");
   }

  return window.Email.send({
    SecureToken: secureToken,
    To: to,
    From: from,
    Subject: subject,
    Body: body,
  });
};
