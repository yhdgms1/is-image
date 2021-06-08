import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isImage, isWebImage } from "./mod.ts";

Deno.test("image extensions", () => {
  assertEquals(isImage("image.png"), true);
  assertEquals(isImage("image.jpg"), true);
  assertEquals(isImage("image.webp"), true);
  assertEquals(
    isImage(
      "https://c.wallhere.com/photos/5f/71/anime_anime_girls_Love_Live_Nishikino_Maki_Yazawa_Nico_yuri_short_hair_purple_hair-25423.jpg!d",
    ),
    true,
  );
  assertEquals(isImage("https://example.com/image.png?ref=x"), true);
  assertEquals(
    isImage("https://pbs.twimg.com/media/DfvW0CoUwAEIp_v.png:large"),
    true,
  );
});

Deno.test("not extensions of images", () => {
  assertEquals(isImage("edge.exe"), false);
  assertEquals(isImage("outdoor activities.mp4"), false);
  assertEquals(isImage(".env"), false);
  assertEquals(isImage("Hello!"), false);
});

Deno.test("web images", () => {
  assertEquals(isWebImage("i-sing-in-the-shower.avif"), true);
  assertEquals(isWebImage("my-cat-eat-a-flower.j2k"), false);
});

Deno.test("things that cannot be handled by this module", () => {
  assertEquals(
    isImage(
      "https://image.myanimelist.net/ui/ogNrt6xjoxcgp7z0v_1Zi1VqXLARO-JBjDbHhIbEYxMk3fabnssaDwXTISs5aI3YhJMmavA34YWZZBPXi9BJ6ndZnVMLMTSGj5YUnpxl0j4",
    ),
    false,
  );
  assertEquals(
    isImage(
      "https://steamuserimages-a.akamaihd.net/ugc/773994568286144470/A161481AAF909493DF357353FC07151186548AE5/?imw=512&amp;amp;imh=722&amp;amp;ima=fit&amp;amp;impolicy=Letterbox&amp;amp;imcolor=%23000000&amp;amp;letterbox=true",
    ),
    false,
  );
});
