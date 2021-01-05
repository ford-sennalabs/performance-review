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

  function flipString(funcString) {
    const firstFlipString = flipMBTIAlphabet[
      funcString[0].toLowerCase()
    ].toUpperCase();
    const secondFlipString = flipMBTIAlphabet[funcString[1].toLowerCase()];

    return firstFlipString + secondFlipString;
  }

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

  if (attitudesAlphabet.toLowerCase() === "p") {
    extrovertedFunction = firstFuncAlphabet + "e";
    introvertedFunction = secondFuncAlphabet + "i";
  } else if (attitudesAlphabet.toLowerCase() === "j") {
    extrovertedFunction = secondFuncAlphabet + "e";
    introvertedFunction = firstFuncAlphabet + "i";
  }

  if (extrovertedFunction[1].toLowerCase() === firstAlphabet.toLowerCase()) {
    dominantFunction = extrovertedFunction;
    auxiliaryFunction = introvertedFunction;
  } else {
    dominantFunction = introvertedFunction;
    auxiliaryFunction = extrovertedFunction;
  }

}
