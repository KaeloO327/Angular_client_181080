import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrerComponent } from './auth/registrer/registrer.component';

const routes: Routes = [
  {
    path : 'login', 
    component : LoginComponent,
    
  },
  {
    path : 'registrer',
    component : RegistrerComponent,
  },
  {
    path : '**',
    redirectTo : 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
