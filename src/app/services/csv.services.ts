export class CsvService {
  public importDataFromCSV(csvText: string): Array<any> {
    const propertyNames = csvText.slice(0, csvText.indexOf('\n')).split(',');
    const dataRows = csvText.slice(csvText.indexOf('\n') + 1).split(',');
    let dataArray: any[] = [];
    // console.log("1st", dataRows);
    return dataRows;
    // dataRows.forEach((row) => {
    //   let values = row.split(',');
    //   let obj: any = new Object();
    //   for (let index = 0; index < propertyNames.length; index++) {
    //     const propertyName: string = propertyNames[index];
    //     let val: any = values[index];
    //     if (val === '') {
    //       val = null;
    //     }
    //     obj[propertyName] = val;
    //   }
    //   dataArray.push(obj);
    // });
    // console.log(dataArray);
    
    // return dataArray;
  }
}
