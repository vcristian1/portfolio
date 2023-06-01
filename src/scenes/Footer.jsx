import SocialMediaIcons from "../components/SocialMediaIcons";
import LineGradient from "../components/LineGradient";
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin  } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="h-64 bg-deep-blue pt-10">
      <div className="w-10/12 mx-auto">
        <LineGradient />
        <div className="flex mt-5 mb-5 justify-center md:justify-start md:gap-[25px] gap-[25px]">
          <a href="https://www.facebook.com/cristianvargas.vargas.777/" target="_blank" rel="noreferrer">
            <AiOutlineFacebook className="mt-10 hover:opacity-50 transition duration-500 h-12 w-12 md:h-12 md:w-12"/>
          </a> 
          <a href="https://www.instagram.com/vcristian1" target="_blank" rel="noreferrer">
            <AiOutlineInstagram className="mt-10 hover:opacity-50 transition duration-500 h-12 w-12 md:h-12 md:w-12"/>
          </a>
          <a href="https://www.linkedin.com/in/cristian-vargas-13686a1a3/" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin className="mt-10 hover:opacity-50 transition duration-500 h-12 w-12 md:h-12 md:w-12"/>
          </a>
          <a href="https://www.github.com/vcristian1" target="_blank" rel="noreferrer">
            <AiOutlineGithub className="mt-10 hover:opacity-50 transition duration-500 h-12 w-12 md:h-12 md:w-12"/>
          </a>
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