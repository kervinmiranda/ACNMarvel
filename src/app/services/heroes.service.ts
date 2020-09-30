import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Heroe} from '../classes/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public page = 0;
  public step = 20;
  public total = 0;

  private protocol = 'https:';
  private apiUrl = '//gateway.marvel.com:443/v1/public/';
  private auth = 'ts=1&apikey=caa1b17042a63b29ce6637decf40b16c&hash=9344271d59514e7f4a92277d0153a316';
  public heroes: Array<Heroe> = [];

  public group_colors = {"azul" : "#1f8ff7",
            "violeta":"#a43de3",
            "naranjo":"#df5c0f",
            "verde":"#0ea521"}
  
  public teams = new Map();

  constructor(private http: HttpClient) { }

  resetPager() {
    this.page = 0;
  }

  getHeroes (nameStartsWith?: string, page?: number) {
    if (page || page === 0) {
      this.page = page;
    }
    const url = this.protocol + this.apiUrl + 'characters?'+ this.auth 
    + '&offset=' + (this.page * this.step)
    + (nameStartsWith ? ('&nameStartsWith=' + nameStartsWith) : '');
    this.http.get<any>(url).subscribe((data) => {
      this.heroes = [];
      this.total = Math.ceil(data.data.total / this.step);
      data.data.results.forEach( result => {
          this.heroes.push(new Heroe(
            result.id,
            result.name,
            result.description,
            result.modified,
            result.thumbnail,
            result.resourceURI,
            this.getTeamColor(result.id)
          ));
        }
      );
    });
  }

  getHeroe(id) {
    const url = this.protocol + this.apiUrl + 'characters/' + id + '?'+ this.auth;
    return this.http.get<any>(url);
  }

  getTeamColor(id):string{
    if(this.teams.get(id)!=undefined){
    return this.teams.get(id);
    }
    else{
    return "";
    }
}

}
