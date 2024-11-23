import { InjectionToken } from '@angular/core';

export interface FfaIconsToken {
  path: string;
  suffix: string;
}

export const ffaIconsToken = new InjectionToken<FfaIconsToken>('ffaIconsToken');
