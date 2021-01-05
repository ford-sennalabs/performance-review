/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */
export function findCognitiveFunction(mbti) {
  if (mbti.length > 4) {
    throw new Error("It is not a MBTI code.");
  }
  const flipMBTIAlphabet = {
    i: "e",
    s: "n",
    t: "f",
    j: "p",
    e: "i",
    n: "s",
    f: "t",
    p: "j",
  };


}
