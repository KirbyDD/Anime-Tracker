import React from "react";
import "./Dictionary.scss";

const Dictionary = () => {
  return (
    <section className="dictionary">
      <h2 className="title">Anime Community Dictionary</h2>
      <div className='i-box'>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fAUR9rRHpqo"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen='true'
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4pBHb4s4zoM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
      <h3 className="category">General Terms</h3>
      <ul>
        <li>
          <strong>Anime (ah-knee-meh): </strong>Used mostly to refer to
          animation specifically from Japan
        </li>
        <li>
          <strong>Dub: </strong>Anime that after being recorded in it's original
          language has the voices rerecorded in a new language.
        </li>
        <li>
          <strong>Filler: </strong>An episode that does not progress the story.
          Some examples are flashback episodes or beach vacation episodes.
        </li>
        <li>
          <strong>O.V.A. (Original Video Animation): </strong>A one off
          episode/movie that is seperate from the current stories progression.
        </li>
        <li>
          <strong>Sub: </strong>Anime that after being recorded in original
          language is then given subtitles to a different language.
        </li>
        <li>
          <strong>Weeb (we-b): </strong>A person who either tries to use anime
          specific lingo in everyday life or tries to incorporate Japanese
          customs into their personal life base mostly off watching anime.
        </li>
      </ul>

      <h3 className="category">Anime Categories</h3>
      <ul>
        <li>
          <strong>Ecchi (eh-chee): </strong>Anime Category that centers around
          sexual situations but not actual sex.
        </li>
        <li>
          <strong>Mecha (meh-kah): </strong>Anime Category that focuses on
          characters piloting a large mechanized combat robot.
        </li>
        <li>
          <strong>Isekai (E-seh-kai): </strong>Anime Category where the main
          character is transported to a new world/dimension.
        </li>
        <li>
          <strong>Seinen: </strong>Similar to Shounen but usually a more mature
          story. Aimed more at college age watchers.
        </li>
        <li>
          <strong>Shounen (show-nin): </strong> Anime that has a mostly action
          based.
        </li>
        <li>
          <strong>Shoujo (show-joe): </strong>Anime that is mostly personal or
          romantical relationships.
        </li>
        <li>
          <strong>Slice of Life: </strong>Anime Category that depicts character
          in a natural day to day life.
        </li>
        <li>
          <strong>Yaoi (yow-E): </strong> Male/Male romance. Also called
          Shounen-ai.
        </li>
        <li>
          <strong>Yuri (U-re): </strong> Female/Female romance. Also called
          Shoujo-ai.
        </li>
      </ul>

      <h3 className="category">Personalities and Relationships</h3>
      <ul>
        <li>
          <strong>Dandere (dahn-deh-reh): </strong>Character that show little to
          zero emotion externally even though they can internally feel extreme
          emotions.
        </li>
        <li>
          <strong>Kouhai: </strong>A person who is an under classman or has less
          experience in a work place.
        </li>
        <li>
          <strong>Oka-san (O-kah): </strong>Mother
        </li>
        <li>
          <strong>Onii-san/chan (Oh-knee): </strong>Older Brother.
        </li>
        <li>
          <strong>Onee-san/chan (Oh-neh): </strong>Older Sister.
        </li>
        <li>
          <strong>Oto-san: (O-toe): </strong>Father
        </li>
        <li>
          <strong>Senpai (sehn-pie): </strong>A person who is an upper classman
          or has more experience in a work place.
        </li>
        <li>
          <strong>Tsundere (soon-deh-reh): </strong>A character who treats their
          love interest harshly because they are too afraid to express their
          true feelings.
        </li>
        <li>
          <strong>Yandere (yahn-deh-reh): </strong>A character that is so in
          love with someone else that they are willing to hurt/kill someone over
          their love interest for minor situations like greetings, conversing,
          or even looking in their direction. Also willing to harm love interest
          if feeling betrayed.
        </li>
      </ul>

      {/* <li><strong></strong></li> */}
    </section>
  );
};

export default Dictionary;
