import { IColumn } from "../interfaces/column.interface";

export const COLUMNS_SCHEMA: IColumn[] = [
  {
    key: "name",
    type: "text",
    label: "Имя"
  },
  {
    key: "level",
    type: "number",
    label: "Уровень"
  },
  {
    key: "power",
    type: "number",
    label: "Сила"
  },
  {
    key: "aptitude",
    type: "text",
    label: "Способности"
  },
  {
    key: "button",
    type: "button",
    label: "Удалить героя"
  }
]
