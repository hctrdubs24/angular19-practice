import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SocialMediaElement } from '../models';

@Component({
  selector: 'app-social-media-element',
  standalone: true,
  imports: [MatTooltipModule, NgOptimizedImage],
  templateUrl: './social-media-element.component.html',
  styleUrl: './social-media-element.component.scss',
})
export class SocialMediaElementComponent {
  @Input() socialMediaElement: SocialMediaElement = {
    id: 0,
    name: '',
    link: '',
    imgPath: '',
  };
}
