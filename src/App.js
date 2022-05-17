import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contents from "./components/Contents";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { useTheme } from "./components/useTheme";
import { GlobalStyles } from "./components/GlobalStyles";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  const [langs, setLangs] = useState({});
  const [titles, setTitles] = useState();

  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  useEffect(() => {
    fetch("data/ProgLangs.json")
      .then((e) => e.json())
      .then((res) => setLangs(res));
  }, []);

  useEffect(() => {
    setTitles(Object.keys(langs));
  }, [langs]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage:
          "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
      }}
    >
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Header data={langs} />
          <div className="body" style={{ fontFamily: selectedTheme.font }}>
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
          </div>
          <Footer />
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
