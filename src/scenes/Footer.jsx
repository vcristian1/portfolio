import SocialMediaIcons from "../components/SocialMediaIcons";
import LineGradient from "../components/LineGradient";

const Footer = () => {
  return (
    <footer className="h-64 bg-deep-blue pt-10">
      <div className="w-10/12 mx-auto">
        <LineGradient />
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            CRISTIAN VARGAS
          </p>
          <p className="font-playfair text-md text-white">
            ©2022 VARGAS All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;