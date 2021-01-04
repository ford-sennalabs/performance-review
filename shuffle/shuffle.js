/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function shuffle(cards) {

  const oldCards = [...cards]

  const pickCards = oldCards.slice(0,4);
  oldCards.splice(0,4);


  return oldCards.concat(pickCards);
}

