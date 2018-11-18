import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from '../../restaurants/restaurants.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  })
export class ReviewsComponent implements OnInit {
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {}

  reviews: Observable<any>;

  ngOnInit() {
    this.reviews = this.restaurantsService.getReviewsOfRestaurant(
      this.route.parent.snapshot.params.id,
    );
  }
}
