import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddBayFormComponent } from './add-bay-form/add-bay-form.component';
import { TestComponent } from './test/test.component';
import { ListBayComponent } from './list-bay/list-bay.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'addBay',component:AddBayFormComponent},
  { path:'testComponent',component:TestComponent},
  { path: 'baylist',component:ListBayComponent},
  { path: 'signUp',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
