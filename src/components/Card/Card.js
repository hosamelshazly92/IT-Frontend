// components
import Tag from "../Tag/Tag";

// styles
import styles from "./Card.module.css";

// vars
const { container, tagContainer } = styles;

const Card = ({ word }) => {
  const { letter, noun, verb } = word;

  return (
    <div className={container}>
      <div className={tagContainer}>
        <Tag letter={letter} />
      </div>
      <p>
        Noun: <span>{noun.word}</span>, Gender: <span>{noun.gender}</span>
      </p>
      <p>
        Verb: <span>{verb}</span>
      </p>
    </div>
  );
};

export default Card;
