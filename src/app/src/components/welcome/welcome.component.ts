import { Component } from '@angular/core';
import { FadeInDirective } from '../directives/animations';
import { MainContainerComponent } from '../layout';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MainContainerComponent, FadeInDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
