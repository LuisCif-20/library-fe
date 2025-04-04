import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SidebarOptionsComponent } from 'src/app/shared/components/sidebar-options/sidebar-options.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-library-layout',
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    SidebarOptionsComponent
  ],
  templateUrl: './library-layout.component.html',
  styles: ``
})
export class LibraryLayoutComponent {

  public isOpen = signal<boolean>(false);

}
