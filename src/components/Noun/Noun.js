// components
import Tag from "../Tag/Tag";

// styles
import styles from "./Noun.module.css";

// vars
const { container, header, label, title, pronunciationLabel } = styles;

const Noun = ({ word }) => {
  const { noun } = word;

  return (
    <div className={container}>
      <div className={header}>
        <p className={label}>sostantivo</p>
        <Tag>{noun.gender}</Tag>
      </div>
      <p className={title}>{noun.word}</p>
      <p className={pronunciationLabel}>/{noun.pronunciation}/</p>
    </div>
  );
};

export default Noun;
