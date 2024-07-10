import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { MatCardModule } from '@angular/material/card';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    PanelModule,
    AvatarModule,
    ButtonModule,
    MenuModule,
    CommonModule,
    CardModule,
    MatCardModule,
    CommonModule,
    TabViewModule,
    CarouselModule,
    TagModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    AvatarGroupModule,
    DividerModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  items: { label?: string; icon?: string; separator?: boolean }[] = [];

  Products: any[] = []; // Initialisation du tableau de produits

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '1220px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '1100px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit() {
      this.items = [
          {
              label: 'Refresh',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Search',
              icon: 'pi pi-search'
          },
          {
              separator: true
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];

      this.Products = [
        {
          name: 'Product 1',
          inventoryStatus: 'INSTOCK',
          image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-1.jpg',
          price: 100,
          description: "Praesent sit amet ornare magna, vitae consequat arcu. Vestibulum at dictum erat, a fringilla ante. Nam et nibh ut nunc rutrum suscipit quis non neque. Nulla facilisi."
        },
        {
          name: 'Product 2',
          inventoryStatus: 'LOWSTOCK',
          image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-2.jpg',
          description: "Praesent sit amet ornare magna, vitae consequat arcu. Vestibulum at dictum erat, a fringilla ante. Nam et nibh ut nunc rutrum suscipit quis non neque. Nulla facilisi.",
          price: 150
        },
        {
          name: 'Product 3',
          inventoryStatus: 'OUTOFSTOCK',
          image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-3.jpg',
          price: 200,
          description: "Praesent sit amet ornare magna, vitae consequat arcu. Vestibulum at dictum erat, a fringilla ante. Nam et nibh ut nunc rutrum suscipit quis non neque. Nulla facilisi.",

        },
        {
          name: 'Product 4',
          inventoryStatus: 'OUTOFSTOCK',
          image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-4.jpg',
          price: 200,
          description: "Praesent sit amet ornare magna, vitae consequat arcu. Vestibulum at dictum erat, a fringilla ante. Nam et nibh ut nunc rutrum suscipit quis non neque. Nulla facilisi.",

        },
        {
          name: 'Product 5',
          inventoryStatus: 'OUTOFSTOCK',
          image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-4.jpg',
          price: 200,
          description: "Praesent sit amet ornare magna, vitae consequat arcu. Vestibulum at dictum erat, a fringilla ante. Nam et nibh ut nunc rutrum suscipit quis non neque. Nulla facilisi.",

        }
      ];
  }

  getSeverity(status: string) {
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
