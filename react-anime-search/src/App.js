import Header from './components/Header';
import {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import {Toggle} from './components/Toggle';
import {useDarkMode} from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  const [theme, toggleTheme] = useDarkMode();
  const [language, setLang] = useState(localStorage.getItem("lang"));
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const GetTopAnime = async() => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`).then(res => res.json());
    SetTopAnime(temp.top.slice(0,5));
  }
  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search);
  }

   const setLang2 = (childData) =>{
    setLang(childData)
  }

  const FetchAnime = async(query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=6`).then(res => res.json());
    SetAnimeList(temp.results);
  }

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <Header setLanguage={setLang2}/>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <div className="content-wrap">
          <Sidebar topAnime={topAnime} selectedLanguage={language} />
          <MainContent HandleSearch={HandleSearch} search={search} SetSearch={SetSearch} animeList={animeList} selectedLanguage={language}/>
        </div>
      </div>  
    </ThemeProvider>
  );
}

export default App;
