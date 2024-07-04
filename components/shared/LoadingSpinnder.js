import React from "react";

const LoadingSpinner = ({
  className,
  widthHeight = "w-24 h-24",
  loading = false,
  color = "blue-500",
}) => {
  if (!loading) return null;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${widthHeight} border-t-4 border-b-4 border-${color} rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
