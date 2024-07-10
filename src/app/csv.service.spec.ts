import { CsvService } from './services/csv.services';
import { OCR } from './models/OCR';

const OCRArray: OCR[] = []

// const ocr1 = new OCR();
// const ocr2 = new OCR();
// ocr1.policyNumber = '123456789'
// ocr1.isValid = false;

// ocr2.policyNumber = '457508000'
// ocr2.isValid = true;

// OCRArray.push(ocr1);
// OCRArray.push(ocr2);

describe("CSV Service", () => {
  it('should determine if checksum is valid', () => {
    const _csvService = new CsvService();

    const result: any[] = _csvService.importDataFromCSV('123456789')

    console.log("FROM TEST", result);
    expect(result).toBeInstanceOf(Array)
    // expect(result).toBe([OCR{policyNumber: '123456789', isValid: true}]);
    // const fixture = TestBed;
    // const app = fixture.componentInstance;

    // app.CsvService

  })
})