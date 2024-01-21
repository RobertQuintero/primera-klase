import React from "react";

type EmailFemaleResponseProps = {
    firstName: string;
    lastName: string;
    instagramUrl: string;
    email: string;
    // dateOfBirth: string;
    nationality: string;
    phoneNumber: string;
    address: string;
    yourStory: string;

    //Measurements
    height: string;
    weight: string;
    hairColor: string;
    eyeColor: string;
    bust: string;
    waist: string;
    hips: string;
    shoeSize: string;
    dressSize: string;
    pantsSize: string;
    tattoos: string;
    piercings: string;

    // Polaroid
    frontView: string;
    profileView: string;
    degreeView: string;
    topDownView: string;


};



const previewText = `Thank you for reaching out and expressing interest in my portfolio. I appreciate the time you took to contact me through my website.`;

const EmailFemaleResponse: React.FC<EmailFemaleResponseProps> = ({
        firstName,
        lastName,
        instagramUrl,
        email,
        // dateOfBirth,
        nationality,
        phoneNumber,
        address,
        yourStory,

        //Measurements
        height,
        weight,
        hairColor,
        eyeColor,
        bust,
        waist,
        hips,
        shoeSize,
        dressSize,
        pantsSize,

        tattoos,
        piercings,

        // Polaroid
        frontView,
        profileView,
        degreeView,
        topDownView,
}: EmailFemaleResponseProps) => {

  const downloadImage = (base64Data: string, fileName: string) => {
    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleDownloadClick = (base64Data: string, fileName: string) => {
    downloadImage(base64Data, fileName);
  };

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
        Dear, <strong>{firstName} {lastName} </strong>
      </p>
      <p style={styles.paragraph}>
        I have received your message with the following details:
      </p>

      <div style={styles.detailsContainer}>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{instagramUrl}</p>
        <p>{email}</p>
        <p>{nationality}</p>
        <p>{phoneNumber}</p>
        <p>{address}</p>
        <p>{yourStory}</p>
        <p>{height}</p>
        <p>{weight}</p>
        <p>{hairColor}</p>
        <p>{eyeColor}</p>
        <p>{bust}</p>
        <p>{waist}</p>
        <p>{hips}</p>
        <p>{shoeSize}</p>
        <p>{dressSize}</p>
        <p>{pantsSize}</p>
        <p>{tattoos}</p>
        <p>{piercings}</p>

        {/* // Polaroid */}
        {/* how can i get the as a File to be downloaded */}
        <div>
          <p>Front View:</p>
          <img
            alt="Front View"
            src={`data:image/png;base64,${frontView}`}
            onClick={() => handleDownloadClick(frontView, 'front_view.png')}
            style={{ cursor: 'pointer' }}

          />
        </div>


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

export { EmailFemaleResponse };
