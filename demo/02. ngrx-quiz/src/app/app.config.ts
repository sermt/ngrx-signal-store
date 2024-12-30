import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { DICTIONARIES_TOKEN } from './tokens/dictionaries.token';
import { DICTIONARIES } from './data/dictionaries';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    { provide: DICTIONARIES_TOKEN, useValue: DICTIONARIES }
  ]
};
