import { ComponentType, SVGProps } from 'react';

export type IFIlter = 'default' | 'title' | 'genre';

export interface IBaseRequest {
  page: number;
}

export enum Languages {
  RUSSIAN = 'ru',
  ENGLISH = 'en',
}

export enum MovieGenreTags {
  ALL = 0,
  ACTION = 28,
  DRAMA = 18,
  CRIME = 80,
  ADVENTURE = 12,
  ROMANCE = 10749,
  HORROR = 27,
  DOCUMENTARY = 99,
}

export enum MovieGenres {
  ALL = 0,
  ACTION = 28,
  DRAMA = 18,
  CRIME = 80,
  ADVENTURE = 12,
  ROMANCE = 10749,
  HORROR = 27,
  DOCUMENTARY = 99,
  COMEDY = 35,
  ANIMATION = 16,
  FAMILY = 10751,
  FANTASY = 14,
  HISTORY = 36,
  MUSIC = 10402,
  MYSTERY = 9648,
  SCIENCEfICTION = 878,
  TvmOVIE = 10770,
  THRILLER = 53,
  WAR = 10752,
  WESTERN = 37,
}

export type IGenre = keyof typeof MovieGenreTags;

export enum SocialMedia {
  FACEBOOK = 'https://www.facebook.com/ModsenSoftware',
  INSTAGRAM = 'https://www.instagram.com/modsencompany',
  WEBSITE = 'https://www.modsen-software.com',
  LINKEDIN = 'https://www.linkedin.com/company/modsen',
}

export enum VideoType {
  TEASER = 'Teaser',
  FEATURETTE = 'Featurette',
  TRAILER = 'Trailer',
}

export enum VideoSource {
  YOUTUBE = 'YouTube',
}

export type Theme = 'light' | 'dark';

export interface ITagButton {
  tag: IGenre;
}

export interface TagButtonProps {
  $background: string;
  $color: string;
}

export interface ISocialMedia {
  name: string;
  icon: ComponentType<SVGProps<SVGAElement>>;
  url: string;
}

export interface IMovie {
  id: number;
  genre_ids: MovieGenreTags[];
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  original_title: string;
  video: boolean;
  release_date: string;
}

export interface IMovieResponce {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IVideo {
  id: number;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  size: number;
  site: VideoSource;
  type: VideoType;
}

export interface IVideoResponse {
  id: number;
  results: IVideo[];
}
