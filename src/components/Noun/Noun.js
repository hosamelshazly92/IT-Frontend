// styles
import styles from "./Noun.module.css";

// vars
const { container, header, label, title } = styles;

const Noun = ({ word }) => {
  const { noun } = word;

  return (
    <div className={container}>
      <div className={header}>
        <p className={label}>Sostantivo</p>
        <p className={label}>({noun.gender})</p>
      </div>
      <p className={title}>{noun.word}</p>
      <p className={label}>/{noun.pronunciation}/</p>
    </div>
  );
};

export default Noun;
