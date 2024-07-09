import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './courses/courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsletterComponent } from './newsletter/newsletter.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroComponent,
    CoursesComponent,
    TestimonialsComponent,
    NewsletterComponent
  ],
  exports: [
    HeroComponent,
    CoursesComponent,
    TestimonialsComponent,
    NewsletterComponent
  ]
})
export class FeaturesModule { }
