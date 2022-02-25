// styles
import styles from "./Tag.module.css";

// vars
const { container, label } = styles;

const Tag = ({ children }) => {
  return (
    <div className={container}>
      <p className={label}>
        {children}
      </p>
    </div>
  );
};

export default Tag;
