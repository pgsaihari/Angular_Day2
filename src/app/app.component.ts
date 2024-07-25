import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { GroundFloorComponent } from "./ground-floor/ground-floor.component";
// import { LivingRoomComponent } from './ground-floor/living-room/living-room.component';
import { FormsModule } from '@angular/forms';
// import { ButtonComponent } from "./button/button.component";
import { CardsComponent } from "./ui/cards/cards.component";
import { NgFor } from '@angular/common';
import { productInterface } from './Interface/productInterface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,FormsModule,  CardsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: productInterface[] = [];
  categories: string[] = [];

  async ngOnInit() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    this.data = data.products;

    // Extract unique categories
    this.categories = [...new Set(this.data.map(product => product.category))];

    console.log(this.data);
  }

  filterData(category: string): any[] {
    if (category) {
      return this.data.filter(product => product.category === category);
    } else {
      return this.data; // If no category is selected, return all data
    }
  }
}
