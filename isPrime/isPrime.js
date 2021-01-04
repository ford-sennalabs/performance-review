export function isPrime(num) {
  if(num <= 1){
    throw new Error('Not Integer number and more than 1');
  }
  const sqrtNum = Math.sqrt(num);
  for(let n = 2; n <= sqrtNum; n++)
    if(num % n === 0) return false;
  return num > 1;
}
