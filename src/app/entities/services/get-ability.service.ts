import { Injectable } from "@angular/core";
import { abilityData } from "../shared/ability-data";
import { AbilityInterface } from "../interfaces/ability.interface";

@Injectable({
  providedIn: 'root'
})

export class abilityDataService {
  private readonly _abilityData: AbilityInterface[] = abilityData;
  public getAbility(): AbilityInterface[] {
    return this._abilityData;
  }
}
