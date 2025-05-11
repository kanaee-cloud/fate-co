import React from "react";
import { FaReact } from "react-icons/fa";

const ReactBadge = () => {
  return (
    <span className="flex items-center gap-1 bg-blue-900 text-cyan-400 px-2 py-1 rounded-full text-xs font-semibold">
      <FaReact size={14} />
    </span>
  );
};

export default ReactBadge;
