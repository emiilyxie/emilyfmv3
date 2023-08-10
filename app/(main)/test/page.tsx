'use client'
import React from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function AnimateOnLoad() {
  const root = useRef(null);
  const text = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".text", { rotation: "+=360" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <button className="text" ref={text}>test</button>
    </div>
  )
}

export default function AnimateOnClick() {
  const rotateText = ({ currentTarget } : React.MouseEvent<HTMLElement> ) => {
    gsap.to(currentTarget, { rotate: "+=360" });
  };

  return (
    <div>
      <button className="text" onClick={rotateText}>test</button>
    </div>
  )
}