import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DemographicPageComponent } from './demographic-page/demographic-page.component';
import { PipeAndDirectiveComponent } from './pipe-and-directive/pipe-and-directive.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'Login', component: LoginPageComponent },
    { path: 'Demographic', component: DemographicPageComponent },
    { path: 'Pipe&Directives', component: PipeAndDirectiveComponent },
    { path: 'Dashboard', component: DashboardComponent},
];
