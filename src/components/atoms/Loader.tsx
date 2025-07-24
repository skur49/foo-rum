import { LoaderCircle } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center space-x-3">
        <LoaderCircle className="w-5 h-5 animate-spin text-primaryGray" />
        <span className="text-base font-medium text-gray-800">Loading...</span>
      </div>
    </div>
  );
};
