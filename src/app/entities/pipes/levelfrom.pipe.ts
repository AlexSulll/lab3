import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from "../interfaces/hero.interface";

@Pipe({
  name: 'levelfromsort'
})
export class LevelFromPipe implements PipeTransform {

  public transform(value: HeroInterface[], levelFrom:number | null): any {
    if (!value) return null;
    if (!levelFrom) return value;
    if (levelFrom) {
      return value.filter((item: any) => {
        return item.level >= levelFrom;
      });
    }
  }
}
