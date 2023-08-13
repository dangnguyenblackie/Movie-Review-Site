import morty from "../../assets/morty.png";
import eye from "../../assets/eye.png";
import { useEffect, useRef, useState } from "react";
import "./Morty.css";
import angle from "./Utils";

const Morty = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0, deg: 0 });
  const anchorRef = useRef<HTMLImageElement>(null);

  var rekt;
  var anchorX: number;
  var anchorY: number;

  useEffect(() => {
    if (anchorRef.current) {
      rekt = anchorRef.current.getBoundingClientRect();
      anchorX = rekt.left + rekt.width / 2;
      anchorY = rekt.top + rekt.height / 2;
    }

    const handleWindowMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
        deg: 0 + angle(event.clientX, event.clientY, anchorX, anchorY),
      });
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <>
      <div id="rick-and-morty-container">
        <img ref={anchorRef} id="rick-and-morty-anchor" src={morty} />
        <div id="rick-and-morty-eyes">
          <img
            className="rick-and-morty-eye"
            src={eye}
            style={{
              top: "58px",
              right: "68px",
              transform: `rotate(${coords.deg}deg)`,
            }}
          />
          <img
            className="rick-and-morty-eye"
            src={eye}
            style={{
              top: "47px",
              right: "30px",
              transform: `rotate(${coords.deg}deg)`,
            }}
          />
          <img
            className="rick-and-morty-eye"
            src={eye}
            style={{
              top: "-88px",
              right: "-291px",
              scale: "115%",
              transform: `rotate(${coords.deg}deg)`,
            }}
          />
          <img
            className="rick-and-morty-eye"
            src={eye}
            style={{
              top: "-90px",
              right: "-356px",
              scale: "106%",
              transform: `rotate(${coords.deg}deg)`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Morty;
