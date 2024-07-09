import { calculateCheckSum } from "../utils/calculateCheckSum";

export class CsvService {
  public importDataFromCSV(csvText: string): Array<any> {
    const dataRows = csvText.slice(csvText.indexOf('\n') + 1).split(',');
    let dataArray: any[] = [];
    // console.log("1st", dataRows[9]);
    // return dataRows;
    dataRows.forEach((row => {
      let obj: any = new Object();
      
        obj.policyNumber = row;
      // }
      dataArray.push(obj);
    }));
    console.log("FINAL", dataArray);

    let resultArray = this.validateCheckSums(dataArray);
    console.log("RESULT", resultArray);
    
    return resultArray;
  }


  /*
    policy number:  3  4  5  8  8  2  8  6  5
    position        d9 d8 d7 d6 d5 d4 d3 d2 d1

    Checksum calc:
    (d1 + (2*d2) + (3*d3) +...+(9*d9) mod 11 = 0)
    (5 + 12 + 24 + 8 + 40 + 48 + 35 + 32 + 27 = 231) --- 231 % 11 = 0)
    (0 + 0 + 0 + 32 + 0 + 30 + 49 + 40 + 36)
  
  */

  private validateCheckSums(data: any[]): Array<any> {
    console.log(data);
    data.forEach(el => {
      console.log(el);
      
      // const arr = el.policyNumber
      // .split('')
      // .reverse()
      // .map((num: string) => Number.parseInt(num))

      // let lastNum = arr.shift();
      // console.log(lastNum);
      
      // let sum = arr.reduce((acc: number, val: number, i: number) => {
      //  return (acc + (val*(i+2)))
      // }, lastNum)
      // console.log("SUM", sum);
      
      // console.log("Number Array", arr);
      if (calculateCheckSum(el.policyNumber)) {
        el.isValid = true
      } else el.isValid = false
    })
    
    return data
  }
}
