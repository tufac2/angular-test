import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})

export class GamesService extends ApiService {
  getGames() {
    return this.get();
  }
}
