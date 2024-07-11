import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CsvService } from './services/csv.services';
import { CommonModule, NgFor } from '@angular/common';
import { OCR } from './models/OCR';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kin-ocr';
  constructor(private csvService: CsvService) {}
  public importedData: OCR[] = [];
  public fileName: string = '';

  public async importData(event: any): Promise<void> {
    let fileContent = await this.getTextFromFile(event);
    this.importedData = this.csvService.importDataFromCSV(fileContent);
  }

  public async handleSubmit(): Promise<void> {
    this.csvService.postCsvFile(this.importedData);    
  }
  
  private async getTextFromFile(event: any) {
    const file: File = event.target.files[0];

    if (file.type != 'text/csv'){
      alert("Please make sure you are uploading file with the extension '.csv'");
      throw new Error("WRONG FILE TYPE");
    } else if (file.size > 2 * 1024) {
      alert(`Your file is too big! Please limit to 2MB or less.`)
      throw new Error("FILE TOO BIG");
    } else {
      this.fileName = file.name;
      let fileContent = await file.text();
      
      return fileContent;
    }
  }
}
