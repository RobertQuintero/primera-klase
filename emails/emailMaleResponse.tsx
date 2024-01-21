import React from "react";

type EmailMaleResponseProps = {
    firstName: string;
    // lastName: string;
    // instagramUrl: string;
    email: string;
    // dateOfBirth: string;
    // nationality: string;
    // phoneNumber: string;
    // address: string;
    // yourStory: string;

    //Measurements
    // height: string;
    // weight: string;
    // hairColor: string;
    // eyeColor: string;
    // hips: string;
    // shoeSize: string;
    // pantsSize: string;
    // tattoos: string;
    // piercings: string;

    // Polaroid
    imageFront: string;
    imageProfile: string;
    imageDegree: string;
    imageTopDown: string;


};



const previewText = `Thank you for reaching out and expressing interest in my portfolio. I appreciate the time you took to contact me through my website.`;

const EmailMaleResponse: React.FC<EmailMaleResponseProps> = ({
        firstName,
        // lastName,
        // instagramUrl,
        email,
        // dateOfBirth,
        // nationality,
        // phoneNumber,
        // address,
        // yourStory,

        //Measurements
        // height,
        // weight,
        // hairColor,
        // eyeColor,
        // hips,
        // shoeSize,
        // pantsSize,
        // tattoos,
        // piercings,

        // Polaroid
        imageFront,
        imageProfile,
}: EmailMaleResponseProps) => {


  return (
    <div >

          <p>Front View:</p>
          <img
            alt="Front View"
            src={imageFront}
            width={200}
            height={200}
          />
          <img
            alt="Front View"
            src={imageProfile}
            width={200}
            height={200}
          />

    </div>
  );
};


export { EmailMaleResponse };
