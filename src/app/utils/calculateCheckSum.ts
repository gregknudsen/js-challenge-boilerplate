export const isCheckSum = (array: any): boolean => {
  const numArray = array.split('')
      .reverse()
      .map((num: string) => Number.parseInt(num))

  let lastNum = Number.parseInt(numArray.shift());
  
  let sum = numArray.reduce((acc: number, val: number, i: number) => {
    return (acc + (val*(i+2)))
  }, lastNum)

  return sum % 11 === 0;
}