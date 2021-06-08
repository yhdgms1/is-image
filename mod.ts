import { extname } from "https://deno.land/std/path/mod.ts";
import { extensions, webExtensions } from "./src/extensions.ts";

/**
 * This function checks whether the file extension is a picture format.
 *
 * @param {string} filename File name. For example, 'image.tiff'.
 */
function isImage(filename: string): boolean {
  return extensions.has(
    extname(filename).slice(1).split("!")[0].split("?")[0].split(":")[0].split(
      "",
    )[0].toLowerCase(),
  );
}

/**
 * This function checks whether the file extension is a picture format that can be viewed in most browsers
 *
 * @param {string} filename File name. For example, 'image.png'.
 */
function isWebImage(filename: string): boolean {
  return webExtensions.has(
    extname(filename).slice(1).split("!")[0].split("?")[0].split(":")[0].split(
      "",
    )[0].toLowerCase(),
  );
}

export { isImage, isWebImage };
