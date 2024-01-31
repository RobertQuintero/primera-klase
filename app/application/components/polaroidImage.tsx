// PolaroidImageUpload.tsx
"use client";
import React, { ReactElement } from "react";
import { UploadButton } from "@/config/uploadthings";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Spinner, Image } from "@nextui-org/react";
import { paragraph, title } from "@/components/primitives";

interface PolaroidImageUploadProps {
  onClientUploadComplete: (res: any) => void; // Replace 'any' with the actual type of the response
  onUploadError: (error: Error) => void;
  imageUrl: string;
  setUploadError: React.Dispatch<React.SetStateAction<string | null>>;
  uploadError: string | null;
  label: string;
}

const PolaroidImageUpload: React.FC<PolaroidImageUploadProps> = ({
  onClientUploadComplete,
  onUploadError,
  imageUrl,
  setUploadError,
  uploadError,
  label,
}: PolaroidImageUploadProps): ReactElement => {
  return (
    <div className="relative flex items-center justify-center w-full h-[100vh] max-h-44 sm:max-h-60 md:max-h-72 overflow-hidden border-2 border-default-300 hover:border-warning transition-colors group">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          onClientUploadComplete(res);
          setUploadError(null);
        }}
        onUploadError={(error) => {
          onUploadError(error);
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
              <React.Fragment>
                {uploadError ? (
                  <div className="text-default-500 absolute bottom-0 w-full left-0 drop-shadow-xl">
                    <p
                      className={`!text-danger !font-normal ${paragraph(
                        {
                          size: "xs",
                        }
                      )}`}
                    >
                      Selected image exceeds | | 1MB limit. Choose a smaller| |
                      image and try again.
                    </p>
                  </div>
                ) : (
                  <div className="text-default-500 absolute bottom-0 -ml-10">
                    <p
                      className={`group-hover:text-warning transition-colors !font-normal text-default-400 ${title(
                        { size: "sm" }
                      )}`}
                    >
                      {label}
                    </p>
                  </div>
                )}
              </React.Fragment>
            );
          },
        }}
      />
      {imageUrl && (
        <div className="absolute w-full h-full top-0 flex items-center justify-center z-10">
          <Image
            src={imageUrl}
            alt="front"
            width={300}
            height={300}
            radius="none"
            className="object-contain w-full h-full aspect-square"
          />
        </div>
      )}
    </div>
  );
};

export default PolaroidImageUpload;
