import { NgModule } from '@angular/core';
import { IconCamera, IconHeart, IconGithub, IconInfo, IconLogOut, IconShare, IconAlertTriangle, IconInbox, IconClock, IconChevronDown } from 'angular-feather';

const icons = [
  IconCamera,
  IconHeart,
  IconGithub,
  IconInfo,
  IconLogOut,
  IconShare,
  IconAlertTriangle,
  IconInbox,
  IconClock,
  IconChevronDown
];

@NgModule({
  exports: icons
})
export class IconsModule { }
