"use client";

import { paragraph, title } from "@/components/primitives";
import { Button, CircularProgress, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import InputField from "./InputField";
import PolaroidImageUpload from "./polaroidImage";
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  IdentificationIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

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
    const dateOfBirth =
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
      (validateEmail(email) &&
        /^[a-zA-Z]+$/.test(firstName) &&
        /^[a-zA-Z]+$/.test(lastName) &&
        instagramUrl &&
        /^\d+$/.test(phoneNumber) &&
        address &&
        formattedDate &&
        nationality &&
        yourStory.length > 8 &&
        // Measurements
        !/^\d+$/.test(height)) ||
      !/^\d+$/.test(weight) ||
      !/^\d+$/.test(bust) ||
      !/^\d+$/.test(waist) ||
      !/^\d+$/.test(hips) ||
      !/^\d+$/.test(shoeSize) ||
      !/^\d+$/.test(dressSize) ||
      !/^\d+$/.test(pantsSize) ||
      (hairColor && eyeColor && tattoos && piercings)
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
      !/^\d+$/.test(height) ||
      !/^\d+$/.test(weight) ||
      !/^\d+$/.test(bust) ||
      !/^\d+$/.test(waist) ||
      !/^\d+$/.test(hips) ||
      !/^\d+$/.test(shoeSize) ||
      !/^\d+$/.test(dressSize) ||
      !/^\d+$/.test(pantsSize) ||
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
      setIsInvalidFirstName(!firstName);
      setIsInvalidLastName(!lastName);
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
      {!isSubmitted ? (
        <form
          className="flex flex-col h-full max-w-7xl mx-auto mt-4 md:mt-6"
          onSubmit={handleSubmit}
        >
          {/* //Personal Information */}
          <div>
            <div className="xl:-ml-12 flex flex-wrap items-center gap-2">
              <div className="rounded-full p-2 bg-warning">
                <IdentificationIcon className="w-6 h-6 text-background" />
              </div>
              <h2 className={`!font-bold ${title({ size: "v2xl" })}`}>
                Personal Information
              </h2>
            </div>
            {/* what else can i add to make it more informative   */}
            <p
              className={`!text-default-500 mb-4 md:mb-8 mt-4 md:mt-6 ${paragraph(
                { size: "lg" }
              )}`}
            >
              Your personal information is valuable to us. If you&apos;re under 18,
              kindly obtain parental/guardian consent before providing your
              details. This step ensures a secure and trustworthy experience for
              everyone.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
            {/* //Personal Information */}
            {/* // firstName */}
            <InputField
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              isInvalid={isInvalidFirstName}
              errorMessage={
                isInvalidFirstName ? "Please enter a valid first name" : ""
              }
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setIsInvalidFirstName(!/^[a-zA-Z]+$/.test(e.target.value));
                checkFormValidity();
              }}
            />
            {/* // lastName */}
            <InputField
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              isInvalid={isInvalidLastName}
              errorMessage={
                isInvalidLastName ? "Please enter a valid last name" : ""
              }
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setIsInvalidLastName(!/^[a-zA-Z]+$/.test(e.target.value));
                checkFormValidity();
              }}
            />

            {/* // dateOfBirth */}
            <div className="relative w-full group  ">
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
                  isInvalidDateOfBirth ? "Please enter your date of birth" : ""
                }
                classNames={{
                  inputWrapper: `group-hover:border-default-400 transition-all  ${
                    dateOfBirth.trim() !== "" ? "border-success " : "danger"
                  }`,
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
                containerClassName={`z-30 w-full -mt-14 relative right-1 text-default-100  w-[3.3rem] bottom-[7%]  border-default-200 h-14 }`}
                inputClassName={`w-0 h-0 text-default-100 `}
                toggleClassName={`w-full group-hover:text-default-500 transition-all  ml-1 group -mt-[1.6rem] pr-4 h-[3.8rem] flex items-center justify-end cursor-pointer ${
                  dateOfBirth.trim() !== ""
                    ? "text-success "
                    : "text-default-300"
                }`}
                primaryColor="amber"
              />
            </div>
            {/* // email */}
            <InputField
              type="email"
              id="email"
              name="email"
              label="Email"
              isInvalid={isInvalidEmail}
              errorMessage={isInvalidEmail ? "Please enter a valid email" : ""}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsInvalidEmail(!validateEmail(e.target.value));
                checkFormValidity();
              }}
            />
            {/* Nationality */}
            <InputField
              type="text"
              id="nationality"
              name="nationality"
              label="Nationality"
              isInvalid={isInvalidNationality}
              errorMessage={
                isInvalidNationality ? "Please enter a valid nationality" : ""
              }
              value={nationality}
              onChange={(e) => {
                setNationality(e.target.value);
                setIsInvalidNationality(!e.target.value);
                checkFormValidity();
              }}
            />

            {/* Instagram URL */}
            <InputField
              type="text"
              id="instagramUrl"
              name="instagramUrl"
              label="Instagram URL"
              isInvalid={isInvalidInstagramUrl}
              errorMessage={
                isInvalidInstagramUrl
                  ? "Please enter a valid Instagram URL"
                  : ""
              }
              value={instagramUrl}
              onChange={(e) => {
                setInstagramUrl(e.target.value);
                setIsInvalidInstagramUrl(!e.target.value);
                checkFormValidity();
              }}
            />

            {/* Phone Number */}
            <InputField
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              isInvalid={isInvalidPhoneNumber}
              errorMessage={
                isInvalidPhoneNumber ? "Please enter a valid phone number" : ""
              }
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setIsInvalidPhoneNumber(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
            />
            {/* Address */}
            <InputField
              type="text"
              id="address"
              name="address"
              label="Address"
              isInvalid={isInvalidAddress}
              errorMessage={
                isInvalidAddress ? "Please enter a valid address" : ""
              }
              value={address}
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
                  yourStory.trim() !== "" ? "text-success" : "text-default-500",
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
          <div>
            <div className="xl:-ml-12 flex flex-wrap items-center gap-2">
              <div className="rounded-full p-2 bg-warning">
                <UserIcon className="w-6 h-6 text-background" />
              </div>
              <h2 className={`!font-bold ${title({ size: "v2xl" })}`}>
                Measurements
              </h2>
            </div>
            <p
              className={`!text-default-500 mb-4 mt-4 md:mt-6 ${paragraph({
                size: "lg",
              })}`}
            >
              For precise measurements, wear a bikini and have a trusted person
              measure you. Use a measuring tape and follow these steps:
            </p>
            <ul
              className={`flex flex-col gap-2 !text-default-500  mb-4 md:mb-8 ${paragraph(
                { size: "md" }
              )}`}
            >
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="min-w-[1rem] h-4 mt-1 text-warning" />
                Measure around the fullest part of your bust.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="min-w-[1rem] h-4 mt-1 text-warning" />
                Place the measuring tape about 1 inch above your belly button.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="min-w-[1rem] h-4 mt-1 text-warning" />
                Measure around the fullest part of your hips.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="min-w-[1rem] h-4 mt-1 text-warning" />
                Stand with feet together and measure around the largest part of
                your lower hip and bottom.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
            {/* // height */}
            <InputField
              type="text"
              id="height"
              name="height"
              label="Height"
              isInvalid={isInvalidHeight}
              errorMessage={
                isInvalidHeight
                  ? height.trim() === ""
                    ? "Please enter a valid height"
                    : "Please enter a valid height number"
                  : ""
              }
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                setIsInvalidHeight(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
              endContent="cm"
            />
            {/* // weight */}
            <InputField
              type="text"
              id="weight"
              name="weight"
              label="Weight"
              isInvalid={isInvalidWeight}
              errorMessage={
                isInvalidWeight
                  ? weight.trim() === ""
                    ? "Please enter a valid weight"
                    : "Please enter a valid weight number"
                  : ""
              }
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                setIsInvalidWeight(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
              endContent="kg"
            />
            {/* // bust */}
            <InputField
              type="text"
              id="bust"
              name="bust"
              label="Bust"
              isInvalid={isInvalidBust}
              errorMessage={
                isInvalidBust
                  ? bust.trim() === ""
                    ? "Please enter a valid bust"
                    : "Please enter a valid bust number"
                  : ""
              }
              value={bust}
              onChange={(e) => {
                setBust(e.target.value);
                setIsInvalidBust(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
              endContent="cm"
            />
            {/* // waist */}
            <InputField
              type="text"
              id="waist"
              name="waist"
              label="Waist"
              isInvalid={isInvalidWaist}
              errorMessage={
                isInvalidWaist
                  ? waist.trim() === ""
                    ? "Please enter a valid waist"
                    : "Please enter a valid waist number"
                  : ""
              }
              value={waist}
              onChange={(e) => {
                setWaist(e.target.value);
                setIsInvalidWaist(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
              endContent="cm"
            />

            {/* // hips */}
            <InputField
              type="text"
              id="hips"
              name="hips"
              label="Hips"
              isInvalid={isInvalidHips}
              errorMessage={
                isInvalidHips
                  ? hips.trim() === ""
                    ? "Please enter a valid hips"
                    : "Please enter a valid hips number"
                  : ""
              }
              value={hips}
              onChange={(e) => {
                setHips(e.target.value);
                setIsInvalidHips(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
              endContent="cm"
            />
            {/* // shoeSize */}
            <InputField
              type="text"
              id="shoeSize"
              name="shoeSize"
              label="Shoe Size"
              isInvalid={isInvalidShoeSize}
              errorMessage={
                isInvalidShoeSize
                  ? shoeSize.trim() === ""
                    ? "Please enter a valid shoe size"
                    : "Please enter a valid shoe size number"
                  : ""
              }
              value={shoeSize}
              onChange={(e) => {
                setShoeSize(e.target.value);
                setIsInvalidShoeSize(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
              endContent="cm"
            />
            {/* // dressSize */}
            <InputField
              type="text"
              id="dressSize"
              name="dressSize"
              label="Dress Size"
              isInvalid={isInvalidDressSize}
              errorMessage={
                isInvalidDressSize
                  ? dressSize.trim() === ""
                    ? "Please enter a valid dress size"
                    : "Please enter a valid dress size number"
                  : ""
              }
              value={dressSize}
              onChange={(e) => {
                setDressSize(e.target.value);
                setIsInvalidDressSize(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
              endContent="cm"
            />
            {/* // pantsSize */}
            <InputField
              type="text"
              id="pantsSize"
              name="pantsSize"
              label="Pants Size"
              isInvalid={isInvalidPantsSize}
              errorMessage={
                isInvalidPantsSize
                  ? pantsSize.trim() === ""
                    ? "Please enter a valid pants size"
                    : "Please enter a valid pants size number"
                  : ""
              }
              value={pantsSize}
              onChange={(e) => {
                setPantsSize(e.target.value);
                setIsInvalidPantsSize(!/^\d+$/.test(e.target.value));
                checkFormValidity();
              }}
              endContent="cm"
            />
            {/* // hairColor */}
            <InputField
              type="text"
              id="hairColor"
              name="hairColor"
              label="Hair Color"
              isInvalid={isInvalidHairColor}
              errorMessage={
                isInvalidHairColor ? "Please enter a valid hair color" : ""
              }
              value={hairColor}
              onChange={(e) => {
                setHairColor(e.target.value);
                setIsInvalidHairColor(!e.target.value);
                checkFormValidity();
              }}
            />
            {/* // eyeColor */}
            <InputField
              type="text"
              id="eyeColor"
              name="eyeColor"
              label="Eye Color"
              isInvalid={isInvalidEyeColor}
              errorMessage={
                isInvalidEyeColor ? "Please enter a valid eye color" : ""
              }
              value={eyeColor}
              onChange={(e) => {
                setEyeColor(e.target.value);
                setIsInvalidEyeColor(!e.target.value);
                checkFormValidity();
              }}
            />
            {/* // tattoos */}
            <InputField
              type="text"
              id="tattoos"
              name="tattoos"
              label="Tattoos"
              description="None or if many separate by comma"
              isInvalid={isInvalidTattoos}
              errorMessage={
                isInvalidTattoos
                  ? "Please enter a valid tattoos (none or if many separate by comma)"
                  : ""
              }
              value={tattoos}
              onChange={(e) => {
                setTattoos(e.target.value);
                setIsInvalidTattoos(!e.target.value);
                checkFormValidity();
              }}
            />
            {/* // piercings */}
            <InputField
              type="text"
              id="piercings"
              name="piercings"
              label="Piercings "
              description="None or if many separate by comma"
              isInvalid={isInvalidPiercings}
              errorMessage={
                // None or if many separate by comma
                isInvalidPiercings
                  ? "Please enter a valid piercings (none or if many separate by comma)"
                  : ""
              }
              value={piercings}
              onChange={(e) => {
                setPiercings(e.target.value);
                setIsInvalidPiercings(!e.target.value);
                checkFormValidity();
              }}
            />
          </div>

          {/* //Polaroid */}
          <div>
            <div className="xl:-ml-12 flex flex-wrap items-center gap-2">
              <div className="rounded-full p-2 bg-warning">
                <PhotoIcon className="w-6 h-6 text-background" />
              </div>
              <h2 className={`!font-bold ${title({ size: "v2xl" })}`}>Photo</h2>
            </div>

            <p
              className={`!text-default-500 mb-4 md:mb-8 mt-4 md:mt-6 ${paragraph(
                { size: "lg" }
              )}`}
            >
              Please wear clothes that fit well in the photos, so we can see
              your body shape clearly. Avoid using makeup or large accessories
              like hoop earrings or bracelets, as they might be distracting.
              Please don&apos;t smile, just be your natural and confident self and
              relax!
            </p>
          </div>
          <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 sm:gap-8 mb-4 sm:mb-8 relative  !h-full">
            {/* //Polaroid
          //Image Upload 4 images Front view, ,Profile view, degree view, Top-down view
          //Front view */}
            <PolaroidImageUpload
              onClientUploadComplete={(res) => setImageFront(res[0].url)}
              onUploadError={(error) => setUploadError(error.message)}
              imageUrl={imageFront}
              setUploadError={setUploadError}
              uploadError={uploadError}
              label="Front view"
            />
            {/* //Profile view */}
            <PolaroidImageUpload
              onClientUploadComplete={(res) => setImageProfile(res[0].url)}
              onUploadError={(error) => setUploadError(error.message)}
              imageUrl={imageProfile}
              setUploadError={setUploadError}
              uploadError={uploadError}
              label="Profile view"
            />
            {/* //degree view */}
            <PolaroidImageUpload
              onClientUploadComplete={(res) => setImageDegree(res[0].url)}
              onUploadError={(error) => setUploadError(error.message)}
              imageUrl={imageDegree}
              setUploadError={setUploadError}
              uploadError={uploadError}
              label="Degree view"
            />
            {/* //Top-down view */}
            <PolaroidImageUpload
              onClientUploadComplete={(res) => setImageTopDown(res[0].url)}
              onUploadError={(error) => setUploadError(error.message)}
              imageUrl={imageTopDown}
              setUploadError={setUploadError}
              uploadError={uploadError}
              label="Top-down view"
            />
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
            {isLoading ? "Application Sending..... " : "Submit Application"}
          </Button>
          <p className={`!text-default-500  ${paragraph({ size: "sm" })}`}>
            By submitting, I affirm that the images and information presented
            are either my own or that I have the proper authorization to submit
            them on behalf of the applicant
          </p>
        </form>
      ) : (
        <React.Fragment>
          <p
            className={`!text-default-500 mb-4 text-center ${title({
              size: "md",
            })}`}
          >
            Thank you for your application
          </p>
          <div className="p-4 flex flex-col items-center justify-center w-full h-full max-w-lg relative animate-appearance-in  mx-auto">
            <div className="w-24 h-24 rounded-full  bg-success/5 border border-success-50 animate-pulse relative z-20" />
            <div className="w-16 h-16 rounded-full  animate-ping border border-success-50 absolute top-8 -z-10" />
            <div className="w-12 h-12 rounded-full  animate-ping border border-success-50 delay-300 duration-300 absolute top-10 -z-10" />
            <CheckBadgeIcon className="w-16 h-16 text-success  absolute top-8 animate-appearance-in drop-shadow-lg" />
            <p
              className={`!text-default-500 text-center mt-4 ${paragraph({
                size: "sm",
              })}`}
            >
              Our team will now carefully assess your application, and we aim to
              provide you with a response within the next{" "}
              <strong className="text-warning">14 days</strong>. Please be
              patient during this process, as we strive to give each application
              the attention it deserves.
            </p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export { ApplicationFormFemale };
