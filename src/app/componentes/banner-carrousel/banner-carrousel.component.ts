import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-banner-carrousel',
  imports: [NgbCarouselModule],
  templateUrl: './banner-carrousel.component.html',
  styleUrl: './banner-carrousel.component.css'
})
export class BannerCarrouselComponent {
  images = ['fig1.jpg', 'fig2.jpg', 'fig3.jpg'].map((n) => `/img/${n}`);
 

}
