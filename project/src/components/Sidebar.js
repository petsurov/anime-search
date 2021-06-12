import React from 'react';
import {texts} from './texts';


function Sidebar({topAnime, selectedLanguage}) {
    return (
        <nav>
            <h3>{texts[selectedLanguage]["h3"]}</h3>
            {topAnime.map(anime => (
                <a href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer">{anime.title}</a>  
            ))}
        </nav>
    )
}
export default Sidebar
