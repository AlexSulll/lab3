import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FormBuilderService } from "../../entities/services/form-builder.service";
import { AbilityInterface } from "../../entities/interfaces/ability.interface";
import { HeroInterface } from "../../entities/interfaces/hero.interface";
import { abilityDataService } from "../../entities/services/get-ability.service";
import { heroDataService } from "../../entities/services/hero.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  public searchText: string = "";
  public levelFrom: number | null = null;
  public levelTo: number | null = null;
  public abilityarr: string[] = [];

  constructor(
    private readonly _formBuilderService: FormBuilderService,
    private readonly _abilitiesData: abilityDataService,
    private readonly _heroesData: heroDataService,
  ) {
  }
  public abilityForm: FormGroup = this._formBuilderService.abilityForm;
  public heroForm: FormGroup = this._formBuilderService.heroForm;
  /**
   * Функция для добавления новой способности
   *
   * @public
   */
  public addAbility(): void {
    const value = this.abilityForm.getRawValue();
    if (value) {
      this.abilityData.push(value);
    }
    this.abilityForm.reset();
  }
  public abilityData: AbilityInterface[] = this._abilitiesData.getAbility();
  public heroData: HeroInterface[] = this._heroesData.getHeroes();

  /**
   * Функция для добавления нового героя
   *
   * @public
   */
  public addHero(): void {
    const hero = this.heroForm.getRawValue();
    if (hero) {
      const newHero = {id: (this.heroData[this.heroData.length - 1].id + 1), ...hero}
      this.heroData.push(newHero);
    }
    this.heroForm.reset();
  }

  /**
   * Функция для удаления героя по его id
   *
   * @param {number} id - id героя
   * @public
   */
  public removeHero(id: number): void {
    this.heroData = this.heroData.filter((element: HeroInterface): boolean => element.id !== id);
    this._heroesData.postHeroes(this.heroData);
  }

  /**
   * Функция для сортировки героев по уровню
   *
   * @param {string} value - параметр, который определяется при выборе пользователем в каком порядке выполнить сортировку
   * @public
   */
  public sortData(value: string): void {
    if (value === "1") {
      this.heroData = this.heroData.slice().sort((a: HeroInterface, b: HeroInterface) => a.level - b.level);
    }
    if (value === "0") {
      this.heroData = this.heroData.slice().sort((a: HeroInterface, b: HeroInterface) => b.level - a.level);
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

  public get heroAptitudeControl(): FormControl {
    return this.heroForm.get('aptitude') as FormControl;
  }

  public get heroLevelControl(): FormControl {
    return this.heroForm.get('level') as FormControl;
  }

}
