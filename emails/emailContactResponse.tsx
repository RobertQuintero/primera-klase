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
    <div style={styles.container}>

    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    margin: "auto",
    maxWidth: "40rem",
    padding: "2.5rem",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "0.375rem",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    itemAlign: "center",
    marginBottom: "2rem",
  },
  image: {
    margin: "auto",
    width: "6rem",
    height: "6rem",
  },
  heading: {
    color: "#000",
    fontSize: "1.125rem",
    fontWeight: "normal",
    margin: "0",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  paragraph: {
    color: "#000",
    fontSize: "1rem",
    fontWeight: "normal",
    margin: "0",
    marginBottom: "1rem",
  },
  detailsContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: "1rem",
    borderRadius: "0.375rem",
    color: "rgba(0, 0, 0, 0.8)",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  detailValue: {
    fontWeight: "normal",
  },
  messageText: {
    padding: "0.25rem",
    fontWeight: "normal",
  },
  responseContainer: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "1rem",
    fontWeight: "normal",
    marginTop: "1rem",
  },
  signatureContainer: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "0.875rem",
    fontWeight: "medium",
    marginTop: "1rem",
  },
  hr: {
    marginTop: "1rem",
    marginBottom: "0.625rem",
    border: "1px solid rgba(0, 0, 0, 0.2)",
  },
  signatureText: {
    fontSize: "1rem",
    color: "#000",
    marginBottom: "0.5rem",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export { EmailContactResponse };
