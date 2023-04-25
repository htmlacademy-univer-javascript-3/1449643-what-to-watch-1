import CatalogFilms from '../../components/catalog/catalog-films';
import { Films } from '../../types/films';
import MainFilmCard from '../../components/main-film-card/main-film-card';
import Footer from '../../components/footer/footer';

type MainFilmCardProp = {
  films: Films[];
  myFilms: Films[];
}

function MainPage ({films, myFilms}: MainFilmCardProp): JSX.Element {
  return (
    <>
      <MainFilmCard
        films={films}
        myFilms={myFilms}
      />
      <div className="page-content">
      <CatalogFilms/>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
