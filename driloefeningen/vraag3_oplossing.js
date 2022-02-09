/**
 * Vraag 3
 * Vraag een getal aan de gebruiker en beeld in de console een aantal regels af met hartjes (♥),
 * zoals in onderstaand voorbeeld.
 *
 * Voorbeeld:
 *
 * INPUT:
 *   Hoeveel regels met hartjes moeten er afgeprint worden? 4 regels
 *
 * OUTPUT:
 *    START PROGRAM
 *    ♥
 *    ♥♥
 *    ♥♥♥
 *    ♥♥♥♥
 *    END PROGRAM
 */

/* Oplossing */
'use strict';
const numberOfLines = parseInt(
  prompt('Hoeveel regels met hartjes moeten er afgeprint worden?')
);
console.log('START PROGRAM');
for (let i = 0; i < numberOfLines; i++) {
  // Een hartje ♥ kan je ook als Unicode code point (UTF-16 code) opgeven.
  console.log('\u2665'.repeat(i + 1)); //of gebruik nog een for-statement
}
console.log('END PROGRAM');
