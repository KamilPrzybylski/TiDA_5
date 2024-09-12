/**
 * Funkcja obliczająca pole równoległoboku o podanych wymiarach
 * @param {number} a Podstawa równoległoboku
 * @param {number} h Wysokość równoległoboku
 * @throws Error kiedy zmienna `a` lub zmienna `h` nie ma wartości dodatniej
 * @returns {number} Obliczone pole równoległoboku
 * @example
 * const a = 10;
 * const h = 3;
 *
 * const pole = calculateParallelogramArea(a, h);
 * console.log(pole);
 *
 * //logs: 30
 *
 * @author Kamil Przybylski 5D
 */

function calculateParallelogramArea(a, h){
    if(a <= 0 || h <= 0){
        throw new Error("Obie długości muszą być dodatnie")
    }
    else {
        return a * h;
    }
}