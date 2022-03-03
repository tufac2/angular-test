import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../../@core/services/games.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  items:Array<any> = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.items = this.gamesService.getGames();
    console.log(this.items);
  }
}
