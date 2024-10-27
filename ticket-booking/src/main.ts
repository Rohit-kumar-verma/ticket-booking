import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // Import standalone component

bootstrapApplication(AppComponent, appConfig) // Bootstrap directly
  .catch((err) => console.error(err));
