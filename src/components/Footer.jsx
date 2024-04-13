import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}.Dcrypt All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          <a
            href="https://merchant.razorpay.com/policy/Ns8migdY3rkPeI/terms"
            style={{
              margin: "0 auto",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Terms & Conditions
          </a>
          <a
            href="https://merchant.razorpay.com/policy/Ns8migdY3rkPeI/privacy"
            style={{
              margin: "0 auto",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Privacy Policy
          </a>
          <a
            href="https://merchant.razorpay.com/policy/Ns8migdY3rkPeI/refund"
            style={{
              margin: "0 auto",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Cancellation & Refund Policy
          </a>
          <a
            href="https://merchant.razorpay.com/policy/Ns8migdY3rkPeI/contact_us"
            className="text-color-5"
            style={{
              margin: "0 auto",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Contact
          </a>
          {/* <a
            href="https://merchant.razorpay.com/policy/Ns8migdY3rkPeI/shipping"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Shipping & Delivery Policy
          </a> */}
        </ul>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-6 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
