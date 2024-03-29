

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Glasgow" />
        <footer>
          This project was coded by Monika Gosa and is open-sourced on{" "}
          <a
            href="https://github.com/MGosa/react-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
