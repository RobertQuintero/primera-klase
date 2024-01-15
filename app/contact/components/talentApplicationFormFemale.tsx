"use client";

import { paragraph, title } from "@/components/primitives";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CircularProgress,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { start } from "repl";

const TalentApplicationFormFemale = () => {
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
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [yourStory, setYourStory] = useState("");

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
  const [tattoos, setTattoos] = useState(false);
  const [piercings, setPiercings] = useState(false);

  //Invalid states Personal Information
  const [isInvalidFirstName, setIsInvalidFirstName] = useState(false);
  const [isInvalidLastName, setIsInvalidLastName] = useState(false);
  const [isInvalidDateOfBirth, setIsInvalidDateOfBirth] = useState(false);
  const [isInvalidNationality, setIsInvalidNationality] = useState(false);
  const [isInvalidInstagramUrl, setIsInvalidInstagramUrl] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPhoneNumber, setIsInvalidPhoneNumber] = useState(false);
  const [isInvalidAddress, setIsInvalidAddress] = useState(false);
  const [isInvalidCity, setIsInvalidCity] = useState(false);
  const [isInvalidStateProvince, setIsInvalidStateProvince] = useState(false);
  const [isInvalidCountry, setIsInvalidCountry] = useState(false);
  const [isInvalidPostalCode, setIsInvalidPostalCode] = useState(false);
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
    // Check if all fields are valid
    if (
      validateEmail(email) &&
      /^[a-zA-Z]+$/.test(firstName) &&
      /^[a-zA-Z]+$/.test(lastName) &&
      instagramUrl &&
      phoneNumber &&
      address &&
      city &&
      country &&
      stateProvince &&
      postalCode &&
      dateOfBirth &&
      nationality &&
      yourStory.length > 8
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
      !validateEmail(email) ||
      !/^[a-zA-Z]+$/.test(firstName) ||
      !/^[a-zA-Z]+$/.test(lastName) ||
      !instagramUrl ||
      !phoneNumber ||
      !address ||
      !city ||
      !country ||
      !stateProvince ||
      !postalCode ||
      !dateOfBirth ||
      !nationality ||
      yourStory.length < 8
    ) {
      // Set validation states to display error messages
      setIsInvalidEmail(!validateEmail(email));
      setIsInvalidFirstName(!/^[a-zA-Z]+$/.test(firstName));
      setIsInvalidLastName(!/^[a-zA-Z]+$/.test(lastName));
      setIsInvalidInstagramUrl(!instagramUrl);
      setIsInvalidPhoneNumber(!phoneNumber);
      setIsInvalidAddress(!address);
      setIsInvalidCity(!city);
      setIsInvalidCountry(!country);
      setIsInvalidStateProvince(!stateProvince);
      setIsInvalidPostalCode(!postalCode);
      setIsInvalidDateOfBirth(!dateOfBirth);
      setIsInvalidNationality(!nationality);
      setIsInvalidYourStory(yourStory.length < 8);
      setIsLoading(false);
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true); // Add this line
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        instagramUrl,
        phoneNumber,
        address,
        city,
        country,
        stateProvince,
        postalCode,
        dateOfBirth,
        nationality,
        yourStory,
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

  return (
    <React.Fragment>
      {/* <div className="flex flex-row items-start justify-center md:hidden w-full px-4">
      <Divider orientation="horizontal" />
      </div> */}

      <Card
        classNames={{ base: "max-w-7xl mx-auto" }}
        isBlurred
        shadow="none"
        radius="none"
      >
        {!isSubmitted ? (
          <form className=" flex flex-col gap-4 " onSubmit={handleSubmit}>
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
              Your feedback is valuable. Feel free to drop me a message when you
              can. I appreciate your time and thoughts!
            </p>

            <div className="flex flex-row gap-2">
              <Input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                description="Your first name"
                isInvalid={isInvalidFirstName}
                errorMessage={
                  isInvalidFirstName
                    ? firstName.trim() === ""
                      ? "Please enter your first name"
                      : "Please enter a valid character"
                    : ""
                }
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
            </div>
            <div className="flex flex-row gap-2">
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
            </div>

            <div className="flex flex-row gap-2">
              <Input
                type="text"
                id="instagramUrl"
                name="instagramUrl"
                placeholder="Instagram Url"
                description="Your Instagram Url or username (e.g. @username)"
                isInvalid={isInvalidInstagramUrl}
                errorMessage={
                  isInvalidInstagramUrl ? "Please enter your Instagram Url" : ""
                }
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
                color={isInvalidEmail ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="flex flex-row gap-2">
              <Input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                description="This is where will send you a response"
                isInvalid={isInvalidPhoneNumber}
                errorMessage={
                  isInvalidPhoneNumber ? "Please enter your phone number" : ""
                }
                color={isInvalidPhoneNumber ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setIsInvalidPhoneNumber(!e.target.value);
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
            </div>

            <div className="flex flex-row gap-2">
              <Input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                description="The city you currently live in"
                isInvalid={isInvalidCity}
                errorMessage={isInvalidCity ? "Please enter your city" : ""}
                color={isInvalidCity ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setIsInvalidCity(!e.target.value);
                  checkFormValidity();
                }}
              />

              <Input
                type="text"
                id="stateProvince"
                name="stateProvince"
                placeholder="State/Province"
                description="The state/province you currently live in"
                isInvalid={isInvalidStateProvince}
                errorMessage={
                  isInvalidStateProvince
                    ? "Please enter your state/province"
                    : ""
                }
                color={isInvalidStateProvince ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={stateProvince}
                onChange={(e) => {
                  setStateProvince(e.target.value);
                  setIsInvalidStateProvince(!e.target.value);
                  checkFormValidity();
                }}
              />
            </div>

            <div className="flex flex-row gap-2">
              <Input
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                description="The country you currently live in"
                isInvalid={isInvalidCountry}
                errorMessage={
                  isInvalidCountry ? "Please enter your country" : ""
                }
                color={isInvalidCountry ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setIsInvalidCountry(!e.target.value);
                  checkFormValidity();
                }}
              />

              <Input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                description="The postal code of your current address"
                isInvalid={isInvalidPostalCode}
                errorMessage={
                  isInvalidPostalCode ? "Please enter your postal code" : ""
                }
                color={isInvalidPostalCode ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={postalCode}
                onChange={(e) => {
                  setPostalCode(e.target.value);
                  setIsInvalidPostalCode(!e.target.value);
                  checkFormValidity();
                }}
              />
            </div>

            <Textarea
              id="yourStory"
              name="yourStory"
              placeholder="Your Story"
              description="Tell me about yourself"
              isInvalid={isInvalidYourStory}
              errorMessage={
                isInvalidYourStory
                  ? "Your story should have at least 8 characters "
                  : ""
              }
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

            <Button
              color="warning"
              variant={isFormValid ? "solid" : "flat"} // Update this line
              type="submit"
              radius="none"
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

export { TalentApplicationFormFemale };
