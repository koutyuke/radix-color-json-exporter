import type colors from "@radix-ui/colors";

type TonePallet = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
};

type ColorProfile = TonePallet & {
  a?: TonePallet;
  p3?: TonePallet & {
    a?: TonePallet;
  };
};

type ColorTheme = {
  light: ColorProfile;
  dark: ColorProfile;
};

type Color = Record<string, ColorTheme>;

type ExtractColor<T extends string> = T extends `${infer Color}${
  | "Dark"
  | "DarkA"
  | "DarkP3"
  | "DarkP3A"}`
  ? Color
  : never;

type ColorType = ExtractColor<keyof typeof colors>;

export type { ColorProfile, ColorTheme, TonePallet, Color, ColorType };
