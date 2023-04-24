import React from 'react'

const FrameworkIcons = () => {
  return (
    <div className='flex md:justify-start my-10 gap-7 overflow'>
        <a className="hover:opacity-50 transition duration-500" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img src="../assets/react.png" alt="react-link" />
            <p className='font-opensans mt-2'>React.js</p>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img src="../assets/node.png" alt="node-link" />
            <p className='font-opensans mt-2'>Node.js</p>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.javascript.com/" target="_blank" rel="noreferrer">
            <img src="../assets/express.png" alt="express-link" />
            <p className='font-opensans mt-2'>Express.js</p>
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
            <img src="../assets/mongodb.png" alt="mongo-link" />
            <p className='font-opensans mt-3'>MongoDB</p>
        </a>
    </div>
  )
}

export default FrameworkIcons