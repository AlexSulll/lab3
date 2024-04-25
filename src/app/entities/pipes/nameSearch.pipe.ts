import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from "../interfaces/hero.interface";

@Pipe({
  name: 'search'
})

export class Search implements PipeTransform {
  /**
   * Полученный массив изменяем на другой. По полученному имени выводим героев
   *
   * @param {HeroInterface[]} value - исходный массив
   * @param {string} searchText - имя которое мы ищем
   * @return {HeroInterface[] | null}  (выдает ошибку если не any)
   */
  public transform(value: HeroInterface[], searchText: string): any {
    if (!value) return null;
    if (!searchText) return value;
    if (searchText) {
      return value.filter((item: any) => {
        return item.name.includes(searchText);
      });
    }
  }
}
