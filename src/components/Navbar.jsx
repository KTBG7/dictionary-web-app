import React, { useState } from 'react'
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = () => {
  const [fontOption, setFontOption] = useState("Sans Serif");
  const [showDropdown, setShowDropdown] = useState(false);

  const fonts = [
    {name: 'Sans Serif', fontClass: 'font-inter'}, 
    {name: 'Serif', fontClass: 'font-lora'}, 
    {name: 'Mono', fontClass: 'font-inconsolata'},
  ];

  const toggleDropdown = ()=>{
    setShowDropdown(prev => !!!prev);
  }

  const handleFontSelection = (font, fontClass)=>{
    setFontOption(font);
    let selected = fontClass;
    let classes = document.documentElement.classList;
    for(const currClass of classes.values()){
      if(currClass.toString() === 'font-inter'){
        document.documentElement.classList.remove(currClass);
      }
      if(currClass === 'font-lora'){
        document.documentElement.classList.remove(currClass);
      }
      if(currClass === 'font-inconsolata'){
        document.documentElement.classList.remove(currClass);
      }
    }
    document.documentElement.classList.add(selected);
    setShowDropdown(prev=>!!!prev)

  }

  return (
    <nav className="flex min-w-full justify-between text-body_small md:text-body_medium font-bold text-primary dark:text-light h-10 pb-14">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38"><g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/><path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8"/><path d="M11 9h12"/></g></svg>
      </div>
      <div className="flex items-center">
        <div className="relative md:w-48 flex flex-col pr-4 md:pr-navbar">
          <button className="flex items-center justify-end" onClick={toggleDropdown}>
            <span className="pr-4 md:pr-font_button">{fontOption}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6"/></svg>
          </button>
          {showDropdown ? 
          <ul className='absolute flex flex-col w-48 justify-center top-8 right-6 py-3 rounded-xl last:pb-0 h-40 drop-shadow-dropdown dark:drop-shadow-dark bg-light dark:bg-dark dark:shadow-purple_mentor'>
            {fonts.map((font, idx)=>{
              return <li key={idx} className={'pb-4 pl-6 hover:text-secondary hover:cursor-pointer '+ font.fontClass} onClick={()=>handleFontSelection(font.name, font.fontClass)}>{font.name}</li>
            })}
          </ul> 
          : null}
        </div>
        <span className="text-divider_color text-divider pr-4 md:pr-navbar font-extralight">|</span>
        <DarkModeSwitch />
      </div>
    </nav>
  )
}

export default Navbar