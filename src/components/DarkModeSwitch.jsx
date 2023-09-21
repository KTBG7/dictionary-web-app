import React from 'react'

const DarkModeSwitch = () => {
    const toggleDarkMode = ()=>{
        if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
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
    <div className='flex peer items-center justify-center '>
        <label className="relative peer inline-flex items-center cursor-pointer mr-3 md:mr-5" >
          <input type="checkbox" value="" className="sr-only peer group" />
          <div onClick={toggleDarkMode} className="w-9 h-5 bg-gray_mentor peer-focus:outline-none rounded-full peer group hover:bg-purple_mentor dark:bg-purple_mentor dark:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 "></div>
        </label>
        <svg className='stroke-primary dark:stroke-purple_mentor   peer-hover:stroke-purple_mentor' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
    </div>
  )
}

export default DarkModeSwitch