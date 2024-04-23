import { Component } from '@angular/core';
import { IColumn } from "../../entities/interfaces/column.interface";
import { COLUMNS_SCHEMA } from "../../entities/shared/columns-data";
import { HeroInterface } from "../../entities/interfaces/hero.interface";
import { heroDataService } from "../../entities/services/hero.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private readonly _heroesData: heroDataService) {
  }
  public displayedColumns: string[] = COLUMNS_SCHEMA.map((colum: IColumn) => colum.key);
  public dataSource: HeroInterface[] = this._heroesData.getHeroes();
  public removeRow(id: number): void {
    this.dataSource = this.dataSource.filter((element: HeroInterface): boolean => element.id !== id);
    this._heroesData.postHeroes(this.dataSource);
  }
}
