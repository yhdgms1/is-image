import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isImage, isWebImage } from './mod.ts'

Deno.test('image extensions', () => {
  assertEquals(isImage('image.png'), true)
  assertEquals(isImage('image.jpg'), true)
  assertEquals(isImage('image.webp'), true)
  assertEquals(
    isImage(
      'https://c.wallhere.com/photos/5f/71/anime_anime_girls_Love_Live_Nishikino_Maki_Yazawa_Nico_yuri_short_hair_purple_hair-25423.jpg!d'
    ),
    true
  )
  assertEquals(isImage('https://example.com/image.png?ref=x'), true)
})

Deno.test('not extensions of images', () => {
  assertEquals(isImage('chrome.exe'), false)
  assertEquals(isImage('outdoor activities.mp4'), false)
  assertEquals(isImage('.env'), false)
  assertEquals(isImage('Hello!'), false)
})

Deno.test('web images', () => {
  assertEquals(isWebImage('i-sing-in-the-shower.avif'), true)
  assertEquals(isWebImage('my-cat-eat-a-flower.j2k'), false)
})
