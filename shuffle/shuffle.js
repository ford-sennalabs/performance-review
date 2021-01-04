/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function shuffle(cards) {

  const pickCards = cards.slice(0,4);
  cards.splice(4,cards.length-1);


  return cards.concat(pickCards);
}

