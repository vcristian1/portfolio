import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  // This will use the media query we created isAboveMediumScreens, and it will set the min width to be 1060px.
  // Determines whether the current browser size min width is less than 1060 or above 1060
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Checking the window and if the scrollY is = 0 setIsTopOfPage is set to false
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    // Add the event listener to the window
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
    // Pass in empty array so the useEffect runs when the component is loaded.
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
           selectedPage={selectedPage}
           setSelectedPage={setSelectedPage}
          />
        )}
        <Landing  
         setSelectedPage={setSelectedPage} 
        />
      </div>
      <LineGradient />
    </div>

  );
}

export default App;
