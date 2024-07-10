import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CsvService } from './services/csv.services';
import { By } from '@angular/platform-browser';
import { OCR } from './models/OCR';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [CsvService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'kin-ocr' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kin-ocr');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, Kin OCR'
    );
  });


  
  it('should correctly read a .csv file', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'sample.csv'))

    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;

    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));

    fixture.detectChanges();

    expect(app.importData).toBeTruthy()
    // expect(app.importDataFromCSV).toBe('sample.csv')
  });

  it('should correctly throw error for non .csv file', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'angular.json'))

    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;
    
    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));
    
    fixture.detectChanges();
    // console.log((app.importData));

    expect(() => app.importData).toThrow(new Error("WRONG FILE TYPE"));
    // expect(app.importDataFromCSV).toBe('sample.csv')
  })

  /*
  TESTS TO ADD
  reads CSV correctly
  ensures max file size
  checksum catches both correct and incorrect results
  
  
  */
});
