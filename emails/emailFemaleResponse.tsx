import React from "react";

type EmailFemaleResponseProps = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    instagramUrl: string;
    email: string;
    phoneNumber: string;
    address: string;
    yourStory: string;

    //Measurements
    height: string;
    weight: string;
    bust: string;
    waist: string;
    hips: string;
    shoeSize: string;
    dressSize: string;
    pantsSize: string;
    hairColor: string;
    eyeColor: string;
    tattoos: string;
    piercings: string;

    // Polaroid
    imageFront?: string;
    imageProfile?: string;
    imageDegree?: string;
    imageTopDown?: string;

};



const previewText = `Thank you for reaching out and expressing interest in my portfolio. I appreciate the time you took to contact me through my website.`;

const EmailFemaleResponse: React.FC<EmailFemaleResponseProps> = ({
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        instagramUrl,
        email,
        phoneNumber,
        address,
        yourStory,

        //Measurements
        height,
        weight,
        bust,
        waist,
        hips,
        shoeSize,
        dressSize,
        pantsSize,
        hairColor,
        eyeColor,
        tattoos,
        piercings,

        // Polaroid
        imageFront,
        imageProfile,
        imageDegree,
        imageTopDown,
}: EmailFemaleResponseProps) => {
  const previewText = `Welcome ${firstName} ${lastName} has applied to your agency`;
  const currentYear = new Date().getFullYear();
  const birthDate = new Date(dateOfBirth);
  const formattedDateOfBirth = birthDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>

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

};

export { EmailFemaleResponse };
