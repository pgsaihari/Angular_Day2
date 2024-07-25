import { Component, Input } from '@angular/core';
import { productInterface } from '../../Interface/productInterface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']  // corrected to styleUrls
})
export class CardComponent {
  @Input() cardDetails: productInterface= {
    category:'Category',
    title: 'Card Title',
    description: 'Card Description',
    images: ['https://picsum.photos/200/300']
  };
}

// Moved interface declaration outside of the component

