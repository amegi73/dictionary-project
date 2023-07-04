import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <body>
      <div className="App">
        <div className="container">
          <header className="App-header">Dictionary</header>
          <main>
            <Dictionary />
          </main>
          <footer className="App-footer">
            <small>
              <a
                href="https://github.com/amegi73/dictionary-project"
                rel="noreferrer"
                target="_blank"
              >
                Open-source code
              </a>{" "}
              by Amelie Gitti
            </small>
          </footer>
        </div>
      </div>
    </body>
  );
}
