import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kin-ocr';
  public csvArray: string[] = [];
  constructor(private http: HttpClient) {
    of(
      this.http
        .get('assets/sample.csv', { responseType: 'text' })
        .subscribe((data) => {
          this.csvArray = data.split(',');
          console.log(this.csvArray);
        })
    );
  }
}
