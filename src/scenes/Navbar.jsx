import React from 'react'
import { useState,  } from 'react'
// Allows the user to navigate to other areas of the page smoothly
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from "../hooks/useMediaQuery";

export const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  // This will use the media query we created isAboveSmallScreens, and it will set the min width to be 768px.
  // Determines whether the current broswer size min width is less than 768 or above 768
  const isAboveSmallScreens = useMediaQuery("(min-width-768px)");

    return (
    // Z index set to 40 so it popus up above other items
    <nav className={`z-40 w-full fixed top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>

        </div>
    </nav>
  )
}
