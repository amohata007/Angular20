import { Routes } from '@angular/router';
import { Admin } from '../Components/admin/admin';
import { SignalEx } from '../Components/signal-ex/signal-ex';
import { Control } from '../Components/control/control';
import { User } from '../Components/user/user';
import { Directive } from '../Components/directive/directive';

export const routes: Routes = [
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: 'signal',
    component: SignalEx,
  },
  {
    path: 'control',
    component: Control,
  },
  {
    path: 'user',
    component: User,
  },
  {
    path: 'directive',
    component: Directive,
  },
];
