export type Theme = "warning" | "dark" | "darkGreen";

export type Size = "small" | "medium" | "large";

export interface ButtonProps {
  theme?: Theme;
  size?: Size;
  $width?: string;
  $height?: string;
  $prefix?: string;
  $suffix?: string;
}
