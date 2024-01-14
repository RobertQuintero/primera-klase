"use client";
import { paragraph, title } from "@/components/primitives";
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

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidSubject, setIsInvalidSubject] = useState(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    if (validateEmail(email) && name && subject && message.length >= 8) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsLoading(true);

    // Validation checks before submitting
    if (!validateEmail(email) || !name || !subject || message.length < 8) {
      // Set validation states to display error messages
      setIsInvalidEmail(!validateEmail(email));
      setIsInvalidName(!name);
      setIsInvalidSubject(!subject);
      setIsInvalidMessage(message.length < 8);
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
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!response.ok) {
        const text = await response.text();
        console.error('Server response:', text);
        throw new Error('Server response was not ok.');
      }
      else {
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

      <div className="flex flex-row items-start justify-center md:hidden w-full px-4">
      <Divider orientation="horizontal" />
      </div>

      <Card classNames={{ base: "w-full md:max-w-md "}} isBlurred shadow="none" radius="none">

          {!isSubmitted ? (
            <form className=" flex flex-col gap-4 " onSubmit={handleSubmit}>
          <p
            className={`text-default-700  text-center ${title({
              size: "lg",
            })}`}
          >
            Send me a message
          </p>
              <p
                className={`!text-default-500 mb-4 ${paragraph({
                  size: "sm",
                })}`}
              >
                Your feedback is valuable. Feel free to drop me a message when
                you can. I appreciate your time and thoughts!
              </p>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                description="What should I call you?"
                isInvalid={isInvalidName}
                errorMessage={isInvalidName ? "Please enter your name" : ""}
                color={isInvalidName ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setIsInvalidName(!e.target.value);
                  checkFormValidity();
                }}
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                description="I'll never share your email."
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
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                description="What is this about?"
                isInvalid={isInvalidSubject}
                errorMessage={isInvalidSubject ? "Please enter a subject" : ""}
                color={isInvalidSubject ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  setIsInvalidSubject(!e.target.value);
                  checkFormValidity();
                }}
              />
              <Textarea
                id="message"
                name="message"
                placeholder="Message"
                description="What's on your mind?"
                isInvalid={isInvalidMessage}
                errorMessage={
                  isInvalidMessage
                    ? "Message should have at least 8 characters"
                    : ""
                }
                color={isInvalidMessage ? "danger" : "warning"}
                variant="bordered"
                radius="none"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setIsInvalidMessage(e.target.value.length < 8);
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

export { ContactForm };