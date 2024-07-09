import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../services/theme.service';
import { AvatarModule, } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MaterialModule } from '../../shared/material.module';
/* export class Menu2 {
  label?: string;
  icon?: string;
  shortcut?: string;
  items?: MenuItem[];
  separator?: boolean;

}
export class  MenuItem  {
  label!: string;
  icon!: string;
  items?: Menu2[];

  badge?: string;

} */

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    AvatarModule,
    BadgeModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    MaterialModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  today: Date = new Date(); // Ajouter cette ligne


  constructor(private themeService: ThemeService) { }
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Browser',
              items : [
                {
                  label: 'Web Development',
                  items: [
                    {
                      label: 'Bootstrap'
                    },
                    {
                      label: 'React'
                    },
                    {
                      label: 'GraphQl'
                    },
                    {
                      label: 'Gatsby'
                    },
                    {
                      label: 'Grunt'
                    },
                    {
                      label: 'Svelte'
                    },
                    {
                      label: 'Meteor'
                    },
                    {
                      label: 'HTML5'
                    },
                    {
                      label: 'Angular'
                    }
                  ]
                },
                {
                  label: 'Design',
                  items: [
                    {
                      label: 'Graphic Design'
                    },
                    {
                      label: 'Illustrator'
                    },
                    {
                      label: 'UX / UI Design'
                    },
                    {
                      label: 'Figma Design'
                    },
                    {
                      label: 'Adobe XD'
                    },
                    {
                      label: 'Sketch'
                    },
                    {
                      label: 'Icon Design'
                    },
                    {
                      label: 'Photoshop'
                    }
                  ]
                },
                {
                  label: 'Mobile App'
                },
                {
                  label:'IT Software'
                },
                {
                label: 'Marketing'
                },
                {
                  label: 'Music'
                },
                {
                  label: 'Life Style'
                },
                {
                  label: 'Business'
                },
                {
                  label: 'Photography'
                }
              ],
              //icon: 'pi pi-home'
          },
          {
              label: 'Landings',
              items: [
                {
                  label: 'Mentor New'
                },
                {
                  label: 'Education'
                },
                {
                  label: 'Home Academy'
                },
                {
                  label: 'Courses'
                },
                {
                  label: 'Lead Course'
                },
                {
                  label: 'Request Access'
                },
                {
                  label: 'SaaS'
                },
                {
                  label: 'Job Listing'
                }

              ]
              //icon: 'pi pi-star'
          },
          {
              label: 'Pages',
              //icon: 'pi pi-search',
              items: [
                  {
                      label: 'Coures',
                      items: [
                        {
                          label: 'Course Single'
                        },
                        {
                          label: 'Course Single v2'
                        },
                        {
                          label: 'Course Resume'
                        },
                        {
                          label: 'Course Category'
                        },
                        {
                          label: 'Course Checkout'
                        },
                        {
                          label: 'Course List/Grid'
                        },
                        {
                          label: 'Add New Course'
                        }
                      ]
                      //icon: 'pi pi-bolt',
                      //shortcut: '⌘+S'
                  },
                  {
                      label: 'path',
                      items: [
                        {
                          label: 'Browse Path'
                        },
                        {
                          label: 'Path Single'
                        }
                      ]
                      /*icon: 'pi pi-server',
                      shortcut: '⌘+B'*/
                  },
                  {
                      label: 'Blog',
                      items: [
                        {
                          label: 'Listing'
                        },
                        {
                          label: 'Article'
                        },
                        {
                          label: 'Category'
                        },
                        {
                          label: 'Sidebar'
                        }
                      ]
                      /*icon: 'pi pi-pencil',
                      shortcut: '⌘+U'*/
                  },
                  {
                    label: 'Career',
                    //icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Overview',
                            /*icon: 'pi pi-palette',
                            badge: '2'*/
                        },
                        {
                            label: 'Listing',
                            /*icon: 'pi pi-palette',
                            badge: '3'*/
                        },
                        {
                          label: 'Opening'
                        }
                    ]
                  },
                  {
                      separator: true
                  },
              ]
          },
          {
            label: 'Account',
            items: [
              {
                label: 'Instructor',
                items: [
                  {
                      label: 'INSTRUCTOR',
                      /*icon: 'pi pi-palette',
                      badge: '2'*/
                  },

              ]
              },
              {
                label: 'Students',
                items: [
                  {
                      label: 'STUDENTS',
                      /*icon: 'pi pi-palette',
                      badge: '2'*/
                  },

              ]
              },
              {
                label: 'Admin',
                items: [
                  {
                      label: 'ADMIN',
                      /*icon: 'pi pi-palette',
                      badge: '2'*/
                  },

              ]
              },
              {
                separator: true
              },

            ]
          },
          {
              label: '...',
              items: [
                {
                  label: 'Documentations',
                  icon: PrimeIcons.PLUS
                },
                {
                  label: 'Snippet',
                  icon: PrimeIcons.BOLT
                },
                {
                  label: 'Changelog v3.2.0',
                  icon: PrimeIcons.CALENDAR
                },
                {
                  label: 'RTL demo',
                  icon: PrimeIcons.CHECK
                }
              ]
              /*icon: 'pi pi-envelope',
              badge: '3'*/
          }
      ];
  }

  toggleTheme() {
    this.themeService.toggleTheme(); // Appeler la méthode du service pour basculer le thème
  }
}
