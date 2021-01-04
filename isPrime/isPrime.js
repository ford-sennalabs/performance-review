export function isPrime(num) {
  if(num > 1){
    throw new Error('Not Integer number');
  }
  const sqrtNum = Math.sqrt(num);
  for(let n = 2; n <= sqrtNum; n++){}
}
