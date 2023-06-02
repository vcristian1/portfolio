import React from 'react'
import { SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';


const TechnologyIcons = () => {
  return (
    <div className='flex md:justify-start my-16 gap-7 overflow'>
        <a className="hover:opacity-50 transition duration-500" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <SiTypescript className='h-10 w-10 md:h-10 md:w-10'/>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.javascript.com/" target="_blank" rel="noreferrer">
            <SiJavascript className='h-10 w-10 md:h-10 md:w-10' />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
            <SiHtml5 className='h-10 w-10 md:h-10 md:w-10'/>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
            <SiCss3 className='h-10 w-10 md:h-10 md:w-10'/>
        </a>
    </div>
  )
}

export default TechnologyIcons;
