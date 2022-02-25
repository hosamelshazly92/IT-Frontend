// components
import Noun from "../Noun/Noun";
import Verb from "../Verb/Verb";

// styles
import styles from "./Card.module.css";

// vars
const { container, letterContainer } = styles;

const Card = ({ word }) => {
  const { letter } = word;

  return (
    <div className={container}>
      <p className={letterContainer}>
        lettera <span>{letter}</span>
      </p>
      <Noun word={word} />
      <Verb word={word} />
    </div>
  );
};

export default Card;
