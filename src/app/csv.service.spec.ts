import { TestBed } from '@angular/core/testing';
import { CsvService } from './services/csv.services';
import { OCR } from './models/OCR';

describe("CSV Service", () => {
  let csvService: CsvService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CsvService]
    }).compileComponents();
    csvService = TestBed.inject(CsvService)
  });
  
  it('importDataFromCSV function should return an array of OCR objects', () => {
    const result: OCR[] = csvService.importDataFromCSV('123456789,555555555')
    expect(result).toBeInstanceOf(Array<OCR>)
  });

  it('should determine if checksum is valid', () => {
    const result: OCR[] = csvService.importDataFromCSV('123456789')
    expect(result[0].isValid).toBe(true);

  });

  it('should determine if checksum is invalid', () => {
    const result: OCR[] = csvService.importDataFromCSV('555555555')
    expect(result[0].isValid).toBe(false);
  })
})