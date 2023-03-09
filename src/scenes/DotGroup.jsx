import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ page, selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
  before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    // Gives Dotgroup its particular position
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
        <AnchorLink
          className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href="#home"
          onClick={() => setSelectedPage('home')}
        />
        <AnchorLink
          className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href="#skills"
          onClick={() => setSelectedPage('home')}
        />
        <AnchorLink
          className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href="#projects"
          onClick={() => setSelectedPage('home')}
        />
        <AnchorLink
          className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href="#testimonials"
          onClick={() => setSelectedPage('home')}
        />
        <AnchorLink
          className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href="#contact"
          onClick={() => setSelectedPage('home')}
        />
    </div>
  )
}

export default DotGroup;