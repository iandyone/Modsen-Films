import React, { ComponentType, ReactElement, ReactNode, SVGProps } from 'react';

export enum SearchTags {
  ALL = 'all',
  ACTION = 'action',
  DRAMA = 'drama',
  CRIME = 'crime',
  ROMANTIC = 'romantic',
  HORROR = 'horror',
  DOCUMENTARY = 'documentary',
}

export enum MovieGenres {
  ACTION = 28,
  DRAMA = 18,
  CRIME = 80,
  ADVENTURE = 12,
  ROMANCE = 10749,
  HORROR = 27,
  /* unused */
  DOCUMENTARY = 99,
  ANIMATION = 16,
  COMEDY = 35,
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

export enum SocialMedia {
  FACEBOOK = 'https://www.facebook.com/ModsenSoftware',
  INSTAGRAM = 'https://www.instagram.com/modsencompany',
  TWITTER = 'https://www.modsen-software.com',
  LINKEDIN = 'https://www.linkedin.com/company/modsen',
}

export type Theme = 'light' | 'dark';

export interface ITagButton {
  tag: SearchTags;
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
