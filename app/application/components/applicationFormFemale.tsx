"use client";

import { paragraph, title } from "@/components/primitives";
import { CalendarDaysIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  CircularProgress,
  Image,
  Input,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { UploadButton } from "@/config/uploadthings";
import { allowedContentTextLabelGenerator } from "uploadthing/client";

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
  //Personal Information end


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
  //Measurements end

  //Polaroid
  //Image Upload 4 images Front view, ,Profile view, 45 degree view, Top-down view
  const [imageFront, setImageFront] = useState<string>("");
  const [imageProfile, setImageProfile] = useState<string>("");
  const [imageDegree, setImageDegree] = useState<string>("");
  const [imageTopDown, setImageTopDown] = useState<string>("");
  const [uploadError, setUploadError] = useState<string | null>(null);
  //Polaroid end

  //Datepicker
  const [selectedDate, setSelectedDate] = useState(null); // Initialize with null
  const [formattedDate, setFormattedDate] = useState("");
  const handleDateOfBirthChange = ({ startDate }: any) => {
    setSelectedDate(startDate);

    // Extract the startDate from the selectedDate object
    const dateOfBirth  =
      startDate instanceof Date ? startDate.toLocaleDateString() : startDate;

    setFormattedDate(dateOfBirth);

    // Set other states and perform validation
    setDateOfBirth(dateOfBirth);
    setIsInvalidDateOfBirth(!dateOfBirth);

    // Update the form validity
    checkFormValidity();
  };
  //Datepicker end

  const checkFormValidity = () => {
    if (
      // Personal Information
      validateEmail(email) &&
      /^[a-zA-Z]+$/.test(firstName) &&
      /^[a-zA-Z]+$/.test(lastName) &&
      instagramUrl &&
      /^\d+$/.test(phoneNumber) &&
      address &&
      dateOfBirth &&
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
      piercings
      // Polaroid
      // &&
      // frontView &&
      // profileView &&
      // degreeView &&
      // topDownView
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
      !dateOfBirth ||
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
      !piercings
      //Polaroid
      // ||
      // !frontView ||
      // !profileView ||
      // !degreeView ||
      // !topDownView
    ) {
      // Set validation states to display error messages
      setIsInvalidEmail(!validateEmail(email));
      setIsInvalidFirstName(!/^[a-zA-Z]+$/.test(firstName));
      setIsInvalidLastName(!/^[a-zA-Z]+$/.test(lastName));
      setIsInvalidInstagramUrl(!instagramUrl);
      setIsInvalidPhoneNumber(!phoneNumber);
      setIsInvalidAddress(!address);
      setIsInvalidDateOfBirth(!dateOfBirth);
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


      setIsLoading(false);
      setIsFormValid(false);

      return;
    }
    // If all fields are valid, proceed with submitting the form
    setIsFormValid(true); // Add this line
    const response = await fetch("/api/sendFormFemale", {
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
        dateOfBirth,
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
        imageFront,
        imageProfile,
        imageDegree,
        imageTopDown,
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
          <form className="flex flex-col h-full max-w-7xl mx-auto" onSubmit={handleSubmit}>
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
                  errorMessage: isInvalidFirstName
                    ? "text-danger"
                    : "text-success",
                  label:
                    firstName.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidFirstName ? "danger" : "warning"}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setIsInvalidFirstName(!/^[a-zA-Z]+$/.test(e.target.value));
                  checkFormValidity();
                }}
              />

              {/* // lastName */}
              <Input
                type="text"
                id="lastName"
                name="lastName"
                label="Last Name"
                isRequired
                isInvalid={isInvalidLastName}
                variant="bordered"
                radius="none"
                size="lg"
                value={lastName}
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
                  errorMessage: isInvalidLastName
                    ? "text-danger"
                    : "text-success",
                  label:
                    lastName.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidLastName ? "danger" : "warning"}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setIsInvalidLastName(!/^[a-zA-Z]+$/.test(e.target.value));
                  checkFormValidity();
                }}
              />
              {/* // dateOfBirth */}
              <div className="relative w-full">
                <Input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  label="Date of Birth"
                  isRequired
                  variant="bordered"
                  radius="none"
                  value={formattedDate}
                  size="lg"
                  isInvalid={isInvalidDateOfBirth}
                  errorMessage={
                    isInvalidDateOfBirth
                      ? "Please enter your date of birth"
                      : ""
                  }
                  classNames={{
                    inputWrapper:
                      dateOfBirth.trim() !== "" ? "border-success " : "danger",
                    errorMessage: isInvalidDateOfBirth
                      ? "text-danger"
                      : "text-success",
                    label:
                      dateOfBirth.trim() !== ""
                        ? "text-success"
                        : "text-default-500",
                  }}
                  color={isInvalidDateOfBirth ? "danger" : "warning"}
                  onChange={(e) => {
                    setFormattedDate(e.target.value);
                    setIsInvalidDateOfBirth(!e.target.value);
                    checkFormValidity();
                  }}
                />
                <Datepicker
                  asSingle={true}
                  useRange={false}
                  value={selectedDate}
                  onChange={handleDateOfBirthChange}
                  containerClassName={`z-30 absolute right-1 text-default-100  w-[3.3rem] bottom-[7%]  border-default-200 h-14 }`}
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
                label="Nationality"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                isInvalid={isInvalidNationality}
                errorMessage={
                  isInvalidNationality ? "Please enter your Nationality" : ""
                }
                classNames={{
                  inputWrapper:
                    nationality.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidNationality
                    ? "text-danger"
                    : "text-success",
                  label:
                    nationality.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidNationality ? "danger" : "warning"}
                value={nationality}
                onChange={(e) => {
                  setNationality(e.target.value);
                  setIsInvalidNationality(!e.target.value);
                  checkFormValidity();
                }}
              />
              {/* // instagramUrl */}
              <Input
                type="text"
                id="instagramUrl"
                name="instagramUrl"
                label="Instagram Url"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={instagramUrl}
                isInvalid={isInvalidInstagramUrl}
                errorMessage={
                  isInvalidInstagramUrl ? "Please enter your Instagram Url" : ""
                }
                classNames={{
                  inputWrapper:
                    instagramUrl.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidInstagramUrl
                    ? "text-danger"
                    : "text-success",
                  label:
                    instagramUrl.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidInstagramUrl ? "danger" : "warning"}
                onChange={(e) => {
                  setInstagramUrl(e.target.value);
                  setIsInvalidInstagramUrl(!e.target.value);
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
                errorMessage={
                  isInvalidEmail ? "Please enter a valid email" : ""
                }
                classNames={{
                  inputWrapper:
                    email.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidEmail ? "text-danger" : "text-success",
                  label:
                    email.trim() !== "" ? "text-success" : "text-default-500",
                }}
                color={isInvalidEmail ? "danger" : "warning"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsInvalidEmail(!validateEmail(e.target.value));
                  checkFormValidity();
                } }
              />
              {/* // phoneNumber */}
              <Input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={phoneNumber}
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
                  errorMessage: isInvalidPhoneNumber
                    ? "text-danger"
                    : "text-success",
                  label:
                    phoneNumber.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidPhoneNumber ? "danger" : "warning"}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setIsInvalidPhoneNumber(!/^\d+$/.test(e.target.value));
                  checkFormValidity();
                }}
              />
              {/* // address */}
              <Input
                type="text"
                id="address"
                name="address"
                label="Address"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={address}
                isInvalid={isInvalidAddress}
                errorMessage={
                  isInvalidAddress ? "Please enter your address" : ""
                }
                classNames={{
                  inputWrapper:
                    address.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidAddress
                    ? "text-danger"
                    : "text-success",
                  label:
                    address.trim() !== "" ? "text-success" : "text-default-500",
                }}
                color={isInvalidAddress ? "danger" : "warning"}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setIsInvalidAddress(!e.target.value);
                  checkFormValidity();
                }}
              />
              {/* // yourStory */}
              <Textarea
                id="yourStory"
                name="yourStory"
                variant="bordered"
                radius="none"
                size="lg"
                value={yourStory}
                isInvalid={isInvalidYourStory}
                label="Your Story"
                isRequired
                errorMessage={
                  isInvalidYourStory
                    ? "Your story should have at least 8 characters "
                    : ""
                }
                className="col-span-2"
                classNames={{
                  inputWrapper:
                    yourStory.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidYourStory
                    ? "text-danger"
                    : "text-success",
                  label:
                    yourStory.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidYourStory ? "danger" : "warning"}
                onChange={(e) => {
                  setYourStory(e.target.value);
                  setIsInvalidYourStory(e.target.value.length < 8);
                  checkFormValidity();
                }}
              />
            </div>

            {/* //Measurements */}

            <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">

              {/* // height */}
              <Input
                type="text"
                id="height"
                name="height"
                label="Height"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={height}
                isInvalid={isInvalidHeight}
                errorMessage={isInvalidHeight ? "Please enter your height" : ""}
                classNames={{
                  inputWrapper:
                    height.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidHeight
                    ? "text-danger"
                    : "text-success",
                  label:
                    height.trim() !== "" ? "text-success" : "text-default-500",
                }}
                color={isInvalidHeight ? "danger" : "warning"}
                onChange={(e) => {
                  setHeight(e.target.value);
                  setIsInvalidHeight(!e.target.value);
                  checkFormValidity();
                }}
                endContent={
                  <div className="pointer-events-none flex items-center mb-2">
                    <span className="text-default-400 font-bold text-base">
                      kg
                    </span>
                  </div>
                }
              />

              {/* // weight */}
              <Input
                type="text"
                id="weight"
                name="weight"
                label="Weight"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={weight}
                isInvalid={isInvalidWeight}
                errorMessage={isInvalidWeight ? "Please enter your weight" : ""}
                classNames={{
                  inputWrapper:
                    weight.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidWeight
                    ? "text-danger"
                    : "text-success",
                  label:
                    weight.trim() !== "" ? "text-success" : "text-default-500",
                }}
                color={isInvalidWeight ? "danger" : "warning"}
                onChange={(e) => {
                  setWeight(e.target.value);
                  setIsInvalidWeight(!e.target.value);
                  checkFormValidity();
                }}
                endContent={
                  <div className="pointer-events-none flex items-center mb-2">
                    <span className="text-default-400 font-bold text-base">
                      kg
                    </span>
                  </div>
                }
              />

              {/* // hairColor */}
              <Input
                type="text"
                id="hairColor"
                name="hairColor"
                label="Hair Color"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={hairColor}
                isInvalid={isInvalidHairColor}
                errorMessage={
                  isInvalidHairColor ? "Please enter your hair color" : ""
                }
                classNames={{
                  inputWrapper:
                    hairColor.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidHairColor
                    ? "text-danger"
                    : "text-success",
                  label:
                    hairColor.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidHairColor ? "danger" : "warning"}
                onChange={(e) => {
                  setHairColor(e.target.value);
                  setIsInvalidHairColor(!e.target.value);
                  checkFormValidity();
                }}
              />

              {/* // eyeColor */}
              <Input
                type="text"
                id="eyeColor"
                name="eyeColor"
                label="Eye Color"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={eyeColor}
                isInvalid={isInvalidEyeColor}
                errorMessage={
                  isInvalidEyeColor ? "Please enter your eye color" : ""
                }
                classNames={{
                  inputWrapper:
                    eyeColor.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidEyeColor
                    ? "text-danger"
                    : "text-success",
                  label:
                    eyeColor.trim() !== "" ? "text-success" : "text-default-500",
                }}
                color={isInvalidEyeColor ? "danger" : "warning"}
                onChange={(e) => {
                  setEyeColor(e.target.value);
                  setIsInvalidEyeColor(!e.target.value);
                  checkFormValidity();
                }}
              />

              {/* // waist */}
              <Input
                type="text"
                id="waist"
                name="waist"
                label="Waist"
                isRequired
                variant="bordered"
                radius="none"
                value={waist}
                isInvalid={isInvalidWaist}
                errorMessage={isInvalidWaist ? "Please enter your waist" : ""}
                classNames={{
                  inputWrapper:
                    waist.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidWaist
                    ? "text-danger"
                    : "text-success",
                  label:
                    waist.trim() !== "" ? "text-success" : "text-default-500",
                }}
                color={isInvalidWaist ? "danger" : "warning"}
                onChange={(e) => {
                  setWaist(e.target.value);
                  setIsInvalidWaist(!e.target.value);
                  checkFormValidity();
                }}
                endContent={
                  <div className="pointer-events-none flex items-center mb-2">
                    <span className="text-default-400 font-bold text-base">
                      cm
                    </span>
                  </div>
                }
              />

              {/* // hips */}
              <Input
                type="text"
                id="hips"
                name="hips"
                label="Hips"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={hips}
                isInvalid={isInvalidHips}
                errorMessage={isInvalidHips ? "Please enter your hips" : ""}
                classNames={{
                  inputWrapper:
                    hips.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidHips
                    ? "text-danger"
                    : "text-success",
                  label:
                    hips.trim() !== "" ? "text-success" : "text-default-500",
                }}
                color={isInvalidHips ? "danger" : "warning"}
                onChange={(e) => {
                  setHips(e.target.value);
                  setIsInvalidHips(!e.target.value);
                  checkFormValidity();
                }}
                endContent={
                  <div className="pointer-events-none flex items-center mb-2">
                    <span className="text-default-400 font-bold text-base">
                      cm
                    </span>
                  </div>
                }
              />

              {/* // bust */}
              <Input
                type="text"
                id="bust"
                name="bust"
                label="Bust"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={bust}
                isInvalid={isInvalidBust}
                errorMessage={isInvalidBust ? "Please enter your bust" : ""}
                classNames={{
                  inputWrapper: bust.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidBust ? "text-danger" : "text-success",
                  label: bust.trim() !== "" ? "text-success" : "text-default-500",
                }}
                color={isInvalidBust ? "danger" : "warning"}
                onChange={(e) => {
                  setBust(e.target.value);
                  setIsInvalidBust(!e.target.value);
                  checkFormValidity();
                }}
                endContent={
                  <div className="pointer-events-none flex items-center mb-2">
                    <span className="text-default-400 font-bold text-base">
                      cm
                    </span>
                  </div>
                }
              />

              {/* // shoeSize */}
              <Input
                type="text"
                id="shoeSize"
                name="shoeSize"
                label="Shoe Size"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={shoeSize}
                isInvalid={isInvalidShoeSize}
                errorMessage={
                  isInvalidShoeSize ? "Please enter your shoe size" : ""
                }
                classNames={{
                  inputWrapper:
                    shoeSize.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidShoeSize
                    ? "text-danger"
                    : "text-success",
                  label:
                    shoeSize.trim() !== ""
                      ? "text-success"
                      : "text-default-500",

                }}
                color={isInvalidShoeSize ? "danger" : "warning"}
                onChange={(e) => {
                  setShoeSize(e.target.value);
                  setIsInvalidShoeSize(!e.target.value);
                  checkFormValidity();
                }}
                endContent={
                  <div className="pointer-events-none flex items-center mb-2">
                    <span className="text-default-400 font-bold text-base">
                      cm
                    </span>
                  </div>
                }
              />

              {/* // dressSize */}
              <Input
                type="text"
                id="dressSize"
                name="dressSize"
                label="Dress Size"
                isRequired
                variant="bordered"
                radius="none"
                value={dressSize}
                size="lg"
                isInvalid={isInvalidDressSize}
                errorMessage={
                  isInvalidDressSize ? "Please enter your dress size" : ""
                }
                classNames={{
                  inputWrapper:
                    dressSize.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidDressSize
                    ? "text-danger"
                    : "text-success",
                  label:
                    dressSize.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidDressSize ? "danger" : "warning"}
                onChange={(e) => {
                  setDressSize(e.target.value);
                  setIsInvalidDressSize(!e.target.value);
                  checkFormValidity();
                }}
                endContent={
                  <div className="pointer-events-none flex items-center mb-2">
                    <span className="text-default-400 font-bold text-base">
                      cm
                    </span>
                  </div>
                }
              />

              {/* // pantsSize */}
              <Input
                type="text"
                id="pantsSize"
                name="pantsSize"
                label="Pants Size"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={pantsSize}
                isInvalid={isInvalidPantsSize}
                errorMessage={
                  isInvalidPantsSize ? "Please enter your pants size" : ""
                }
                classNames={{
                  inputWrapper:
                    pantsSize.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidPantsSize
                    ? "text-danger"
                    : "text-success",
                  label:
                    pantsSize.trim() !== ""
                      ? "text-success"
                      : "text-default-500",

                }}
                color={isInvalidPantsSize ? "danger" : "warning"}
                onChange={(e) => {
                  setPantsSize(e.target.value);
                  setIsInvalidPantsSize(!e.target.value);
                  checkFormValidity();
                }}
                endContent={
                  <div className="pointer-events-none flex items-center mb-2">
                    <span className="text-default-400 font-bold text-base">
                      cm
                    </span>
                  </div>
                }
              />

                {/* // tattoos */}
              <Input
                type="text"
                id="tattoos"
                name="tattoos"
                label="Tattoos"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={tattoos}
                isInvalid={isInvalidTattoos}
                errorMessage={
                  isInvalidTattoos ? "Please enter your tattoos" : ""
                }
                classNames={{
                  inputWrapper:
                    tattoos.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidTattoos
                    ? "text-danger"
                    : "text-success",
                  label:
                    tattoos.trim() !== ""
                      ? "text-success"
                      : "text-default-500",

                }}
                color={isInvalidTattoos ? "danger" : "warning"}
                onChange={(e) => {
                  setTattoos(e.target.value);
                  setIsInvalidTattoos(!e.target.value);
                  checkFormValidity();
                }}
              />

              {/* // piercings */}
              <Input
                type="text"
                id="piercings"
                name="piercings"
                label="Piercings"
                isRequired
                variant="bordered"
                radius="none"
                size="lg"
                value={piercings}
                isInvalid={isInvalidPiercings}
                errorMessage={
                  isInvalidPiercings ? "Please enter your piercings" : ""
                }
                classNames={{
                  inputWrapper:
                    piercings.trim() !== "" ? "border-success " : "danger",
                  errorMessage: isInvalidPiercings
                    ? "text-danger"
                    : "text-success",
                  label:
                    piercings.trim() !== ""
                      ? "text-success"
                      : "text-default-500",
                }}
                color={isInvalidPiercings ? "danger" : "warning"}
                onChange={(e) => {
                  setPiercings(e.target.value);
                  setIsInvalidPiercings(!e.target.value);
                  checkFormValidity();
                }}
              />
            </div>

            {/* //Polaroid */}
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


        </div>

            <Button
              color="warning"
              variant={isFormValid ? "solid" : "flat"} // Update this line
              type="submit"
              radius="none"
              size="lg"
              // isDisabled={!isFormValid}
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

export { ApplicationFormFemale };
