import MainFilmCard from '../../components/main-film-card/main-film-card';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';

type MainFilmCardProp = {
  title: string;
  genre: string;
  year: number;
}

function MainPage ({title, genre, year}: MainFilmCardProp): JSX.Element {
  return (
    <>
      <MainFilmCard
        title = {title}
        genre = {genre}
        year = {year}
      />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
