import Image from "next/image";
import Link from "next/link";
import React from "react";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/918422016687"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/Images/whatsapp.png"
          width={50}
          height={50}
          alt="Whatsapp Icon"
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Whatsapp;
