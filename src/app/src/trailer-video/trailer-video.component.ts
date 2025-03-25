import { Component } from '@angular/core';
import { IframeVideoComponent, MainContainerComponent } from '../components';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [MainContainerComponent, IframeVideoComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss',
})
export class TrailerVideoComponent {
  videoSrc = 'https://www.youtube.com/embed/WYRHvPv7xyE?si=clmDNMNtYs8-tkSL';
}
