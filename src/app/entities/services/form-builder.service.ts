import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class FormBuilderService {
  constructor(
    private readonly _formBuilder: FormBuilder,
  ) { }
  /**
   * Создаем форму для данных из input для добавления способности
   */
  public get abilityForm() {
    return this._formBuilder.group({
      'ability': [null, [Validators.required]]
    });
  }

  public get heroForm() {
    return this._formBuilder.group({
      'name': [null, [Validators.pattern(/^[а-яА-ЯёЁa-zA-Z ]*$/), Validators.required]],
      'power': [null,[Validators.required, Validators.max(10), Validators.min(1)]],
      'aptitude': [null, [Validators.required]],
      'level': [null, [Validators.required, Validators.max(10), Validators.min(1)]]
    });
  }

  public get sortForm() {
    return this._formBuilder.group({
      'levelFrom': [null],
      'levelTo': [null],
      'aptitude': [null],
      'searchName': [null],
      'sortLevel': [null]
    });
  }
}
