import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';
import { AvatarModule, } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';



@Component({
  selector: 'app-newsletter',
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
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    SplitterModule
  ],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']  // Utilisation de styleUrls pour inclure le fichier de style
})
export class NewsletterComponent implements OnInit {
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
    // Exemple de données pour les produits
    this.Products = [
      {
        name: 'Product 1',
        inventoryStatus: 'INSTOCK',
        image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-1.jpg',
        price: 100
      },
      {
        name: 'Product 2',
        inventoryStatus: 'LOWSTOCK',
        image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-2.jpg',
        price: 150
      },
      {
        name: 'Product 3',
        inventoryStatus: 'OUTOFSTOCK',
        image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-3.jpg',
        price: 200
      },
      {
        name: 'Product 4',
        inventoryStatus: 'OUTOFSTOCK',
        image: 'https://geeksui.codescandy.com/geeks/assets/images/instructor/instructor-img-4.jpg',
        price: 200
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
