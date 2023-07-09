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
