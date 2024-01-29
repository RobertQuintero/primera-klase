import React from "react";

type EmailContactResponseProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const previewText = `Thank you for reaching out and expressing interest in my portfolio. I appreciate the time you took to contact me through my website.`;

const EmailContactResponse: React.FC<EmailContactResponseProps> = ({
  name,
  email,
  message,
  subject,
}: EmailContactResponseProps) => {
  return (
    <div >
    <p>{name}</p>
    <p>{email}</p>
    <p>{message}</p>
    <p>{subject}</p>
    </div>
  );
};


export { EmailContactResponse };
