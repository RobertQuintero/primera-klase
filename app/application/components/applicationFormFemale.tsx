"use client";

import { paragraph, title } from "@/components/primitives";
import { CalendarDaysIcon, PlusIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CircularProgress,
  Divider,
  Image,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import Datepicker from "react-tailwindcss-datepicker";

const ApplicationFormFemale = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);


  //Personal Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [yourStory, setYourStory] = useState("");

  //Measurements
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [dressSize, setDressSize] = useState("");
  const [pantsSize, setPantsSize] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [tattoos, setTattoos] = useState("");
  const [piercings, setPiercings] = useState("");

  //Image Upload 4 images Front view, ,Profile view, 45 degree view, Top-down view
  const [frontView, setFrontView] = useState("");
  const [profileView, setProfileView] = useState("");
  const [degreeView, setDegreeView] = useState("");
  const [topDownView, setTopDownView] = useState("");

  //Invalid states Personal Information
  const [isInvalidFirstName, setIsInvalidFirstName] = useState(false);
  const [isInvalidLastName, setIsInvalidLastName] = useState(false);
  const [isInvalidDateOfBirth, setIsInvalidDateOfBirth] = useState(false);
  const [isInvalidNationality, setIsInvalidNationality] = useState(false);
  const [isInvalidInstagramUrl, setIsInvalidInstagramUrl] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPhoneNumber, setIsInvalidPhoneNumber] = useState(false);
  const [isInvalidAddress, setIsInvalidAddress] = useState(false);
  const [isInvalidYourStory, setIsInvalidYourStory] = useState(false);

  //Invalid states Measurements
  const [isInvalidHeight, setIsInvalidHeight] = useState(false);
  const [isInvalidWeight, setIsInvalidWeight] = useState(false);
  const [isInvalidBust, setIsInvalidBust] = useState(false);
  const [isInvalidWaist, setIsInvalidWaist] = useState(false);
  const [isInvalidHips, setIsInvalidHips] = useState(false);
  const [isInvalidShoeSize, setIsInvalidShoeSize] = useState(false);
  const [isInvalidDressSize, setIsInvalidDressSize] = useState(false);
  const [isInvalidPantsSize, setIsInvalidPantsSize] = useState(false);
  const [isInvalidHairColor, setIsInvalidHairColor] = useState(false);
  const [isInvalidEyeColor, setIsInvalidEyeColor] = useState(false);
  const [isInvalidTattoos, setIsInvalidTattoos] = useState(false);
  const [isInvalidPiercings, setIsInvalidPiercings] = useState(false);

  //Polaroid
  //Image Upload 4 images Front view, ,Profile view, 45 degree view, Top-down view
  const [isInvalidFrontView, setIsInvalidFrontView] = useState(false);
  const [isInvalidProfileView, setIsInvalidProfileView] = useState(false);
  const [isInvalid45DegreeView, setIsInvalid45DegreeView] = useState(false);
  const [isInvalidTopDownView, setIsInvalidTopDownView] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null); // Initialize with null
  const [formattedDate, setFormattedDate] = useState("");

  const handleDateOfBirthChange = ({ startDate }: any) => {
    setSelectedDate(startDate);

    // Extract the startDate from the selectedDate object
    const formattedDate =
      startDate instanceof Date ? startDate.toLocaleDateString() : startDate;

    setFormattedDate(formattedDate);

    // Set other states and perform validation
    setDateOfBirth(formattedDate);
    setIsInvalidDateOfBirth(!formattedDate);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (
      // Personal Information
      validateEmail(email) &&
      /^[a-zA-Z]+$/.test(firstName) &&
      /^[a-zA-Z]+$/.test(lastName) &&
      instagramUrl &&
      !/^\d+$/.test(phoneNumber) &&
      address &&
      // dateOfBirth &&
      nationality &&
      yourStory.length > 8 &&

      // Measurements
      height &&
      weight &&
      bust &&
      waist &&
      hips &&
      shoeSize &&
      dressSize &&
      pantsSize &&
      hairColor &&
      eyeColor &&
      tattoos &&
      piercings &&

      // Polaroid
      frontView &&
      profileView &&
      degreeView &&
      topDownView
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
      !/^[a-zA-Z]+$/.test(firstName) ||
      !/^[a-zA-Z]+$/.test(lastName) ||
      !instagramUrl ||
      //Phone should be number
      !/^\d+$/.test(phoneNumber) ||
      !address ||
      // !dateOfBirth ||
      !nationality ||
      yourStory.length < 8 ||

      // Measurements
      !height ||
      !weight ||
      !bust ||
      !waist ||
      !hips ||
      !shoeSize ||
      !dressSize ||
      !pantsSize ||
      !hairColor ||
      !eyeColor ||
      !tattoos ||
      !piercings ||

      //Polaroid
      !frontView ||
      !profileView ||
      !degreeView ||
      !topDownView
    ) {
      // Set validation states to display error messages
      setIsInvalidEmail(!validateEmail(email));
      setIsInvalidFirstName(!/^[a-zA-Z]+$/.test(firstName));
      setIsInvalidLastName(!/^[a-zA-Z]+$/.test(lastName));
      setIsInvalidInstagramUrl(!instagramUrl);
      setIsInvalidPhoneNumber(!phoneNumber);
      setIsInvalidAddress(!address);
      // setIsInvalidDateOfBirth(!dateOfBirth);
      setIsInvalidNationality(!nationality);
      setIsInvalidYourStory(yourStory.length < 8);

      // Measurements
      setIsInvalidHeight(!height);
      setIsInvalidWeight(!weight);
      setIsInvalidBust(!bust);
      setIsInvalidWaist(!waist);
      setIsInvalidHips(!hips);
      setIsInvalidShoeSize(!shoeSize);
      setIsInvalidDressSize(!dressSize);
      setIsInvalidPantsSize(!pantsSize);
      setIsInvalidHairColor(!hairColor);
      setIsInvalidEyeColor(!eyeColor);
      setIsInvalidTattoos(!tattoos);
      setIsInvalidPiercings(!piercings);

      // Polaroid
      setIsInvalidFrontView(!frontView);
      setIsInvalidProfileView(!profileView);
      setIsInvalid45DegreeView(!degreeView);
      setIsInvalidTopDownView(!topDownView);

      setIsLoading(false);
      setIsFormValid(false);

      return;
    }
    // If all fields are valid, proceed with submitting the form
    setIsFormValid(true); // Add this line
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //Personal Information
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsInvalidEmail(!validateEmail(e.target.value));
    checkFormValidity();
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 4,
    onDrop: (acceptedFiles: any) => {
      // Handle the dropped files here and set the state variables accordingly
      setFrontView(acceptedFiles[0]);
      setProfileView(acceptedFiles[1]);
      setDegreeView(acceptedFiles[2]);
      setTopDownView(acceptedFiles[3]);
    },
  });

  const handleImageDrop = (
    files: File[],
    setImageState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageState(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <React.Fragment>
      <Card
        classNames={{ base: "max-w-7xl mx-auto" }}
        isBlurred
        shadow="none"
        radius="none"
      >
        {!isSubmitted ? (
          <form className=" flex flex-col " onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name*"
                  description="Your first name"
                  isInvalid={isInvalidFirstName}
                  errorMessage={
                    isInvalidFirstName
                      ? firstName.trim() === ""
                        ? "Please enter your first name"
                        : "Please enter a valid character"
                      : ""
                  }
                  // change the input border color if the input is valid to success

                  classNames={{
                    inputWrapper:
                      firstName.trim() !== "" ? "border-success " : "danger",
                    errorMessage: isInvalidFirstName
                      ? "text-danger"
                      : "text-success",
                  }}
                  color={isInvalidFirstName ? "danger" : "warning"}
                  variant="bordered"
                  radius="none"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setIsInvalidFirstName(!/^[a-zA-Z]+$/.test(e.target.value));
                    checkFormValidity();
                  }}
                />

                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  description="Your last name"
                  isInvalid={isInvalidLastName}
                  errorMessage={
                    isInvalidLastName
                      ? lastName.trim() === ""
                        ? "Please enter your last name"
                        : "Please enter a valid character"
                      : ""
                  }
                  classNames={{
                    inputWrapper:
                      lastName.trim() !== "" ? "border-success " : "danger",
                  }}
                  color={isInvalidLastName ? "danger" : "warning"}
                  variant="bordered"
                  radius="none"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setIsInvalidLastName(!/^[a-zA-Z]+$/.test(e.target.value));
                    checkFormValidity();
                  }}
                />


                <div className="relative w-full">
                  <Input
                    type="text"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    description="Your date of birth"
                    isInvalid={isInvalidDateOfBirth}
                    errorMessage={
                      isInvalidDateOfBirth
                        ? "Please enter your date of birth"
                        : ""
                    }
                    classNames={{inputWrapper: dateOfBirth.trim() !== "" ? "border-success " : "danger" }}
                    color={isInvalidDateOfBirth ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={formattedDate} // Use the formatted date
                    onChange={(e) => {
                      // This is just for handling manual input, not necessary for Datepicker
                      setFormattedDate(e.target.value);
                      setIsInvalidDateOfBirth(!e.target.value);
                      checkFormValidity();
                    }}
                  />
                  <Datepicker
                    asSingle={true}
                    useRange={false}
                    value={selectedDate}
                    placeholder=""
                    onChange={handleDateOfBirthChange}
                    containerClassName={`z-30 absolute right-0 text-default-100  w-[3.3rem] bottom-[34%]  border-default-200 h-14 }`}
                    inputClassName={`w-0 h-0 text-default-100  `}
                    toggleClassName={`w-full text-default-300 hover:text-default-500  mt-1  pl-4 h-[3.3rem]`}
                    primaryColor="amber"
                  />
                </div>
                {/* // nationality */}
                <Input
                  type="text"
                  id="nationality"
                  name="nationality"
                  placeholder="Nationality"
                  description="Country of Citizenship"
                  isInvalid={isInvalidNationality}
                  errorMessage={
                    isInvalidNationality ? "Please enter your Nationality" : ""
                  }
                  classNames={{
                    inputWrapper:
                      nationality.trim() !== "" ? "border-success " : "danger",
                  }}
                  color={isInvalidNationality ? "danger" : "warning"}
                  variant="bordered"
                  radius="none"
                  value={nationality}
                  onChange={(e) => {
                    setNationality(e.target.value);
                    setIsInvalidNationality(!e.target.value);
                    checkFormValidity();
                  }}
                />



                <Input
                  type="text"
                  id="instagramUrl"
                  name="instagramUrl"
                  placeholder="Instagram Url"
                  description="Your Instagram Url or username (e.g. @username)"
                  isInvalid={isInvalidInstagramUrl}
                  errorMessage={
                    isInvalidInstagramUrl
                      ? "Please enter your Instagram Url"
                      : ""
                  }
                  classNames={{
                    inputWrapper:
                      instagramUrl.trim() !== "" ? "border-success " : "danger",
                  }}
                  color={isInvalidInstagramUrl ? "danger" : "warning"}
                  variant="bordered"
                  radius="none"
                  value={instagramUrl}
                  onChange={(e) => {
                    setInstagramUrl(e.target.value);
                    setIsInvalidInstagramUrl(!e.target.value);
                    checkFormValidity();
                  }}
                />

                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  description="This is where will send you a response"
                  isInvalid={isInvalidEmail}
                  errorMessage={
                    isInvalidEmail ? "Please enter a valid email" : ""
                  }
                  classNames={{
                    inputWrapper:
                      email.trim() !== "" ? "border-success " : "danger",
                  }}
                  color={isInvalidEmail ? "danger" : "warning"}
                  variant="bordered"
                  radius="none"
                  value={email}
                  onChange={handleEmailChange}
                />


                <Input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  description="This is where will send you a response"
                  isInvalid={isInvalidPhoneNumber}
                  errorMessage={
                    isInvalidPhoneNumber
                      ? phoneNumber.trim() === ""
                        ? "Please enter your phone number"
                        : "Please enter a number"
                      : ""
                  }
                  classNames={{
                    inputWrapper:
                      phoneNumber.trim() !== "" ? "border-success " : "danger",
                  }}
                  color={isInvalidPhoneNumber ? "danger" : "warning"}
                  variant="bordered"
                  radius="none"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setIsInvalidPhoneNumber(!/^\d+$/.test(e.target.value));
                    checkFormValidity();
                  }}
                />

                <Input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  description="The address you currently live in (e.g. street, house number, etc.)"
                  isInvalid={isInvalidAddress}
                  errorMessage={
                    isInvalidAddress ? "Please enter your address" : ""
                  }
                  classNames={{
                    inputWrapper:
                      address.trim() !== "" ? "border-success " : "danger",
                  }}
                  color={isInvalidAddress ? "danger" : "warning"}
                  variant="bordered"
                  radius="none"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setIsInvalidAddress(!e.target.value);
                    checkFormValidity();
                  }}
                />

              <Textarea id="yourStory"
                name="yourStory"
                placeholder="Your Story"
                description="Tell me about yourself"
                isInvalid={isInvalidYourStory}
                errorMessage={
                  isInvalidYourStory
                    ? "Your story should have at least 8 characters "
                    : ""
                }
                classNames={{
                  inputWrapper:
                    yourStory.trim() !== "" ? "border-success " : "danger",
                }}
                color={isInvalidYourStory ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={yourStory}
                onChange={(e) => {
                  setYourStory(e.target.value);
                  setIsInvalidYourStory(e.target.value.length < 8);
                  checkFormValidity();
                }}
              />
            </div>

            {/* //Measurements */}
            <div className="w-full">
              <p
                className={`text-default-700  text-center ${title({
                  size: "lg",
                })}`}
              >
                BECOME ELITE
              </p>
              <p
                className={`!text-default-500 mb-4 ${paragraph({
                  size: "sm",
                })}`}
              >
                Your feedback is valuable. Feel free to drop me a message when
                you can. I appreciate your time and thoughts!
              </p>

              <div className="flex flex-row  gap-4 md:gap-10">
                <div className="flex flex-col  gap-4 md:gap-10 w-full">
                  <Input
                    type="number"
                    id="height"
                    name="height"
                    placeholder="Height"
                    description="Your height in cm"
                    isInvalid={isInvalidHeight}
                    errorMessage={
                      isInvalidHeight ? "Please enter your height" : ""
                    }
                    color={isInvalidHeight ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={height}
                    onChange={(e) => {
                      setHeight(e.target.value);
                      setIsInvalidHeight(!e.target.value);
                      checkFormValidity();
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 font-bold text-base">
                          kg
                        </span>
                      </div>
                    }
                  />

                  <Input
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Weight"
                    description="Your weight in kg"
                    isInvalid={isInvalidWeight}
                    errorMessage={
                      isInvalidWeight ? "Please enter your weight" : ""
                    }
                    color={isInvalidWeight ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                      setIsInvalidWeight(!e.target.value);
                      checkFormValidity();
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 font-bold text-base">
                          kg
                        </span>
                      </div>
                    }
                  />

                  <Input
                    type="text"
                    id="hairColor"
                    name="hairColor"
                    placeholder="Hair Color"
                    description="Your hair color"
                    isInvalid={isInvalidHairColor}
                    errorMessage={
                      isInvalidHairColor ? "Please enter your hair color" : ""
                    }
                    color={isInvalidHairColor ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={hairColor}
                    onChange={(e) => {
                      setHairColor(e.target.value);
                      setIsInvalidHairColor(!e.target.value);
                      checkFormValidity();
                    }}
                  />

                  <Input
                    type="text"
                    id="eyeColor"
                    name="eyeColor"
                    placeholder="Eye Color"
                    description="Your eye color"
                    isInvalid={isInvalidEyeColor}
                    errorMessage={
                      isInvalidEyeColor ? "Please enter your eye color" : ""
                    }
                    color={isInvalidEyeColor ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={eyeColor}
                    onChange={(e) => {
                      setEyeColor(e.target.value);
                      setIsInvalidEyeColor(!e.target.value);
                      checkFormValidity();
                    }}
                  />
                </div>
                <div className="flex flex-col  gap-4 md:gap-10 w-full">
                  <Input
                    type="text"
                    id="waist"
                    name="waist"
                    placeholder="Waist"
                    description="Your waist in cm"
                    isInvalid={isInvalidWaist}
                    errorMessage={
                      isInvalidWaist ? "Please enter your waist" : ""
                    }
                    color={isInvalidWaist ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={waist}
                    onChange={(e) => {
                      setWaist(e.target.value);
                      setIsInvalidWaist(!e.target.value);
                      checkFormValidity();
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 font-bold text-base">
                          cm
                        </span>
                      </div>
                    }
                  />

                  <Input
                    type="text"
                    id="hips"
                    name="hips"
                    placeholder="Hips"
                    description="Your hips in cm"
                    isInvalid={isInvalidHips}
                    errorMessage={isInvalidHips ? "Please enter your hips" : ""}
                    color={isInvalidHips ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={hips}
                    onChange={(e) => {
                      setHips(e.target.value);
                      setIsInvalidHips(!e.target.value);
                      checkFormValidity();
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 font-bold text-base">
                          cm
                        </span>
                      </div>
                    }
                  />

                  <Input
                    type="text"
                    id="bust"
                    name="bust"
                    placeholder="Bust"
                    description="Your bust in cm"
                    isInvalid={isInvalidBust}
                    errorMessage={isInvalidBust ? "Please enter your bust" : ""}
                    color={isInvalidBust ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={bust}
                    onChange={(e) => {
                      setBust(e.target.value);
                      setIsInvalidBust(!e.target.value);
                      checkFormValidity();
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 font-bold text-base">
                          cm
                        </span>
                      </div>
                    }
                  />

                  <Input
                    type="text"
                    id="shoeSize"
                    name="shoeSize"
                    placeholder="Shoe Size"
                    description="Your shoe size in cm"
                    isInvalid={isInvalidShoeSize}
                    errorMessage={
                      isInvalidShoeSize ? "Please enter your shoe size" : ""
                    }
                    color={isInvalidShoeSize ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={shoeSize}
                    onChange={(e) => {
                      setShoeSize(e.target.value);
                      setIsInvalidShoeSize(!e.target.value);
                      checkFormValidity();
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 font-bold text-base">
                          cm
                        </span>
                      </div>
                    }
                  />
                </div>
                <div className="flex flex-col  gap-4 md:gap-10 w-full">
                  <Input
                    type="text"
                    id="dressSize"
                    name="dressSize"
                    placeholder="Dress Size"
                    description="Your dress size in cm"
                    isInvalid={isInvalidDressSize}
                    errorMessage={
                      isInvalidDressSize ? "Please enter your dress size" : ""
                    }
                    color={isInvalidDressSize ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={dressSize}
                    onChange={(e) => {
                      setDressSize(e.target.value);
                      setIsInvalidDressSize(!e.target.value);
                      checkFormValidity();
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 font-bold text-base">
                          cm
                        </span>
                      </div>
                    }
                  />

                  <Input
                    type="text"
                    id="pantsSize"
                    name="pantsSize"
                    placeholder="Pants Size"
                    description="Your pants size in cm"
                    isInvalid={isInvalidPantsSize}
                    errorMessage={
                      isInvalidPantsSize ? "Please enter your pants size" : ""
                    }
                    color={isInvalidPantsSize ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={pantsSize}
                    onChange={(e) => {
                      setPantsSize(e.target.value);
                      setIsInvalidPantsSize(!e.target.value);
                      checkFormValidity();
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 font-bold text-base">
                          cm
                        </span>
                      </div>
                    }
                  />

                  <Input
                    type="text"
                    id="tattoos"
                    name="tattoos"
                    placeholder="Tattoos"
                    description="Do you have tattoos?"
                    isInvalid={isInvalidTattoos}
                    errorMessage={
                      isInvalidTattoos ? "Please enter your tattoos" : ""
                    }
                    color={isInvalidTattoos ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={tattoos}
                    onChange={(e) => {
                      setTattoos(e.target.value);
                      setIsInvalidTattoos(!e.target.value);
                      checkFormValidity();
                    }}
                  />

                  <Input
                    type="text"
                    id="piercings"
                    name="piercings"
                    placeholder="Piercings"
                    description="Do you have piercings?"
                    isInvalid={isInvalidPiercings}
                    errorMessage={
                      isInvalidPiercings ? "Please enter your piercings" : ""
                    }
                    color={isInvalidPiercings ? "danger" : "warning"}
                    variant="bordered"
                    radius="none"
                    value={piercings}
                    onChange={(e) => {
                      setPiercings(e.target.value);
                      setIsInvalidPiercings(!e.target.value);
                      checkFormValidity();
                    }}
                  />
                </div>
              </div>
            </div>


            {/* //Polaroid */}
            <div className="flex flex-wrap gap-4 md:gap-10 w-full h-full">
            <div className="flex flex-row gap-4 md:gap-10 w-full h-full">
              <Dropzone
                onDrop={(acceptedFiles) =>
                  handleImageDrop(acceptedFiles, setFrontView)
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <div className="!w-full !h-full bg-red-200 border-2 border-default-300 p-4 bg-default-50/50 relative" {...getRootProps()}>
                    <input
                      id="frontView"
                      name="frontView"
                      {...getInputProps()}
                    />
                    <PlusIcon className="text-default-400  w-14 absolute z-30  " />
                    {frontView && <Image radius="none" className="object-cover aspect-square w-full h-full" width={800} height={800} src={frontView} alt="frontView" />}
                  </div>
                )}
              </Dropzone>

              <Dropzone
                onDrop={(acceptedFiles) =>
                  handleImageDrop(acceptedFiles, setProfileView)
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <div className="dropzone w-full h-full bg-red-200 border-2 border-default-300 p-4 bg-default-50/50 relative" {...getRootProps()}>
                    <input

                      id="profileView"
                      name="profileView"
                    {...getInputProps()} />

                    <PlusIcon className="text-default-400 w-14 absolute z-30  " />
                    {profileView && <Image radius="none" className="object-cover aspect-square w-full h-full" width={500} height={500} src={profileView} alt="profileView" />}
                  </div>
                )}
              </Dropzone>
            </div>
            <Dropzone
              onDrop={(acceptedFiles) =>
                handleImageDrop(acceptedFiles, setDegreeView)
              }
            >
              {({ getRootProps, getInputProps }) => (
                <div className="dropzone w-[24rem] h-96 max-h-[rem] max-w-xs bg-red-200 border-2 border-default-300 p-4 bg-default-50/50 relative" {...getRootProps()}>
                  <input
                    id="degreeView"
                    name="degreeView"
                   {...getInputProps()} />
                  <PlusIcon className="text-default-400 w-14 absolute z-30 top-[50%] left-[50%]" />
                  {degreeView && <Image width={500} height={500} src={degreeView} alt="degreeView" />}
                </div>
              )}
            </Dropzone>

            <Dropzone
              onDrop={(acceptedFiles) =>
                handleImageDrop(acceptedFiles, setTopDownView)
              }
            >
              {({ getRootProps, getInputProps }) => (
                <div className="dropzone max-w-xs bg-red-200 border-2 border-default-300 p-4 h-full bg-default-50/50 relative" {...getRootProps()}>
                  <input
                    id="topDownView"
                    name="topDownView"
                   {...getInputProps()} />
                  <PlusIcon className="text-default-400 w-14 absolute z-30 top-[50%] left-[50%]" />
                  {topDownView && <Image width={500} height={500} src={topDownView} alt="topDownView" />}
                </div>
              )}
            </Dropzone>

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
        ) : (
          <React.Fragment>
            <p
              className={`!text-default-500 mb-4 text-center ${title({
                size: "md",
              })}`}
            >
              Message sent successfully
            </p>
            <div className="p-4 flex flex-col items-center justify-center w-full h-full max-w-md relative animate-appearance-in  mx-auto">
              <div className="w-24 h-24 rounded-full  bg-success/5 border border-success-50 animate-pulse relative z-20" />
              <div className="w-16 h-16 rounded-full  animate-ping border border-success-50 absolute top-8 -z-10" />
              <div className="w-12 h-12 rounded-full  animate-ping border border-success-50 delay-300 duration-300 absolute top-10 -z-10" />
              <CheckBadgeIcon className="w-16 h-16 text-success  absolute top-8 animate-appearance-in drop-shadow-lg" />
              <p
                className={`!text-default-500 text-center mt-4 ${paragraph({
                  size: "sm",
                })}`}
              >
                I appreciate your message and will respond at my earliest
                convenience. Thank you for your understanding.
              </p>
            </div>
          </React.Fragment>
        )}
      </Card>
    </React.Fragment>
  );
};

export { ApplicationFormFemale };
