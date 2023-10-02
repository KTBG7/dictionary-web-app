import React from 'react'

const PhoneticsSection = ({word}) => {
    let audioSource = "";
    let phoneticName = "";
    for(const phonetic of word.phonetics){
      if(phonetic.audio){
        audioSource = phonetic.audio;
        phoneticName = phonetic.text;
      }
    }
  const handleAudioClick = (source) =>{
    if(!source){
      return alert('No audio for this Phonetic')
    }
    const phoneticAudio = new Audio(source);
    phoneticAudio.play();
  }
  return (
    <div className="flex justify-between items-center pb-8">
              <section className="flex flex-col">
                <h1 className="text-heading_large font-bold">{word.word}</h1>
                <h3 className="text-secondary text-heading_medium">{phoneticName}</h3>
            </section>
            <svg className="group" onClick={()=>handleAudioClick(audioSource)} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g className="fill-secondary" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path className=" group-hover:fill-white " d="M29 27v21l21-10.5z"/></g></svg>
              </div>
  )
}

export default PhoneticsSection