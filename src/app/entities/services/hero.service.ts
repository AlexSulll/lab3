import { Injectable } from "@angular/core";
import { heroData } from "../shared/hero-data";
import { HeroInterface } from "../interfaces/hero.interface";

@Injectable({
  providedIn: 'root'
})

export class heroDataService {
  private _heroData: HeroInterface[] = heroData;

  /**
   * Функция которая возвращает состояние массива в данный момент. Создано лишь только для отображения изменений на сайте. Имитация get-запроса
   *
   * @return {HeroInterface[]}
   */
  public getHeroes(): HeroInterface[] {
    return this._heroData;
  }

  /**
   * Функция для записи изменений в массив. Имитация post-запроса.
   *
   * @param {HeroInterface[]} value - новый массив героев
   */
  public postHeroes(value: HeroInterface[]): void {
    this._heroData = value;
  }
}
