import xml2js from "xml2js";

export const parser = new xml2js.Parser({
  mergeAttrs: true,
  normalize: true,
  normalizeTags: true,
  explicitArray: false,
});
