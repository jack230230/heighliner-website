import React, { useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";

import { limitInRange } from "@site/src/utils/MathPlus";

import styles from "./index.module.scss";
import Rail from "./Rail";

const prePlace = 0;

export default function PicturesSlider(): React.ReactElement {
  const [isDown, setIsDown] = useState(false);
  const isDownRef = useRef(isDown);

  const [poleAxisLeft, setPoleAxisLeft] = useState<number>(0);
  const [poleAxisRight, setPoleAxisRight] = useState<number>(0);

  const [poleLeft, setPoleLeft] = useState<number>(0);
  const poleLeftRef = useRef(poleLeft);

  const [upperLayerWidth, setUpperLayerStyle] = useState<number>(prePlace);
  const upperLayerWidthRef = useRef(upperLayerWidth);

  const [startPosX, setStartPosX] = useState(0);
  const startPosXRef = useRef(startPosX);

  const imgEl = useRef(null);
  const upperLayerRef = useRef(null);

  function handlePoleImgLoad(event) {
    const offset = event.target.width / 2;
    setPoleAxisLeft(-offset + 2);
    setPoleAxisRight(offset + 5);
    setPoleLeft(-offset + 2);
    poleLeftRef.current = -offset + 2;
    console.log(offset);
  }

  function handleMouseDown(event) {
    if (event.type === "mousedown") {
      event.preventDefault();
    }

    isDownRef.current = true;
    setIsDown(true);

    // Get the starting position of cursor
    if (isMobile) {
      event.clientX = event.touches[0].clientX;
    }
    setStartPosX(event.clientX);
    startPosXRef.current = event.clientX;
  }

  function handleMouseUpOrLeave() {
    isDownRef.current = false;
    setIsDown(false);
  }

  function handleMouseMove(event) {
    const imgWidth = imgEl.current.width;
    if (
      isDownRef.current &&
      upperLayerWidthRef.current >= 0 &&
      upperLayerWidthRef.current <= imgWidth
    ) {
      // Calculate the movement of pole and upperLayer
      if (isMobile) {
        event.clientX = event.touches[0].clientX;
      }
      const deltaX = startPosXRef.current - event.clientX;
      const poleMovement = limitInRange(
        poleAxisLeft,
        imgWidth - poleAxisRight,
        poleLeftRef.current - deltaX
      );
      const upperLayerMovement = limitInRange(
        0,
        imgWidth,
        upperLayerWidthRef.current - deltaX
      );

      // Set the element's new position
      setPoleLeft(poleMovement);
      setUpperLayerStyle(upperLayerMovement);
      setStartPosX(event.clientX);

      // Update position
      startPosXRef.current = event.clientX;
      poleLeftRef.current = poleMovement;
      upperLayerWidthRef.current = upperLayerMovement;

      return false;
    }
  }

  return (
    <div
      className={styles.layerWrap}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
      onTouchEnd={handleMouseUpOrLeave}
      onTouchCancel={handleMouseUpOrLeave}
      onTouchMove={handleMouseMove}
    >
      <div className={styles.layerContain}>
        <div className={styles.underLayer}>
          <img
            src={
              require("@site/static/img/homepage/whyheighliner/chaos@3x.webp")
                .default
            }
            alt="with heighliner"
            className={styles.layerImg}
          />
        </div>
        <div
          className={styles.upperLayer}
          style={{ width: upperLayerWidth }}
          ref={upperLayerRef}
        >
          <img
            src={
              require("@site/static/img/homepage/whyheighliner/chip@3x.webp")
                .default
            }
            className={styles.layerImg}
            alt="with heighliner"
            ref={imgEl}
          />
        </div>
        <Rail classObject={styles.above}/>
        <Rail classObject={styles.below}/>
        <img
          src={
            require("/static/img/homepage/whyheighliner/pole@3x.webp").default
          }
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          style={{ left: poleLeft }}
          className={styles.pole}
          onLoad={handlePoleImgLoad}
        />
      </div>
    </div>
  );
}
