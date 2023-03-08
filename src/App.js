import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { Navbar } from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  // This will use the media query we created isAboveMediumScreens, and it will set the min width to be 1060px.
  // Determines whether the current broswer size if the min width is less than 1060 or above 1060
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
