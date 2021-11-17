import React from "react";
import DesktopIcon from "../Desktop/desktopicon";
import myComputer from "../../public/Icons/computer.png";
import Notepad from "../../public/Icons/Notepad.ico";
import smileyFace from "../../public/Icons/Smileyface.ico";


function DesktopIcons({ handleClick }) {
  return (
    <div className="grid-container">
      {content.map((icon) => (
        <DesktopIcon
          handleClick={() => handleClick(icon.windowName, true)}
          src={icon.src}
          alt={icon.alt}
          text={icon.text}
        />
      ))}
    </div>
  );
}
let content = [
  {
    src: myComputer,
    alt: "MyComputer Icon",
    text: "My Computer",
    windowName: "myComputer",
  },
  {
    src: Notepad,
    alt: "About Me",
    text: "About Me",
    windowName: "aboutMe",
  },
  {
    src: smileyFace,
    alt: "Snake Game",
    text: "Snake Game",
    windowName: "snakeGame",
  },
];
export default DesktopIcons;
