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



  const firstAlphabet = mbti[0];
  const firstFuncAlphabet = mbti[1];
  const secondFuncAlphabet = mbti[2];
  const attitudesAlphabet = mbti[3];

  let extrovertedFunction;
  let introvertedFunction;

  let dominantFunction;
  let auxiliaryFunction;

  let inferiorFunction;
  let tertiaryFunction;

}
