import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    TabViewModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    MatCardModule,
    CardModule
  ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  products = [
    {
      name: 'Product 1',
      inventoryStatus: 'ANGULAR',
      image: 'https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg',
      price: 100
    },
    {
      name: 'Product 2',
      inventoryStatus: 'Python',
      image: 'https://geeksui.codescandy.com/geeks/assets/images/course/course-python.jpg',
      price: 200
    },
    {
      name: 'Product 3',
      inventoryStatus: 'GraphQI',
      image: 'https://geeksui.codescandy.com/geeks/assets/images/course/course-graphql.jpg',
      price: 150
    },
    {
      name: 'Product 4',
      inventoryStatus: 'REACT',
      image: 'https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg',
      price: 150
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '560px',
      numVisible: 5,
      numScroll: 5
    }
  ];

  getSeverity(status: string): 'success' | 'warning' | 'danger' | 'info' {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
