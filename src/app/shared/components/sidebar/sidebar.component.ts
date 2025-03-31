import { Component, computed, inject, input } from '@angular/core';
import { environment } from '@envs/environment';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { ThemeSwitcherComponent } from 'src/app/theme/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    ThemeSwitcherComponent
  ],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  public isOpen = input.required<boolean>();

  private readonly awsUrl = environment.AWS_URL;

  private configurationService = inject(ConfigurationService);

  public logo = computed(() => `${this.awsUrl}/${this.configurationService.configuration()!.logo}`);

}
