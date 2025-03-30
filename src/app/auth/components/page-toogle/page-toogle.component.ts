import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from "@angular/core/rxjs-interop";
import { AuthPage } from '../../interfaces/auth.interface';


@Component({
  selector: 'auth-page-toogle',
  imports: [
    RouterLink
  ],
  templateUrl: './page-toogle.component.html',
  styles: ``
})
export class PageToogleComponent {

  private router = inject(Router);

  private route = toSignal(this.router.events);

  private authPage = computed(() => this.returnAuthPage((this.route() as NavigationEnd).url || ''));

  public data = computed(() => this.returnData(this.authPage()));

  constructor() { }

  private returnAuthPage(url: string): AuthPage {
    return url.split('/').at(-1) as AuthPage;
  }

  private returnData(authPage: AuthPage): [string, string, string] {
    switch (authPage) {
      case 'reset-password':
        return ['¿Ya no lo necesitas?', 'sign-in', 'Inicia Sesión'];
      case 'sign-up':
        return ['¿Ya tienes cuenta?', 'sign-in', 'Inicia Sesión'];
      default:
        return ['¿No tienes cuenta?', 'sign-up', 'Registrate'];
    }
  }

}

