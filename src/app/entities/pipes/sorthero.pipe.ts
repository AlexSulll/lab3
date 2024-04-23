import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from "../interfaces/hero.interface";
import {heroDataService} from "../services/hero.service";

@Pipe({
  name: 'sortPipe'
})
export class sortPipe implements PipeTransform {
  constructor(private readonly _heroesData: heroDataService) {
  }
  _heroData: HeroInterface[] = this._heroesData.getHeroes();

  transform(levelFrom?: any, levelTo?: any, aptitude?: any, searchName?: any, sortLevel?: any): HeroInterface[] {
    if (levelFrom == null && levelTo == null && aptitude == null && searchName == null && sortLevel == "1") {
      this._heroData.sort((a: HeroInterface,b: HeroInterface) => {
        return a.level - b.level;
      });
    }
    if (levelFrom == null && levelTo == null && aptitude == null && searchName == null && sortLevel == "0") {
      this._heroData.sort((a: HeroInterface,b: HeroInterface) => {
        const result: number = a.level - b.level;
        return result*-1;
      });
    }
    return this._heroData;
  }
}
