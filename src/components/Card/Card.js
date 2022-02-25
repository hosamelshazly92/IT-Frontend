// components
import Tag from "../Tag/Tag";
import Noun from "../Noun/Noun";

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
      <Noun word={word} />
    </div>
  );
};

export default Card;
