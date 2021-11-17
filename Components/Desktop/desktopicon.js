import React from "react";
// import "../index.css";
import Image from "next/image";

function DesktopIcon({ src, alt, text, handleClick }) {
  return (
    <div className="icons" onClick={handleClick}>
      <Image src={src} alt={alt} width={52} height={52} className="computericon" />
      <span>{text}</span>
    </div>
  );
}

export default DesktopIcon;
