import { Pipe, PipeTransform } from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface";

@Pipe({
  name: 'abilitysort'
})
export class AbilitysortPipe implements PipeTransform {

  public transform(value: HeroInterface[], abilityarr: string[]): any {
    if (!value) return null;
    if (abilityarr.length == 0) return value;
    if (abilityarr) {
      return value.filter((item: any) => item.aptitude.some((aptitude: any) => abilityarr.includes(aptitude)))
    }
  }
}
