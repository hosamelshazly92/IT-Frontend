// imports
import { useState, useEffect } from "react";

// components
import Card from "./components/Card/Card";

// styles
import styles from "./App.module.css";

// vars
const { container, message } = styles;


function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/words")
      .then(async (res) => {
        const data = await res.json();
        console.log(data.words);
        setWords(data.words);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={container}>
      {words.length > 0 ? (
        words.map((itm) => <Card key={itm._id} word={itm} />)
      ) : (
        <p className={message}>Loading....</p>
      )}
    </div>
  );
}

export default App;
