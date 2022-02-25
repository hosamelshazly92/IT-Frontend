// styles
import styles from "./Card.module.css";

// vars
const { container } = styles;

const Card = ({ word }) => {
  const { letter, noun, verb } = word;

  return <div className={container}>
      <p>Letter: <span>{letter}</span></p>
      <p>Noun: <span>{noun.word}</span>, Gender: <span>{noun.gender}</span></p>
      <p>Verb: <span>{verb}</span></p>
  </div>;
};

export default Card;
