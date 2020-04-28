import React from "react";

export const Term = ({word, definition, pronunciation}) => {
  return <li><strong>{word}{pronunciation && ` (${pronunciation})`}: </strong>{definition}</li>;
};

export default Term;
