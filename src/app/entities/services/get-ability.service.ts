import { Injectable } from "@angular/core";
import { abilityData } from "../shared/ability-data";
import { AbilityInterface } from "../interfaces/ability.interface";

@Injectable({
  providedIn: 'root'
})

export class abilityDataService {
  private readonly _abilityData: AbilityInterface[] = abilityData;

  /**
   * Функция которая возвращает состояние массива в данный момент. Создано лишь только для отображения изменений на сайте.
   *
   * @return {AbilityInterface[]}
   */
  public getAbility(): AbilityInterface[] {
    return this._abilityData;
  }
}
