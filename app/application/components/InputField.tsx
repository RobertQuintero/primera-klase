// InputField.tsx

import { Input } from "@nextui-org/input";
import React, { ChangeEvent } from "react";

interface InputFieldProps {
  type: string;
  id: string;
  name: string;
  label: string;
  isInvalid?: boolean;
  errorMessage?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  name,
  label,
  isInvalid = false,
  errorMessage = "",
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <Input
      type={type}
      id={id}
      name={name}
      label={label}
      isRequired
      variant="bordered"
      radius="none"
      size="lg"
      value={value}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      classNames={{
        inputWrapper: value.trim() !== "" ? "border-success " : "danger",
        errorMessage: isInvalid ? "text-danger" : "text-success",
        label: value.trim() !== "" ? "text-success" : "text-default-500",
      }}
      color={isInvalid ? "danger" : "warning"}
      onChange={onChange}
    />
  );
};

export default InputField;
