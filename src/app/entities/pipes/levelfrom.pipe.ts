import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from "../interfaces/hero.interface";

@Pipe({
  name: 'levelfromsort'
})

export class LevelFromPipe implements PipeTransform {
  /**
   * Полученный массив изменяем на другой. По полученному уровню выводим героев, которые имеют уровень больше или такой же как полученному
   *
   * @param {HeroInterface[]} value - исходный массив героев
   * @param {number | null} levelFrom - значение уровня
   * @return {HeroInterface[] | null} (выдает ошибку если не any)
   */
  public transform(value: HeroInterface[], levelFrom:number | null): any {
    if (!value) return null;
    if (!levelFrom) return value;
    if (levelFrom) {
      return value.filter((item: any): boolean => {
        return item.level >= levelFrom;
      });
    }
  }
}
