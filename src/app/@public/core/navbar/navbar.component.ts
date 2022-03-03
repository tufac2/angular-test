import { Component, OnInit } from '@angular/core';
// @ts-ignore
import shopMenuItems from './../../../../assets/@data/shop.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: Array<any> = shopMenuItems;
  constructor(){

  }

  ngOnInit(): void {
  }

}
