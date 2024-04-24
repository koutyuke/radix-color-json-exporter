import colors from "@radix-ui/colors";
import type { Color, ColorTheme, ColorType } from "./type";
import { RadixColor, exportJSON } from "./utils";

const main = ({
  useColors,
  useP3 = true,
  useAlpha = true,
}: {
  useColors?: ColorType[];
  useP3?: boolean;
  useAlpha?: boolean;
}) => {
  const color: Color = {};
  const sameColoNameData: Record<string, RadixColor[]> = {};

  Object.entries(colors).forEach(([key, value]) => {
    const radixColor = new RadixColor(key, value);

    if (
      radixColor.name === "white" ||
      radixColor.name === "black" ||
      (useColors !== undefined &&
        !useColors.includes(radixColor.name as ColorType))
    ) {
      return;
    }

    if (sameColoNameData[radixColor.name] === undefined) {
      sameColoNameData[radixColor.name] = [radixColor];
    } else {
      sameColoNameData[radixColor.name]?.push(radixColor);
    }
  });

  Object.entries(sameColoNameData).forEach(([key, value]) => {
    const lightColor = value.find(
      (color) => !color.isDark && !color.isP3 && !color.isAlpha
    );
    const lightColorAlpha = value.find(
      (color) => !color.isDark && !color.isP3 && color.isAlpha
    );
    const lightColorP3 = value.find(
      (color) => !color.isDark && color.isP3 && !color.isAlpha
    );
    const lightColorP3Alpha = value.find(
      (color) => !color.isDark && color.isP3 && color.isAlpha
    );

    const darkColor = value.find(
      (color) => color.isDark && !color.isP3 && !color.isAlpha
    );
    const darkColorAlpha = value.find(
      (color) => color.isDark && !color.isP3 && color.isAlpha
    );
    const darkColorP3 = value.find(
      (color) => color.isDark && color.isP3 && !color.isAlpha
    );
    const darkColorP3Alpha = value.find(
      (color) => color.isDark && color.isP3 && color.isAlpha
    );

    if (
      lightColor === undefined ||
      lightColorAlpha === undefined ||
      lightColorP3 === undefined ||
      lightColorP3Alpha === undefined ||
      darkColor === undefined ||
      darkColorAlpha === undefined ||
      darkColorP3 === undefined ||
      darkColorP3Alpha === undefined
    ) {
      throw new Error(`Invalid color data: ${key}`);
    }

    const colorTheme: ColorTheme = {
      light: lightColor.data,
      dark: darkColor.data,
    };

    if (useAlpha) {
      colorTheme.light.a = lightColorAlpha.data;
      colorTheme.dark.a = darkColorAlpha.data;
    }

    if (useP3) {
      colorTheme.light.p3 = {
        ...lightColorP3.data,
      };
      colorTheme.dark.p3 = {
        ...darkColorP3.data,
      };
    }

    if (useAlpha && useP3) {
      colorTheme.light.p3!.a = lightColorP3Alpha.data;
      colorTheme.dark.p3!.a = darkColorP3Alpha.data;
    }

    color[key] = colorTheme;
  });

  exportJSON(color, "colors.json");
};

main({ useColors: ["blue"] });
