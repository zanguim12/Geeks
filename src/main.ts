/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from './app/core/core.module';

// Bootstrap l'application avec AppComponent et appConfig
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Bootstrap le module principal (AppModule) dynamiquement
//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));
