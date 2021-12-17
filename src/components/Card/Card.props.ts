export interface CardProps {
  key: number;
  title: string;
  overview: string;
  image: string;
  releaseDate: number | string;
  rate: number;
  list?: boolean | string | null;
}
