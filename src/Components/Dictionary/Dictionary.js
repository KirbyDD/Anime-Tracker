import React from "react";
import './Dictionary.scss'

const Dictionary = () => {
  return(
    <section className='dictionary'>
      <h2 className='title'>Anime Community Dictionary</h2>
      <ul>
        <li>Anime (ah-knee-meh): Used mostly to refer to animation specifically from Japan</li>
        <li>Tsundere (soon-deh-reh): A character who treats their love interest harshly because they are too afraid to express their true feelings.</li>
        <li>Weeb (we-b): A Person who either tries to you anime specific lingo in everyday life or 
          tries to incorporate Japanese customs into their personal life base mostly off watching anime.
        </li>
        <li>Yandere (yahn-deh-reh): A character that is so in love with someone else that they are willing to hurt/kill someone over their love interest for minor
          situations like greetings, conversing, or even looking in their direction. Also willing to harm love interest
          if feeling betrayed. 
        </li>
      </ul>
    </section>
  )
}

export default Dictionary;