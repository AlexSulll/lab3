import { Component } from '@angular/core';
import { abilityData } from "../../entities/shared/ability-data";
import { FormControl, FormGroup } from "@angular/forms";
import { FormBuilderService } from "../../entities/services/form-builder.service";
import { AbilityInterface } from "../../entities/interfaces/ability.interface";
import { HeroInterface } from "../../entities/interfaces/hero.interface";
import { heroData } from "../../entities/shared/hero-data";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  public abilityForm: FormGroup = this._formBuilderService.abilityForm;
  public heroForm: FormGroup = this._formBuilderService.heroForm;
  constructor(
    private readonly _formBuilderService: FormBuilderService,
  ) {
  }
  public addAbility(): void {
    const value = this.abilityForm.value.ability;
    if (value) {
      this.abilityData = [...this.abilityData, {ability: value}];
    }
  }
  public abilityData: AbilityInterface[] = abilityData;
  public heroData: HeroInterface[] = heroData;
  public addHero(): void {
    const hero = this.heroForm.getRawValue();
    if (hero) {
      const newHero = {id: (this.heroData[this.heroData.length - 1].id + 1), ...hero}
      this.heroData = [...this.heroData, newHero];
      this.heroData = JSON.parse(JSON.stringify(this.heroData));
    }
  }
  public get abilityControl(): FormControl {
    return this.abilityForm.get('ability') as FormControl;
  }
  public get heroNameControl(): FormControl {
    return this.heroForm.get('name') as FormControl;
  }
  public get heroPowerControl(): FormControl {
    return this.heroForm.get('power') as FormControl;
  }
  public get heroAbilityControl(): FormControl {
    return this.heroForm.get('ability') as FormControl;
  }
  public get heroLevelControl(): FormControl {
    return this.heroForm.get('level') as FormControl;
  }
}
