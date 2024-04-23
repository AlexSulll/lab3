import { Injectable } from "@angular/core";
import { heroData } from "../shared/hero-data";
import { HeroInterface } from "../interfaces/hero.interface";

@Injectable({
  providedIn: 'root'
})

export class heroDataService {
  private _heroData: HeroInterface[] = heroData;
  public getHeroes(): HeroInterface[] {
    return this._heroData;
  }
  public postHeroes(value: HeroInterface[]): void {
    this._heroData = value;
  }
}
