import * as React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => {
  return (
    <input
      className="flex h-10 w-full rounded-lg border border-gray-100 bg-gray-100 px-3 pt-1 pb-1.5 text-sm placeholder:text-gray-400 focus-visible:outline-blue-300 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50"
      ref={ref}
      {...props}
    />
  );
});
