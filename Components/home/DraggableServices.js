import Image from "next/image";
import React from "react";

function DraggableServices({ title, path, id }) {
  return (
    <div className="m-4 mt-6 text-center select-none text-white">
      <div className="w-48 h-48 rounded-full overflow-hidden border-white border-4">
        <Image
          src={path}
          alt={title}
          width={500}
          height={500}
          className="object-cover select-none"
        />
      </div>

      <h4 className="text-sm sm:text-xl mt-3 text-whtie"> {title} </h4>
    </div>
  );
}

export default DraggableServices;
