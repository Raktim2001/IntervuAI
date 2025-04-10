import { getTechLogos } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TechIcons = async ({ techStack }: TechIconProps) => {
  const icons = await getTechLogos(techStack);
  return (
    <div className=" flex flex-row gap-2">
      {icons.slice(0, 3).map(({ tech, url }, ind) => (
        <div
          key={tech}
          className=" relative group bg-dark-300 rounded-full p-2 flex-center "
        >
          <span className="tech-tooltip">{tech}</span>
          <Image
            src={url}
            alt="url"
            height={100}
            width={100}
            className=" size-5"
          />
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
