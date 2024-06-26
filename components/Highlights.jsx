"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import VideoCrousel from "./VideoCrousel";

export const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="hightlight"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="scren-max-width">
        <div className="mb-12 w-full md:flex  items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the Film
              <img
                src="/assets/images/watch.svg"
                alt="watch"
                className="ml-2"
              />
            </p>
            <p className="link">
              Watch the Event
              <img
                src="/assets/images/right.svg"
                alt="watch"
                className="ml-2"
              />
            </p>
          </div>
        </div>

        <VideoCrousel />
      </div>
    </section>
  );
};
