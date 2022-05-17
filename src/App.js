import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contents from "./components/Contents";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [langs, setLangs] = useState({});
  const [titles, setTitles] = useState();
  useEffect(() => {
    fetch("data/ProgLangs.json")
      .then((e) => e.json())
      .then((res) => setLangs(res));
  }, []);
  useEffect(() => {
    setTitles(Object.keys(langs));
  }, [langs]);
  return (
    <div className="">
      <Header data={langs} />
      <div className="body">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          {titles &&
            titles.map((title, i) => (
              <Route
                path={`/${title}`}
                key={i}
                element={<Contents data={Object.keys(langs[`${title}`])} />}
              >
                {Object.keys(langs[`${title}`]).map((innerTitle, i) => {
                  return (
                    <Route
                      path={innerTitle}
                      key={i}
                      element={<Content data={langs[title][innerTitle]} />}
                    ></Route>
                  );
                })}
              </Route>
            ))}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
