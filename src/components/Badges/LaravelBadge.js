import React from "react";
import { SiLaravel } from "react-icons/si";

const LaravelBadge = () => {
  return (
    <span className="flex items-center gap-1 bg-red-900 text-red-300 px-2 py-1 rounded-full text-xs font-semibold">
      <SiLaravel size={14} />
    </span>
  );
};

export default LaravelBadge;
