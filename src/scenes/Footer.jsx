import SocialMediaIcons from "../components/SocialMediaIcons";
import LineGradient from "../components/LineGradient";
import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineInstagram, AiOutlineLinkedin  } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="h-64 bg-deep-blue pt-10">
      <div className="w-10/12 mx-auto">
        <LineGradient />
        <div className="flex mt-5 mb-5 justify-center md:justify-start md:gap-[25px] gap-[25px]">
          <AiOutlineFacebook className="mt-10 hover:opacity-50 transition duration-500 h-10 w-10 md:h-12 md:w-12"/>
          <AiOutlineGoogle className="mt-10 hover:opacity-50 transition duration-500 h-10 w-10 md:h-12 md:w-12"/>
          <AiOutlineInstagram className="mt-10 hover:opacity-50 transition duration-500 h-10 w-10 md:h-12 md:w-12"/>
          <AiOutlineLinkedin className="mt-10 hover:opacity-50 transition duration-500 h-10 w-10 md:h-12 md:w-12"/> 
        </div>     
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Cristian <span className="text-yellow">Vargas</span>
          </p>
          <p className="font-playfair text-md text-white">
            ©2022 <span className="text-yellow">Vargas</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;