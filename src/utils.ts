import slugify from "slugify";
export const createSlug = (inputValue: string, separator?: string) => {
  return inputValue
    ? slugify(inputValue, {
        lower: true,
        replacement: separator || "-",
      })
    : "";
};
