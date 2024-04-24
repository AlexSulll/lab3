import {Pipe, PipeTransform} from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface";

@Pipe({
  name: 'search',
  standalone: true,
  pure: true
})
export class search implements PipeTransform {
  public transform(value: HeroInterface[], levelFrom:number | null, levelTo: number | null, abilityarr: string[] | null, searchText: string): any {
    if (!value) return null;
    if (!searchText) return value;
    if (searchText) {
      // searchText = searchText.toLowerCase();
      return value.filter((item: any) => {
        return JSON.stringify(item).includes(searchText);
      });
    }
    // if (abilityarr) {
    //   return value.filter((item: any) => {
    //     return JSON.stringify(item).toLowerCase().includes(abilityarr);
    //   });
    // }
    if (levelFrom) {
      return value.filter((item: any) => {
        return JSON.stringify(item).toLowerCase().includes(searchText);
      });
    }
  }
}
