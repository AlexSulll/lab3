import { Component } from '@angular/core';
import { IColumn } from "../../entities/interfaces/column.interface";
import { COLUMNS_SCHEMA } from "../../entities/shared/columns-data";
import { heroData } from "../../entities/shared/hero-data";
import {HeroInterface} from "../../entities/interfaces/hero.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public displayedColumns: string[] = COLUMNS_SCHEMA.map((colum: IColumn) => colum.key);
  public dataSource: any = heroData;
  public removeRow(id: number): void {
    this.dataSource = this.dataSource.filter((element: HeroInterface) => element.id !== id);
  }
}
