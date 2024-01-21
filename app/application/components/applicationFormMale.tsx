"use client";

import { title } from "@/components/primitives";
import { UploadButton, UploadDropzone } from "@/config/uploadthings";
import { PlusIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CircularProgress,
  Input,
  Image,
  Spinner,
} from "@nextui-org/react";
import React, { useState } from "react";
import { allowedContentTextLabelGenerator } from "uploadthing/client";

const ApplicationFormMale = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  //Personal Information
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  //Invalid states Personal Information
  const [isInvalidFirstName, setIsInvalidFirstName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  //Polaroid
  //Image Upload 4 images Front view, ,Profile view, degree view, Top-down view
  const [imageFront, setImageFront] = useState<string>("");
  const [imageProfile, setImageProfile] = useState<string>("");
  const [imageDegree, setImageDegree] = useState<string>("");
  const [imageTopDown, setImageTopDown] = useState<string>("");

  const [uploadError, setUploadError] = useState<string | null>(null);
  //Polaroid end

  const [selectedDate, setSelectedDate] = useState(null); // Initialize with null
  const [formattedDate, setFormattedDate] = useState("");

  //Cloudinary

  const checkFormValidity = () => {
    if (
      // Personal Information
      validateEmail(email) &&
      /^[a-zA-Z]+$/.test(firstName) &&
      email
      // Polaroid
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsLoading(true);
    // Validation checks before submitting
    if (
      // Check if all fields are valid
      // Personal Information
      !validateEmail(email) ||
      !/^[a-zA-Z]+$/.test(firstName)

      //Polaroid
    ) {
      // Set validation states to display error messages
      setIsInvalidEmail(!validateEmail(email));
      setIsInvalidFirstName(!/^[a-zA-Z]+$/.test(firstName));

      // Polaroid

      setIsLoading(false);
      setIsFormValid(false);

      return;
    }
    // If all fields are valid, proceed with submitting the form
    setIsFormValid(true); // Add this line
    const response = await fetch("/api/sendFormMale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //Personal Information
        firstName,
        email,
        // Polaroid
        imageFront,
        imageProfile,
      }),
    });
    if (!response.ok) {
      const text = await response.text();
      console.error("Server response:", text);
      throw new Error("Server response was not ok.");
    } else {
      setIsSubmitted(true);
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <React.Fragment>
      <form
        className=" flex flex-col h-full max-w-7xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
          {/* //Personal Information */}
          {/* // firstName */}
          <Input
            type="text"
            id="firstName"
            name="firstName"
            label="First Name"
            isRequired
            variant="bordered"
            radius="none"
            size="lg"
            value={firstName}
            isInvalid={isInvalidFirstName}
            errorMessage={
              isInvalidFirstName
                ? firstName.trim() === ""
                  ? "Please enter your first name"
                  : "Please enter a valid character"
                : ""
            }
            classNames={{
              inputWrapper:
                firstName.trim() !== "" ? "border-success " : "danger",
              errorMessage: isInvalidFirstName ? "text-danger" : "text-success",
              label:
                firstName.trim() !== "" ? "text-success" : "text-default-500",
            }}
            color={isInvalidFirstName ? "danger" : "warning"}
            onChange={(e) => {
              setFirstName(e.target.value);
              setIsInvalidFirstName(!/^[a-zA-Z]+$/.test(e.target.value));
              checkFormValidity();
            }}
          />
          {/* // email */}
          <Input
            type="email"
            id="email"
            name="email"
            label="Email"
            isRequired
            variant="bordered"
            radius="none"
            size="lg"
            isInvalid={isInvalidEmail}
            errorMessage={isInvalidEmail ? "Please enter a valid email" : ""}
            classNames={{
              inputWrapper: email.trim() !== "" ? "border-success " : "danger",
              errorMessage: isInvalidEmail ? "text-danger" : "text-success",
              label: email.trim() !== "" ? "text-success" : "text-default-500",
            }}
            color={isInvalidEmail ? "danger" : "warning"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsInvalidEmail(!validateEmail(e.target.value));
              checkFormValidity();
            }}
          />
        </div>

        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 sm:gap-8 mb-4 sm:mb-8 relative  !h-full">

          {/* //Polaroid
          //Image Upload 4 images Front view, ,Profile view, degree view, Top-down view
          //Front view */}
          <div className="relative  flex items-center justify-center w-full h-[100vh] max-h-44 sm:max-h-60 md:max-h-72 overflow-hidden border-2 border-default-300 hover:border-warning transition-colors group">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImageFront(res[0].url);
                setUploadError(null);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                console.error(error);
                setUploadError(error.message);
              }}
              className=""
              appearance={{
                button({ ready, isUploading }) {
                  return `bg-transparent w-full h-full ${ready ? "" : ""} ${
                    isUploading ? "" : ""
                  }`;
                },
                container: "z-30 w-full h-full",
              }}
              content={{
                button({ ready, isUploading }) {
                  return (
                    <React.Fragment>
                      {isUploading ? (
                        <Spinner color="warning" />
                      ) : (
                        <PlusIcon className="absolute w-14 h-14 text-default-500 z-20 group-hover:text-warning" />
                      )}
                    </React.Fragment>
                  );
                },
                allowedContent(arg) {
                  return (
                    // Display the file name and size and if uploadError display the error
                    <React.Fragment>
                      {uploadError ? (
                        <p
                          className={`text-danger !font-normal ${title({
                            size: "sm",
                          })}`}
                        >
                          Selected image exceeds | | 1MB limit. Choose a
                          smaller| | image and try again.
                        </p>
                      ) : (
                        <div className="text-default-500 absolute bottom-0 -ml-10">
                          {allowedContentTextLabelGenerator()}
                          <p
                            className={`group-hover:text-warning transition-colors !font-normal ${title(
                              { size: "md" }
                            )}`}
                          >
                            Front view{" "}
                          </p>
                        </div>
                      )}
                    </React.Fragment>
                  );
                },
              }}
            />
            {imageFront && (
              <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
                <Image
                  src="https://utfs.io/f/ee143e92-c3db-4787-9f2e-695d0529464f-c33bs0.png"
                  // src={imageFront}
                  alt="front"
                  width={300}
                  height={300}
                  radius="none"
                  className="object-contain w-full h-full aspect-square"
                />
              </div>
            )}
          </div>

          {/* //Profile view */}
          <div className="relative  flex items-center justify-center w-full h-[100vh] max-h-44 sm:max-h-60 md:max-h-72 overflow-hidden border-2 border-default-300 hover:border-warning transition-colors group">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImageProfile(res[0].url);
                setUploadError(null);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                console.error(error);
                setUploadError(error.message);
              }}
              className=""
              appearance={{
                button({ ready, isUploading }) {
                  return `bg-transparent w-full h-full ${ready ? "" : ""} ${
                    isUploading ? "" : ""
                  }`;
                },
                container: "z-30 w-full h-full",
              }}
              content={{
                button({ ready, isUploading }) {
                  return (
                    <React.Fragment>
                      {isUploading ? (
                        <Spinner color="warning" />
                      ) : (
                        <PlusIcon className="absolute w-14 h-14 text-default-500 z-20 group-hover:text-warning" />
                      )}
                    </React.Fragment>
                  );
                },
                allowedContent(arg) {
                  return (
                    // Display the file name and size and if uploadError display the error
                    <React.Fragment>
                      {uploadError ? (
                        <p
                          className={`text-danger !font-normal ${title({
                            size: "sm",
                          })}`}
                        >
                          Selected image exceeds | | 1MB limit. Choose a
                          smaller| | image and try again.
                        </p>
                      ) : (
                        <div className="text-default-500 absolute bottom-0 -ml-10">
                          {allowedContentTextLabelGenerator()}
                          <p
                            className={`group-hover:text-warning transition-colors !font-normal ${title(
                              { size: "md" }
                            )}`}
                          >
                            Profile view{" "}
                          </p>
                        </div>
                      )}
                    </React.Fragment>
                  );
                },
              }}
            />
            {imageProfile && (
              <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
                <Image
                  src={imageProfile}
                  alt="front"
                  width={300}
                  height={300}
                  radius="none"
                  className="object-contain
                  w-full h-full aspect-square"
                />
              </div>
            )}
          </div>

          {/* //degree view */}
          <div className="relative  flex items-center justify-center w-full h-[100vh] max-h-44 sm:max-h-60 md:max-h-72 overflow-hidden border-2 border-default-300 hover:border-warning transition-colors group">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImageDegree(res[0].url);
                setUploadError(null);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                console.error(error);
                setUploadError(error.message);
              }}
              className=""
              appearance={{
                button({ ready, isUploading }) {
                  return `bg-transparent w-full h-full ${ready ? "" : ""} ${
                    isUploading ? "" : ""
                  }`;
                },
                container: "z-30 w-full h-full",
              }}
              content={{
                button({ ready, isUploading }) {
                  return (
                    <React.Fragment>
                      {isUploading ? (
                        <Spinner color="warning" />
                      ) : (
                        <PlusIcon className="absolute w-14 h-14 text-default-500 z-20 group-hover:text-warning" />
                      )}
                    </React.Fragment>
                  );
                },
                allowedContent(arg) {
                  return (
                    // Display the file name and size and if uploadError display the error
                    <React.Fragment>
                      {uploadError ? (
                        <p
                          className={`text-danger !font-normal ${title({
                            size: "sm",
                          })}`}
                        >
                          Selected image exceeds | | 1MB limit. Choose a
                          smaller| | image and try again.
                        </p>
                      ) : (
                        <div className="text-default-500 absolute bottom-0 -ml-12">
                          {allowedContentTextLabelGenerator()}
                          <p
                            className={`group-hover:text-warning transition-colors !font-normal ${title(
                              { size: "md" }
                            )}`}
                          >
                            Degree view{" "}
                          </p>
                        </div>
                      )}
                    </React.Fragment>
                  );
                },
              }}
            />
            {imageDegree && (
              <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
                <Image
                  src={imageDegree}
                  alt="front"
                  width={300}
                  height={300}
                  radius="none"
                  className="object-contain
                  w-full h-full aspect-square"
                />
              </div>
            )}
          </div>

          {/* //Top-down view */}
          <div className="relative  flex items-center justify-center w-full h-[100vh] max-h-44 sm:max-h-60 md:max-h-72 overflow-hidden border-2 border-default-300 hover:border-warning transition-colors group">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImageTopDown(res[0].url);
                setUploadError(null);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                console.error(error);
                setUploadError(error.message);
              }}
              className=""
              appearance={{
                button({ ready, isUploading }) {
                  return `bg-transparent w-full h-full ${ready ? "" : ""} ${
                    isUploading ? "" : ""
                  }`;
                },
                container: "z-30 w-full h-full",
              }}
              content={{
                button({ ready, isUploading }) {
                  return (
                    <React.Fragment>
                      {isUploading ? (
                        <Spinner color="warning" />
                      ) : (
                        <PlusIcon className="absolute w-14 h-14 text-default-500 z-20 group-hover:text-warning" />
                      )}
                    </React.Fragment>
                  );
                },
                allowedContent(arg) {
                  return (
                    // Display the file name and size and if uploadError display the error
                    <React.Fragment>
                      {uploadError ? (
                        <p
                          className={`text-danger !font-normal ${title({
                            size: "sm",
                          })}`}
                        >
                          Selected image exceeds | | 1MB limit. Choose a
                          smaller| | image and try again.
                        </p>
                      ) : (
                        <div className="text-default-500 absolute bottom-0 -ml-14">
                          {allowedContentTextLabelGenerator()}
                          <p
                            className={`group-hover:text-warning transition-colors !font-normal ${title(
                              { size: "md" }
                            )}`}
                          >
                            Top-down view{" "}
                          </p>
                        </div>
                      )}
                    </React.Fragment>
                  );
                },
              }}
            />
            {imageTopDown && (
              <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
                <Image
                  src={imageTopDown}
                  alt="front"
                  width={300}
                  height={300}
                  radius="none"
                  className="object-contain
                  w-full h-full aspect-square"
                />
              </div>
            )}
            </div>

        </div>

        <Button
          color="warning"
          variant={isFormValid ? "solid" : "flat"} // Update this line
          type="submit"
          radius="none"
          size="lg"
          isDisabled={!isFormValid}
          startContent={
            isLoading ? (
              <CircularProgress
                color="primary"
                aria-label="Loading..."
                classNames={{ svg: "w-4 h-4" }}
              />
            ) : (
              ""
            )
          }
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </form>
    </React.Fragment>
  );
};

export { ApplicationFormMale };
