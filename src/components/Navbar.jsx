import React, { useState } from 'react'

const Navbar = () => {
  const [fontOption, setFontOption] = useState("Sans Serif");

  const toggleDarkMode = ()=>{
    console.log(localStorage.getItem('color-theme'), 'isaac is')
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }

  // if NOT set via local storage previously
  } else {
      if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      }
  }
  }
  return (
    <nav className="flex min-w-full justify-between h-9">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38"><g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/><path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8"/><path d="M11 9h12"/></g></svg>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col pr-navbar">
          <button className="flex items-center">
            <span className="text-body_medium font-bold pr-font_button">{fontOption}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6"/></svg>
          </button>
        </div>
        <span className="text-divider_color text-divider pr-navbar ">|</span>
        <div className='flex peer items-center justify-center '>
        <label className="relative peer inline-flex items-center cursor-pointer mr-5" >
          <input type="checkbox" value="" className="sr-only peer group" />
          <div onClick={toggleDarkMode} className="w-9 h-5 bg-gray_mentor peer-focus:outline-none rounded-full peer group hover:bg-purple_mentor dark:bg-purple_mentor dark:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 "></div>
        </label>
        <svg className=' stroke-primary   peer-hover:stroke-purple_mentor' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar