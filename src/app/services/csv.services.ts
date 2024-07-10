import { OCR } from "../models/OCR";
import { isCheckSum } from "../utils/calculateCheckSum";

export class CsvService {

  public async postCsvFile(data: OCR[]): Promise<void> {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    const content = await response.json();
    
    if (response.status === 201) {
      alert(`Success with an id of ${content.id}!`)
    } else alert("Something went wrong.")
  }

  public importDataFromCSV(csvText: string): Array<any> {
    const dataRows = csvText.slice(csvText.indexOf('\n') + 1).split(',');
    let dataArray: OCR[] = [];

    dataRows.forEach((row => {
      let obj: {policyNumber: number | string, isValid: boolean} = new OCR();
      
        obj.policyNumber = row;
      // }
      dataArray.push(obj);
    }));
    console.log("FINAL", dataArray);

    let resultArray = this.validateCheckSums(dataArray);
    console.log("RESULT", resultArray);
    
    return resultArray;
  }

  private validateCheckSums(data: any[]): Array<any> {
    data.forEach(el => {
      if (isCheckSum(el.policyNumber)) {
        el.isValid = true
      } else el.isValid = false
    })
    
    return data
  }
}
