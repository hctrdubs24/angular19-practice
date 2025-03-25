import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialMediaComponent } from './src/social-media/social-media.component';
import { ToolbarComponent } from './src/toolbar/toolbar.component';
import { TrailerVideoComponent } from './src/trailer-video';
import { WelcomeComponent } from './src/welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    WelcomeComponent,
    SocialMediaComponent,
    TrailerVideoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_practice';
}
