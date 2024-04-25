/**
 * Интерфейс для героя
 *
 * @param {number} id - id
 * @param {string | null} - name - имя героя
 * @param {number | null} - power - сила героя
 * @param {string[] | null} - aptitude - способности героя
 * @param {number} - level - уровень героя
 */
export interface HeroInterface {
  id: number,
  name: string | null,
  power: number | null,
  aptitude: string[] | null,
  level: number,
}
