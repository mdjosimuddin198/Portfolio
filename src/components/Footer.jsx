import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <a
              className="ml-2 text-[#34D399]"
              href="https://github.com/mdjosimuddin198"
            >
              Md Josim Uddin
            </a>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
