import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient} from '@angular/common/http';

import { routes } from './app.routes';
import { CsvService } from './services/csv.services';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), CsvService]
};
