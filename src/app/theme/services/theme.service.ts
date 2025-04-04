import { computed, Injectable, signal } from '@angular/core';
import { Theme } from '../interfaces/theme.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkTheme = signal<boolean>(false);

  public theme = computed<Theme>(() => {
    const isDarkTheme = this.isDarkTheme();
    return {
      icon: isDarkTheme ? 'light_mode' : 'dark_mode',
      label: isDarkTheme ? 'Modo Claro' : 'Modo Oscuro'
    }
  });

  constructor() { }

  public toggleTheme(): void {
    this.isDarkTheme.update((value) => !value);
    localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme(): void {
    const body: HTMLElement = document.body;
    this.isDarkTheme() ? body.setAttribute('data-theme', 'dark') : body.setAttribute('data-theme', 'light');
  }

  public loadUserTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme.set(
      savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    this.updateTheme();
  }

}
