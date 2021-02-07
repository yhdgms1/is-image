# is-image

*fork of https://www.npmjs.com/package/is-image*

This module checks the ending of the file name and if the extension is a picture the result is True

## Getting started
```ts
import { isImage } from "https://raw.githubusercontent.com/Artemis69/is-image/master/mod.ts";

isImage("image.png"); //True
````

## Results

````ts
import { isImage } from "https://raw.githubusercontent.com/Artemis69/is-image/master/mod.ts";

isImage("image.png");  //true
isImage("image.jpg");  //true
isImage("image.webp"); //true
isImage("image.exe");  //false
isImage(".env");       //false
isImage("lalala");     //false
isImage("https://example.com/image.png!d"); //Sadly, the false
isImage("https://example.com/image.png?ref=x"); //Sadly, the false
````