import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService) { }

  restaurant; Restaurant;

  ngOnInit() {
    this.restaurantsService.getRestaurantById('').subscribe(restaurant => this.restaurant = restaurant);
  }

}
