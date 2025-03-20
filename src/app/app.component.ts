import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialMediaComponent } from './src/components/social-media/social-media.component';
import { ToolbarComponent } from './src/components/toolbar/toolbar.component';
import { WelcomeComponent } from './src/components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    WelcomeComponent,
    SocialMediaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_practice';
}
