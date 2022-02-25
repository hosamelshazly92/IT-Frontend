// components
import Tag from "../Tag/Tag";

// styles
import styles from "./Verb.module.css";

// vars
const {
  container,
  header,
  label,
  title,
  pronunciationLabel,
  auxiliaryContainer,
  auxiliaryLabel,
  typeContainer,
} = styles;

const Verb = ({ word }) => {
  const { verb } = word;

  return (
    <div className={container}>
      <div className={header}>
        <p className={label}>verbo</p>
        <div className={typeContainer}>
          {verb.type.map((itm) => (
            <Tag key={itm}>{itm}</Tag>
          ))}
        </div>
      </div>
      <p className={title}>{verb.word}</p>
      <p className={pronunciationLabel}>/{verb.pronunciation}/</p>
      <div className={auxiliaryContainer}>
        <div className={auxiliaryLabel}>
          <p className={label}>ausiliare</p>
        </div>
        <Tag>{verb.auxiliary}</Tag>
      </div>
    </div>
  );
};

export default Verb;
