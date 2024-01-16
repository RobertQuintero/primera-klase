import React from "react";

type ContactResponseProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const previewText = `Thank you for reaching out and expressing interest in my portfolio. I appreciate the time you took to contact me through my website.`;

const ContactResponse: React.FC<ContactResponseProps> = ({
  name,
  email,
  message,
  subject,
}: ContactResponseProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          alt="Robert Quintero"
          style={styles.image}
          src="https://robertquintero.me/siteLogo.png"
          width={100}
          height={100}
        />
      </div>

      <h1 style={styles.heading}>
        {previewText}
      </h1>

      <p style={styles.paragraph}>
        Dear, <strong>{name}</strong>
      </p>
      <p style={styles.paragraph}>
        I have received your message with the following details:
      </p>

      <div style={styles.detailsContainer}>
        <p>Email: <span style={styles.detailValue}>{email}</span></p>
        <p>Subject: <span style={styles.detailValue}>{subject}</span></p>
        <p>Message:</p>
        <p style={styles.messageText}>{message}</p>
      </div>

      <div style={styles.responseContainer}>
        <p>
          If there are specific aspects of my portfolio you would like more information about or if you have any specific questions, please feel free to let me know. Your input will help me tailor my response to better meet your needs.
        </p>

        <p>
          Thank you for considering my portfolio. I look forward to the opportunity to discuss my work further with you.
        </p>
      </div>

      <div style={styles.signatureContainer}>
        <hr style={styles.hr} />
        <p style={styles.signatureText}>Best Regards,</p>
        <p>Robert Quintero</p>
        <p>Robert Portfolio</p>
        <a href="https://www.robertquintero.me" style={styles.link}>https://robertquintero.me/</a>
        <br />
        <a href="https://linkstack.robertquintero.me/@robertquintero" style={styles.link}>https://linkstack.robertquintero.me/@robertquintero</a>
      </div>
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

export { ContactResponse };
