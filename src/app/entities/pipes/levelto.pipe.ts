import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from "../interfaces/hero.interface";

@Pipe({
  name: 'leveltosort'
})

export class LevelToPipe implements PipeTransform {
  /**
   * Полученный массив изменяем на другой. По полученному уровню выводим героев, которые имеют уровень меньше или такой же как полученному
   *
   * @param {HeroInterface[]} value - исходный массив героев
   * @param {number | null} levelTo - значение уровня
   * @return {HeroInterface[] | null} (выдает ошибку если не any)
   */
  public transform(value: HeroInterface[], levelTo:number | null): any {
    if (!value) return null;
    if (!levelTo) return value;
    if (levelTo) {
      return value.filter((item: any): boolean => {
        return item.level <= levelTo;
      });
    }
  }

}
