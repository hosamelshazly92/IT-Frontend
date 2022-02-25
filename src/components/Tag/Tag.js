// styles
import styles from "./Tag.module.css";

// vars
const { container, label, text } = styles;

const Tag = ({ letter }) => {
  return (
    <div className={container}>
      <p className={label}>
        lettera<span className={text}>{letter}</span>
      </p>
    </div>
  );
};

export default Tag;
