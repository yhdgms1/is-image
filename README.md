# is-image
Fork of https://github.com/sindresorhus/is-image
## Get started
````bash
import { isImage } from "https://raw.githubusercontent.com/Artemis69/is-image/master/mod.ts";

isImage("image.png");  //true
isImage("image.jpg");  //true
isImage("image.webp"); //true
isImage("image.exe");  //false
isImage(".env");       //false
isImage("lalala");     //false
````
