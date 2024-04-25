import { Pipe, PipeTransform } from '@angular/core';
import { HeroInterface } from "../interfaces/hero.interface";

@Pipe({
  name: 'abilitysort'
})

export class AbilitysortPipe implements PipeTransform {
  /**
   * Полученный массив изменяем на другой. Производится проверка на наличие способности у героя из полученного массива способностей
   *
   * @param {object[]} value - исходный массив героев
   * @param {string[]} abilityarr - массив со способностями, выбранными пользователем
   * @return {HeroInterface[] | null} (выдает ошибку если не any)
   */
  public transform(value: HeroInterface[], abilityarr: string[]): any {
    if (!value) {
      return null;
    }
    if (abilityarr.length == 0) {
      return value;
    }
    if (abilityarr) {
      return value.filter((item: any) => item.aptitude.some((aptitude: any) => abilityarr.includes(aptitude)));
    }
  }
}
