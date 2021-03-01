# is-image

_fork of https://www.npmjs.com/package/is-image_

This module checks the ending of the file name and if the extension is a picture the result is _true_

## Getting started

```ts
import { isImage } from "https://deno.land/x/is_image/mod.ts";

isImage("image.png"); //true
```

## Results

```ts
isImage("image.png"); //true
isImage("image.jpg"); //true
isImage("image.webp"); //true
isImage("https://example.com/image.png!d"); //true
isImage("https://example.com/image.png?ref=x"); //true
isImage("image.exe"); //false
isImage(".env"); //false
isImage("lalala"); //false
```
