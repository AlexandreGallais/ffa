import {
  ChangeDetectionStrategy,
  Component,
  effect,
  HostBinding,
  inject,
  input,
} from '@angular/core';

import { ffaIconsToken } from '../../tokens';

@Component({
  selector: 'ffa-icon',
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FfaIconComponent {
  @HostBinding('style.--ffa-icon-path') protected pathCssVar?: string;
  @HostBinding('style.--ffa-icon-color') protected colorCssVar?: string;
  @HostBinding('style.--ffa-icon-size.px') protected sizeCssVar?: number;

  public name = input<string>();
  public color = input<string>();
  public size = input<number>();

  private readonly iconsToken = inject(ffaIconsToken);

  public constructor() {
    effect(() => {
      this.pathCssVar =
        this.name() === undefined
          ? undefined
          : `url(${this.iconsToken.path}${this.name()}${this.iconsToken.suffix})`;
    });
    effect(() => {
      this.colorCssVar = this.color();
    });
    effect(() => {
      this.sizeCssVar = this.size();
    });
  }
}
