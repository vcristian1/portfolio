import React from 'react'

const TechnologyIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a className="hover:opacity-50 transition duration-500" href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="../assets/react.png" alt="react-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img src="../assets/typescript.png" alt="typescript-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.javascript.com/" target="_blank" rel="noreferrer">
            <img src="../assets/javascript.png" alt="javascript-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <img src="../assets/node.png" alt="node-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <img src="../assets/express.png" alt="node-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img src="../assets/tailwind.png" alt="tailwind-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img src="../assets/mongodb.png" alt="mongo-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img src="../assets/sql.png" alt="sql-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.prisma.io/" target="_blank" rel="noreferrer">
            <img src="../assets/prisma.png" alt="prisma-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://wordpress.com/" target="_blank" rel="noreferrer">
            <img src="../assets/wordpress.png" alt="wordpress-link" />
        </a>
    </div>
  )
}

export default TechnologyIcons;
