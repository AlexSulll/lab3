import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from "../interfaces/hero.interface";

@Pipe({
  name: 'sortPipe',
  standalone: true,
  pure: true
})
export class sortPipe implements PipeTransform {
  public transform(array: HeroInterface[], levelFrom?: any, levelTo?: any, aptitude?: any, searchName?: any, sortLevel?: string): HeroInterface[] {
    if (levelFrom == null && levelTo == null && aptitude == null && searchName == null && sortLevel == "1") {
      array.sort((a: HeroInterface,b: HeroInterface) => {
        return a.level - b.level;
      });
    }
    if (levelFrom == null && levelTo == null && aptitude == null && searchName == null && sortLevel == "0") {
      array.sort((a: HeroInterface,b: HeroInterface) => {
        const result: number = a.level - b.level;
        return result*-1;
      });
    }
    return array;
  }
}
