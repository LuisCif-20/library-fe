import { Component, computed, inject, output } from '@angular/core';
import { environment } from '@envs/environment';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { ThemeSwitcherComponent } from 'src/app/theme/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-navbar',
  imports: [
    ThemeSwitcherComponent
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  public openSidebar = output<void>();

  private readonly awsUrl = environment.AWS_URL;

  private configurationService = inject(ConfigurationService);

  public logo = computed(() => `${this.awsUrl}/${this.configurationService.configuration()!.logo}`)
  public name = computed(() => this.configurationService.configuration()!.name);

}
