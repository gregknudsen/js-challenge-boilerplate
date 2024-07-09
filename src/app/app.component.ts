import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CsvService } from './services/csv.services';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kin-ocr';
  constructor(private _csvService: CsvService) {}
  public importedData: Array<any> = [];

  public async importDataFromCSV(event: any) {
    let fileContent = await this.getTextFromFile(event);

    this.importedData = this._csvService.importDataFromCSV(fileContent);
  }
  
  private async getTextFromFile(event: any) {
    const file: File = event.target.files[0];

    // console.log("EVENT", file.type); // --> 'text/csv'
    if (file.type != 'text/csv'){
      alert("Please make sure you are uploading file with the extension '.csv'");
      return '';
    } else if (file.size > 2 * 1024) {
      alert(`Your file is too big! Please limit to 2MB or less.`)
      return '';
    }
    
   let fileContent = await file.text();
  //  console.log("CONTENT", fileContent);
    return fileContent;
  }
}
