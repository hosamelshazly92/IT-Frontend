// styles
import styles from "./Tag.module.css";

// vars
const { container, label, text } = styles;

const Tag = ({ letter }) => {
  return (
    <div className={container}>
      <p className={label}>lettera</p>
      <p className={text}>{letter}</p>
    </div>
  );
};

export default Tag;
