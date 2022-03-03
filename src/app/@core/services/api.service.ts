
import gamesItems from './../../../assets/@data/products.json';
import {map} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  protected get() {
    return gamesItems;
  }
}
