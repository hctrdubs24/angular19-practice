import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-video',
  standalone: true,
  imports: [],
  templateUrl: './iframe-video.component.html',
  styleUrl: './iframe-video.component.scss',
})
export class IframeVideoComponent {
  /**
   * * Organización de unidades lógicas:
   *  - injectables (servicios)
   *  - decoradores
   *  - propiedades (privadas y públicas)
   */
  domSanitizer = inject(DomSanitizer);

  @Input() set videoSrc(value: string) {
    this._videoSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
  _videoSrc: SafeResourceUrl = '';
}
/**
   * Alternativa @Input() videoSrc: string = '';
   * 
   * ngOnChanges(changes: SimpleChanges): void {
        if (changes[videoSrc]) { 
          this._videoSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(changes.videoSrc);
        } 
    } 
   */
