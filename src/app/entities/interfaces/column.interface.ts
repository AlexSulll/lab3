/**
 * Интерфейс для столбцов в таблице
 *
 * @param {string} key - ключ
 * @param {string} type - тип
 * @param {string} label - название столбца
 */
export interface IColumn {
  key: string,
  type: string,
  label: string,
}
