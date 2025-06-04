import React from "react";

export default function ProgressIndicator({ userType, step = 1 }: { userType: "general" | "pharmacist", step?: number }) {
  return (
    <div className="flex justify-center">
      {userType === "general" ? (
        <div className="flex items-center space-x-2">
          <div className={`h-2 w-8 rounded-full  ${step === 1 ? 'bg-primary': 'bg-gray-300'}`} />
          <div className={`h-2 w-8 rounded-full  ${step === 2 ? 'bg-primary': 'bg-gray-300'}`} />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className={`h-2 w-8 rounded-full  ${step === 1 ? 'bg-primary': 'bg-gray-300'}`} />
          <div className={`h-2 w-8 rounded-full  ${step === 2 ? 'bg-primary': 'bg-gray-300'}`} />
        </div>
      )}
    </div>
  );
}