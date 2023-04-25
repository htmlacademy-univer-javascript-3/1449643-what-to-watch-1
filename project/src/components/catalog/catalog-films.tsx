import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
import CatalogGenres from './catalog-genres';
import CatalogMoreBtn from './catalog-more-btn';
import { useState } from 'react';

type FilmsCatalogProp = {
  films: Films[];
}

function CatalogFilms({films}: FilmsCatalogProp): JSX.Element {
  //eslint-disable-next-line
  const [_, setActiveFilm] = useState(0);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenres />
      <div className="catalog__films-list">
        {films.map((film) => (
          <FilmCard
            onMouseEnterHandler={() => {setActiveFilm(film.id);}}
            key={film.id}
            id={film.id}
            name={film.name}
            previewImage={film.previewImage}
            posterImage={film.posterImage}
            previewVideoLink={film.previewVideoLink}
          />
        )
        )}
      </div>

      <CatalogMoreBtn />
    </section>
  );
}

export default CatalogFilms;
