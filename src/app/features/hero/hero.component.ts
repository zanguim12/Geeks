import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    PanelModule,
    SplitterModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
