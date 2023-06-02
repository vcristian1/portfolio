import React from 'react';
import { SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb'


const FrameworkIcons = () => {
  return (
    <div className='flex md:justify-start my-16 gap-7 overflow'>
        <a className="hover:opacity-50 transition duration-500" href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <TbBrandNextjs className='h-10 w-10 md:h-10 md:w-10'/>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <SiNodedotjs className='h-10 w-10 md:h-10 md:w-10' />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.javascript.com/" target="_blank" rel="noreferrer">
            <SiExpress className='h-10 w-10 md:h-10 md:w-10'/>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
            <SiMongodb className='h-10 w-10 md:h-10 md:w-10'/>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
            <SiTailwindcss className='h-10 w-10 md:h-10 md:w-10'/>
        </a>
    </div>
  )
}

export default FrameworkIcons