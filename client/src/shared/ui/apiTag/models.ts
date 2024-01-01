export type Theme = "GET" | "POST";

export interface ApiTagProps {
  theme?: Theme;
  $width?: string;
  $height?: string;
}
