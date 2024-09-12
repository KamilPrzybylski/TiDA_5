/**
 * Funkcja porównująza liczbę zadań do zrobienia z liczbą zadań zrobionych
 * @param {number} to_do liczba zadań do zrobienia
 * @param {number} done liczba zadań zrobionych
 * @throws Error gdy zmienna `to_do` lub zmienna `done` nie jest dodatnia
 * @returns {boolean} `true` gdy `to_do` jest większe niż `done` w przeciwnym przypadku zwraca `false`
 * @example
 * const to_do = 2;
 * const done = 3;
 *
 * const igt = isGreaterThan(to_do, done);
 * console.log(igt);
 *
 * //logs: false
 *
 * @author Kamil Przybylski 5D
 */

function isGreaterThan(to_do, done) {
    if(to_do <= 0 || done <= 0) {
        throw new Error("Nie można mieć ujemnych zadań")
    }
    else {
        if(to_do > done) {
            return true;
        }
        else {
            return false;
        }
    }
}