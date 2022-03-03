import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit{

  @Input() innerItem: any;
  @Output() itemSelected = new EventEmitter<any>();

  gameTest =
    {
      "id": "5286",
      "slug": "tomb-raider",
      "name": "Cámara Vigilancia exterior",
      "img": "https://images-na.ssl-images-amazon.com/images/I/617vwwRUM0L._AC_SL1500_.jpg",
      "stock": 123,
      "price": 50,
      "rating": {
        "value": 4.07,
        "count": 2056
      },
      "qty": 1,
      "description": "Juego de test"
    }

  constructor(private router: Router) { }

  ngOnInit(): void {}

  handleItemSelected($event: any) {
    this.itemSelected.emit($event);
  }

  addProduct(product: any) {

  }
}
