import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private overlayContainer: OverlayContainer) { }

  toggleTheme() {
    const isDark = this.overlayContainer.getContainerElement().classList.contains('dark-theme');
    this.overlayContainer.getContainerElement().classList.toggle('dark-theme', !isDark);
    this.overlayContainer.getContainerElement().classList.toggle('light-theme', isDark);
  }
}
