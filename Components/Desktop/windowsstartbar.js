import React from "react";
import {
  AppBar,
  Toolbar,
  // TextField,
  Button,
  List,
  ListItem,
  Divider,
} from "react95";
import Image from "next/image";
import Logo from "../../public/Icons/logo.png";
import computerCard from "../../public/Icons/ComputerCard.ico";
import blueDisc from "../../public/Icons/Diskette.ico";
import bookDisc from "../../public/Icons/BookDisc.ico";

const WindowsStartBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar style={{ position: "static" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <Image
              src= {Logo}
              alt="react95 logo"
              width={20}
              height={20}
              marginRight={4}
            />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: "absolute",
                left: "0",
                top: "100%",
                width: "180px",
                padding: "5px",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <a
                  href="https://github.com/wolffalexandria"
                  alt="link to github"
                  target="_blank"
                >
                  <Image
                    src={computerCard}
                    alt="green computer card"
                    
                  />
                  <span style={{padding: "10px"}}>GitHub</span>
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://codesandbox.io/u/alexandriawolff"
                  alt="CodeSandbox"
                  target="_blank"
                >
                  <Image
                    src={blueDisc}
                    alt="blue computer floppy disk"
                    className="list-item"
                  />
                  <span style={{padding: "10px"}}>CodeSandbox</span>
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.canva.com/design/DAEFDzK-WrA/N92nyulYJOy9Ao2c3Gj4kg/view?utm_content=DAEFDzK-WrA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  alt="Alex Wolff's Resume"
                  target="_blank"
                >
                  <Image
                    src={bookDisc}
                    alt="open book with cd disc behind it"
                  
                  />
                  <span style={{padding: "10px"}}>Resume</span>
                </a>
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>
        {/* <TextField placeholder="Search..." width={150} /> */}
      </Toolbar>
    </AppBar>
  );
};

export default WindowsStartBar;
