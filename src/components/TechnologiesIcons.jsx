import React from 'react'

const TechnologyIcons = () => {
  return (
    <div className='flex md:justify-start my-10 gap-7'>
        <a className="hover:opacity-50 transition duration-500" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img src="../assets/typescript.png" alt="typescript-link" />
            <p className='font-opensans mt-2'>Typescript</p>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.javascript.com/" target="_blank" rel="noreferrer">
            <img src="../assets/javascript.png" alt="javascript-link" />
            <p className='font-opensans mt-2'>Javascript</p>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
            <img src="../assets/html.png" alt="html-link" />
            <p className='font-opensans mt-2'>HTML5</p>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
            <img src="../assets/css.png" alt="css-link" />
            <p className='font-opensans mt-3'>CSS3</p>
        </a>
    </div>
  )
}

export default TechnologyIcons;
