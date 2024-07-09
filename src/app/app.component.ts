import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { CoursesComponent } from './features/courses/courses.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { NewsletterComponent } from './features/newsletter/newsletter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CoursesComponent,
    TestimonialsComponent,
    NewsletterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
