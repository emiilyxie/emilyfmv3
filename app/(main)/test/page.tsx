'use client'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Test() {
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