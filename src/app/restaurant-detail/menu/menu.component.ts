import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  })
export class MenuComponent implements OnInit {
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {}

  menu: Observable<MenuItem[]>;

  ngOnInit() {
    this.menu = this.restaurantsService.getMenuOfRestaurant(this.route.parent.snapshot.params.id);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
