import { TriangleAlert } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-96">
      <div className="flex items-center space-x-3">
        <TriangleAlert className="w-5 h-5 text-primaryGray" />
        <span className="text-base font-medium text-gray-800 ">Not found</span>
      </div>
    </div>
  );
};
