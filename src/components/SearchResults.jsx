import React from 'react'

const SearchResults = ({searchResult}) => {
  if(searchResult.data.length< 1){
    return null;
  }
  const searchResults = searchResult.data
  let audioSource = "";
  let phoneticName = "";
  const handlePhonetics = (phonetics) =>{
    for(const phonetic of phonetics){
      if(phonetic.audio){
        audioSource = phonetic.audio;
        phoneticName = phonetic.text;
      }
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
    <ul className='space-y-8'>
      {searchResults.map((word, idx)=>{
        return(
          <div className="flex flex-col text-primary dark:text-light pb-28" key={idx}>
            {word.phonetics? 
              <div className="flex justify-between items-center pb-8">
              {handlePhonetics(word.phonetics)}
              <section className="flex flex-col">
                <h1 className="text-heading_large font-bold">{word.word}</h1>
                <h3 className="text-secondary text-heading_medium">{phoneticName}</h3>
            </section>
            <svg className="group" onClick={()=>handleAudioClick(audioSource)} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g className="fill-secondary" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path className=" group-hover:fill-white " d="M29 27v21l21-10.5z"/></g></svg>
              </div>
            :
            
            <div className="flex justify-between items-center pb-8">
              <section className="flex flex-col">
                <h1 className="text-heading_large font-bold">{word.word}</h1>
                <h3 className="text-secondary text-heading_medium">{word.phonetic}</h3>
            </section>
            <svg className="group" onClick={()=>handleAudioClick(word.phonetics)} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g className="fill-secondary" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path className="group-hover:fill-white" d="M29 27v21l21-10.5z"/></g></svg>
            </div>
            }
            <ul className="flex flex-col gap-14">
            {word.meanings ?
              word.meanings.map((meaning, index)=>{
                return(
                  <li key={index}>
                  <section className="flex text-center items-center pb-6">
                    <h4 className="text-heading_medium pr-9">{meaning.partOfSpeech}</h4>
                    <hr className='flex-grow text-divider_color dark:text-dark_divider'/>
                  </section>
                  <section className="flex flex-col">
                    <h6 className="text-heading_small text-subtext pb-6">Meaning</h6>
                    <ul className="list-disc marker:text-list_color pl-12 space-y-3"> 
                      {meaning.definitions? 
                      meaning.definitions.map((definition, definitionIdx)=>{
                        return(
                          <li key={definitionIdx} className="flex-col text-body_medium list-item">
                          <p>{definition.definition}</p>
                          {definition.example? <p className="text-subtext pt-3">"{definition.example}"</p>:null}
                        </li>
                        )
                      })
                      : null}
                      </ul>
                      <div className="flex pt-16">
                      <h4 className="text-heading_small text-subtext pr-6">Synonyms</h4>
                      {meaning.synonyms?
                      <a className="text-secondary text-heading_small font-bold hover:underline" href="#">{meaning.synonyms[0]}</a>
                      : null
                    }
                      </div>
                  </section>
                </li>
                )
              })
            : null}
            </ul>
            <hr className="flex-grow text-divider_color dark:text-dark_divider"/>
            {word?.sourceUrls ? 
            <section className="flex">
              <h3 className='text-body_small text-subtext underline pr-5'>Source</h3>
              <h3 className="text-body_small pr-4">{word.sourceUrls}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
            </section>
            : null}
          </div>
        )
      })}
    </ul>
  )
}

export default SearchResults