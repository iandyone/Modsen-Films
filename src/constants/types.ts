export enum SearchTags {
  ALL = 'all',
  ACTION = 'action',
  DRAMA = 'drama',
  CRIME = 'crime',
  ROMANTIC = 'romantic',
  HORROR = 'horror',
  DOCUMENTARY = 'documentary',
}


export type Theme = 'light' | 'dark';


export interface ITagButton {
  tag: SearchTags;
}

export interface TagButtonProps {
  $background: string;
  $color: string;
}
