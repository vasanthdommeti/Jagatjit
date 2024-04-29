import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import './index.css'

export const App = () => {
  return (
    <div style={{ backgroundColor: "#333333", color: "#ffffff" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
        <div style={{ height: "150vh"}} />
        <UseScrollBasic />
        <div style={{ height: "150vh" }} />
      </div>
      <div
        style={{
          // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          backgroundImage: 'none',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
};

export default App;

  const UseScrollBasic = () => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const width = useTransform(
    scrollYProgress,
    [0,1],
    ['400px', '205px']
  );

  const height = useTransform(
    scrollYProgress,
    [0,1],
    ['1000px', '600px']
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    ["30deg", "0deg"]
  );

  const paddingLeft = useTransform(
    scrollYProgress,
    [0,1],
    ['100px', '850px']
  );

  const paddingBottom = useTransform(
    scrollYProgress,
    [0,1],
    ['100px', '600px']
  );

  const textSize = useTransform(scrollYProgress, [0, 1], ["210px", "140px"]);
  const textLeft = useTransform(scrollYProgress, [0, 1], ["10%", "10%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const textHeadOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const textFillColor = useTransform(scrollYProgress, [0, 1], ['#333333', '#ffffff']);
  const textBottom = useTransform(scrollYProgress, [0, 1], ['2%', '4%']);
  const textHeadTopMargin = useTransform(scrollYProgress, [0, 1], ['30%', '31%']);
  const textParaMargin = useTransform(scrollYProgress, [0, 1], ['55%', '45%']);
  const textYearMargin = useTransform(scrollYProgress, [0, 1], ['78%', '60%']);

  return (
    <>
      <motion.img
        src="intital.png"
        style={{
          rotate,
          position: "fixed",
          left: "20%",
          top: "15%",
          zIndex: 2,
          width,
          height,
          paddingLeft,
          paddingBottom,
          transition: "1.5s",
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          top: textHeadTopMargin,
          left: textLeft,
          fontSize: textSize,
          WebkitTextStrokeColor: 'white',
          WebkitTextStrokeWidth: 2,
          WebkitTextFillColor: textFillColor,
          opacity: textHeadOpacity,
          transition: "1.5s",
          marginBottom : textBottom
        }}>
        Making
      </motion.div>
      <motion.div
        style={{
          position: "fixed",
          top:textParaMargin,
          WebkitTextStrokeColor: 'white',
          WebkitTextStrokeWidth: 2,
          WebkitTextFillColor: textFillColor,
          opacity: textHeadOpacity,
          left: textLeft,
          fontSize: textSize,
          transition: "1.5s",
          marginBottom : textBottom
        }}
      >
        Premium liquor
      </motion.div>
      <motion.div
        style={{
          position: "fixed",
          top:textYearMargin,
          WebkitTextStrokeColor: 'white',
          WebkitTextStrokeWidth: 2,
          WebkitTextFillColor: textFillColor,
          opacity:textOpacity,
          left: textLeft,
          fontSize: textSize,
          transition: "1.5s",
          marginBottom : textBottom
        }}
      >
        1944
      </motion.div>
    </>
  );
};