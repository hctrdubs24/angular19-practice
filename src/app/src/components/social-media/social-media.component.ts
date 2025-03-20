import { Component } from '@angular/core';
import { WobbleDirective } from '../directives/animations';
import { MainContainerComponent } from '../layout';
import { SocialMediaElement } from './models';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    SocialMediaElementComponent,
    MainContainerComponent,
    WobbleDirective,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {
  socialMediaList: SocialMediaElement[] = [
    {
      id: 1,
      name: 'Facebook',
      link: 'https://www.facebook.com/',
      imgPath:
        'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    },
    {
      id: 3,
      name: 'Instagram',
      link: 'https://www.instagram.com/',
      imgPath:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    },
    {
      id: 4,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/',
      imgPath:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    },
    {
      id: 5,
      name: 'Pinterest',
      link: 'https://www.pinterest.com/',
      imgPath:
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
    },
  ];
}
