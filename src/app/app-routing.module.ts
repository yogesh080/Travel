import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetallStateComponent } from './components/getall-state/getall-state.component';
import { LoginsComponent } from './components/logins/logins.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginsComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'varify-email', component: VerifyEmailComponent },
  // {path:'display', component:GetallStateComponent},

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/display', pathMatch: 'full' },
      { path: 'display', component:GetallStateComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
