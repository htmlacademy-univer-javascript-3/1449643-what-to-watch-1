export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  FilmReviews = '/films/:id/reviews',
  FilmDetails = '/films/:id/details',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }


const RatingValue = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};

export function FilmRating(rating: number | undefined): string {
  if (rating === undefined) {
    return 'No rating';
  }
  if (rating < RatingValue.BAD) {
    return 'Bad';
  }
  if (RatingValue.BAD <= rating && rating < RatingValue.NORMAL) {
    return 'Normal';
  }
  if (RatingValue.NORMAL <= rating && rating < RatingValue.GOOD) {
    return 'Good';
  }
  if (RatingValue.GOOD <= rating && rating < RatingValue.VERY_GOOD) {
    return 'Very good';
  }
  if (rating >= RatingValue.VERY_GOOD) {
    return 'Awesome';
  }
  return 'No rating';
}

export enum GenreName {
  ALL_GENRES = 'All genres',
  COMEDIES = 'Comedies',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMAS = 'Dramas',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
  THRILLERS = 'Thrillers',
}
export const TIMEOUT_SHOW_ERROR = 2000;
