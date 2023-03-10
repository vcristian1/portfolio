import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a className="hover:opacity-50 transition duration-500" href="https://www.facebook.com/cristianvargas.vargas.777?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
            <img src="../assets/facebook-logo.png" alt="facebook-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.instagram.com/vcristian1" target="_blank" rel="noreferrer">
            <img src="../assets/instagram-logo.png" alt="instagram-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/in/cristian-vargas-13686a1a3/" target="_blank" rel="noreferrer">
            <img src="../assets/linked-in-logo.png" alt="linkedin-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="https://www.github.com/vcristian1" target="_blank" rel="noreferrer">
            <img src="../assets/github-logo.png" alt="github-link" />
        </a>
       
    </div>
  )
}

export default SocialMediaIcons;
