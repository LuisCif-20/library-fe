import { Component, computed, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/auth/store/auth.store';
import { AlertService } from '../../services/alert.service';
import { librarianSidebarOptions, sharedSidebarOptions, studentSidebarOptions } from '../../static/sidebar-options.static';
import { HoverStyleDirective } from '../../directives/hover-style.directive';

@Component({
  selector: 'sidebar-options',
  imports: [
    HoverStyleDirective
  ],
  templateUrl: './sidebar-options.component.html',
  styles: ``
})
export class SidebarOptionsComponent {

  public closeSidebar = output<void>();

  private router = inject(Router);
  private authStore = inject(AuthStore);
  private alertService = inject(AlertService);

  public user = computed(() => this.authStore.user());

  public sidebarOptions = computed(() => {
    const user = this.authStore.user();
    if (!user) return sharedSidebarOptions;
    if (user!.role.name === 'LIBRARIAN') return librarianSidebarOptions;
    return studentSidebarOptions;
  })

  constructor() { }

  public redirectTo(route: string): void {
    this.router.navigateByUrl(route);
    this.closeSidebar.emit();
  }

  public handleAuth(): void {
    if (!this.user()) {
      this.router.navigateByUrl('/auth');
      return;
    }
    this.authStore.logout().subscribe({
      next: () => {
        this.alertService.showAlert('Hasta pronto!!!', 'success');
        this.router.navigateByUrl('/');
        this.closeSidebar.emit();
      }
    });
  }

}
