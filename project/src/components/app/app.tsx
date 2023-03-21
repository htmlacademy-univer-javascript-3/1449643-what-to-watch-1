import Main from '../../pages/main-page/main-page';

type MainProp = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: MainProp): JSX.Element {
  return (
    <Main
      title = {title}
      genre = {genre}
      year = {year}
    />
  );
}

export default App;
