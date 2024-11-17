import {
  input,
  inject,
  effect,
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

import { iconsPathFfaToken, iconsSuffixFfaToken } from '../../tokens';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ffa-icon',
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './icon.component.scss',
})
export class IconFfaComponent {
  @HostBinding('style.--path') protected pathCssVar = '';
  @HostBinding('style.--color') protected colorCssVar = '';

  public name = input('');
  public color = input('');

  private readonly iconsPathToken = inject(iconsPathFfaToken);
  private readonly iconsSuffixToken = inject(iconsSuffixFfaToken);

  public constructor() {
    effect(() => {
      this.pathCssVar = `url(${this.iconsPathToken}${this.name()}${this.iconsSuffixToken})`;
    });
    effect(() => {
      this.colorCssVar = this.color();
    });
  }
}
