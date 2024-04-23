import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FormBuilderService } from "../../entities/services/form-builder.service";
import { AbilityInterface } from "../../entities/interfaces/ability.interface";
import { HeroInterface } from "../../entities/interfaces/hero.interface";
import { abilityDataService } from "../../entities/services/get-ability.service";
import { heroDataService } from "../../entities/services/hero.service";
import { SortInterface } from "../../entities/interfaces/sort.interface";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  public abilityForm: FormGroup = this._formBuilderService.abilityForm;
  public heroForm: FormGroup = this._formBuilderService.heroForm;
  public sortForm: FormGroup = this._formBuilderService.sortForm;
  constructor(
    private readonly _formBuilderService: FormBuilderService,
    private readonly _abilitiesData: abilityDataService,
    private readonly _heroesData: heroDataService,
  ) {
  }
  public addAbility(): void {
    const value = this.abilityForm.getRawValue();
    if (value) {
      this.abilityData.push(value);
    }
    this.abilityForm.reset();
  }
  public abilityData: AbilityInterface[] = this._abilitiesData.getAbility();
  public heroData: HeroInterface[] = this._heroesData.getHeroes();
  public addHero(): void {
    const hero = this.heroForm.getRawValue();
    if (hero) {
      const newHero = {id: (this.heroData[this.heroData.length - 1].id + 1), ...hero}
      this.heroData.push(newHero);
    }
    this.heroForm.reset();
  }
  public removeHero(id: number): void {
    this.heroData = this.heroData.filter((element: HeroInterface): boolean => element.id !== id);
    this._heroesData.postHeroes(this.heroData);
  }
  public sortGroup() {
    return this.sortForm.getRawValue();
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
  public get heroAptitudeControl(): FormControl {
    return this.heroForm.get('aptitude') as FormControl;
  }
  public get heroLevelControl(): FormControl {
    return this.heroForm.get('level') as FormControl;
  }
  public get levelFromControl(): FormControl {
    return this.sortForm.get('levelFrom') as FormControl;
  }
  public get levelToControl(): FormControl {
    return this.sortForm.get('levelTo') as FormControl;
  }
  public get aptitudeControl(): FormControl {
    return this.sortForm.get('aptitude') as FormControl;
  }
  public get searchNameControl(): FormControl {
    return this.sortForm.get('searchName') as FormControl;
  }
  public get sortLevelControl(): FormControl {
    return this.sortForm.get('sortLevel') as FormControl;
  }
}
