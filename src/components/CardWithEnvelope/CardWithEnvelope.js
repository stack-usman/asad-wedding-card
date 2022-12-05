/* global window */
import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { ButtonStyle } from "../../style/Common.style";
import { CardFrontStyle, CardWrapperStyle } from "./CardWithEnvelope.style";
import { PointerAnimation } from "../PointerAnimation";

const letterStyle = {
  width: "calc(100% - 1rem)",
  height: "auto",
  top: "-4.5rem",
  left: "0.5rem",
  overflow: "hidden",
  boxSizing: "border-box",
  position: "absolute",
};

function Letter(props) { 
    const { currentYPosition, image } = props;

  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -400, -210]);

  return (
    <motion.div
      style={{
        ...letterStyle,
        scale: scaleAnim,
        y: yPosAnim,
      }}
    >
      <CardWrapperStyle currentYPosition={currentYPosition}>
        <img src={image} alt="card"/>
      </CardWrapperStyle>
    </motion.div>
  );
}

const envelopeStyle = {
  maxWidth: "28rem",
  width: "95%",
  height: "15rem",
  scale: 1,
  position: "fixed",
  top: "15rem",
  //   left: "calc(50%)"
  // boxShadow: `rgba(0, 0, 0, 0.5) 0px 0px 150px 10px`,
};

const frontfaceStyle = {
  width: "100%",
  height: "100%",
    backgroundColor: "transparent",
  position: "absolute",
  left: 0,
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Envelope({ children, buttonText, setCurrentYPosition }) {
  const [ffLayer, setFfLayer] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200]);
  const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0]);

  setCurrentYPosition(yPosAnim.current)
  scrollYProgress.onChange((x) => {
    setFfLayer(x > 0.4 ? -1 : 0);
  });

  return (
    <motion.div
      style={{
        ...envelopeStyle,
        scale: scaleAnim,
        y: yPosAnim,
        rotateZ: zRotAnim,
      }}
    >
      <CardFrontStyle
        style={{
          ...frontfaceStyle,
          zIndex: ffLayer,
          top: "-188px",
          backgroundImage: "url(/images/envelop-top.png)",
        }}
        className="card-back"
      >
        {/* <button onClick={() => window.scrollTo(0, 1500)}>{buttonText}</button> */}
      </CardFrontStyle>
      {children}
      <CardFrontStyle
        style={{
          ...frontfaceStyle,
          zIndex: ffLayer,
        }}
        className="card-front"
      >
        <ButtonStyle onClick={() => window.scrollTo(0, 1500)}><img src="/images/open-button.png" /></ButtonStyle>
      </CardFrontStyle>
    </motion.div>
  );
}

const letterSceneStyle = {
  height: "200vh",
};

export default function CardWithEnvelope(props) {
  const { buttonText, image } = props;

  const [currentYPosition, setCurrentYPosition] = useState(0);
  const [numberOfPageLoads, setNumberOfPageLoads] = useState(0);

  useEffect(()=>{
    setNumberOfPageLoads(localStorage.getItem("page_load_count"));
    
    if(numberOfPageLoads <= 2) {
      localStorage.setItem("page_load_count", numberOfPageLoads+1);
    }
  },[numberOfPageLoads])
  
  return (
    <>
    <PointerAnimation />
    <div style={letterSceneStyle}>
      <Envelope
        buttonText={buttonText}
        setCurrentYPosition={setCurrentYPosition}
      >
        <Letter currentYPosition={currentYPosition} image={image} />
      </Envelope>
    </div>
    </>
  );
}
