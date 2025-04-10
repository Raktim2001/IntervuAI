import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link
          href={"/"}
          className="flex items-center gap-2
        "
        >
          <Image src="/logooo.png" alt="" width={38} height={32} />
          <h2>IntervuAI</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Rootlayout;
