import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./login-page/login-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginPageComponent, RouterLink]
})
export class AppComponent {
  title = 'workshop-2-3';
}
