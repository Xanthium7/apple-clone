import { footerLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 ">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More Ways To Shop:{" "}
            <span className="underline text-blue"> Find an Apple Store </span>
            or
            <span className="underline text-blue"> Other Retailer </span>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">Or Call- 000000000 </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All Rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link) => (
              <p key={link} className="ml-4 font-semibold text-gray text-xs">
                {link}
                {"   "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
