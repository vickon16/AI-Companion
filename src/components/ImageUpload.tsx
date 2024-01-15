"use client";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

const ImageUpload = ({ value, onChange, disabled }: ImageUploadProps) => {
  return (
    <div className="gap-y-4 flex flex-col w-fit">
      <CldUploadButton
        onUpload={(result : any) => onChange(result.info.secure_url)}
        options={{
          maxFiles: 1,
        }}
        uploadPreset="xx3ycoef"
      >
        <div className="p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col gap-y-2 w-fit">
          <div className="relative h-40 w-40">
            <Image
              fill
              alt="upload"
              src={value || "/placeholder.svg"}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};

export default ImageUpload;
