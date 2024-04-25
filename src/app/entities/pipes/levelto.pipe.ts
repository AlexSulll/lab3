import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from "../interfaces/hero.interface";

@Pipe({
  name: 'leveltosort'
})
export class LevelToPipe implements PipeTransform {

  public transform(value: HeroInterface[], levelTo:number | null): any {
    if (!value) return null;
    if (!levelTo) return value;
    if (levelTo) {
      return value.filter((item: any) => {
        return item.level <= levelTo;
      });
    }
  }

}
