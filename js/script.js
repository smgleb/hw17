// N.17 Домашнее задание ES6_INTRO
// Постарайтесь использовать во время написания кода возможности из стандарта ES6. Переменные let, const; деструктуризация, spread-оператор там где это возможно. Не обязательно в каждой функции это будет использоваться все в месте.

// 1.  Напишите функцию для склеивания подмассивов в один массив. (Предположим, что в прототипе массива есть метод .flat (), но мы его не знаем). Другими словами, нужно преобразовать это: [[1, 2], [3, 4]] в [1, 2, 3, 4].

// flatten([[1, 2], [3, 4]]) ➞ [1, 2, 3, 4]
// flatten([["a", "b"], ["c", "d"]]) ➞ ["a", "b", "c", "d"]
// flatten([[true, false], [false, false], [true, true] ]) ➞ [true, false, false, false, true, true]


function flatten([arr, ...REST]) {

	let [arrRes, arr1] = [[], [arr, ...REST]];

	// Любое количество аргументов в функции
	for (let i = 0; i < arr1.length; i++) {
		arrRes.push(...arr1[i])
	}
	console.log(arrRes);
}
flatten([[true, false], [false, false], [true, true], [true, true], [true, true], [true, true], [true, true]]);
flatten([[1, 2], [3, 4]])
flatten([["a", "b"], ["c", "d"]])

// 2. Для объекта людей и их возраста верните, сколько лет будет людям по прошествии n лет. Используйте абсолютное значение n(т.е. больше 0).
// afterNYears({  "Joel" : 32,  "Fred" : 44,  "Reginald" : 65,  "Susan" : 33,  "Julian" : 13}, 1) ➞ {  "Joel" : 33,  "Fred" : 45,  "Reginald" : 66,  "Susan" : 34,  "Julian" : 14}

// afterNYears({  "Baby" : 2,  "Child" : 8,  "Teenager" : 15,  "Adult" : 25,  "Elderly" : 71}, 19) ➞ {  "Baby" : 21,  "Child" : 27,  "Teenager" : 34,  "Adult" : 44,  "Elderly" : 90}
// afterNYears({  "Genie" : 1000,  "Joe" : 40}, 5) ➞ {  "Genie" : 1005,  "Joe" : 45}

// function afterNYears(obj, age) {

// 	for (let key in obj) {
// 		if (age > 0) {
// 			obj[key] += age;
// 		}

// 	}

// 	console.log(obj)
// }
function afterNYears(obj, age) {

	for (let key in obj) {
		if (age > 0) {
			obj[key] += age;
		}

	}

	console.log(obj)
}

afterNYears({ "Joel": 32, "Fred": 44, "Reginald": 65, "Susan": 33, "Julian": 13 }, 1);
afterNYears({ "Baby": 2, "Child": 8, "Teenager": 15, "Adult": 25, "Elderly": 71 }, 19);
afterNYears({ "Genie": 1000, "Joe": 40 }, 5);


// 3. Создайте функцию, которая возвращает true, если меньшие массивы могут объединяться для формирования целевого массива, и false в противном случае.
// canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false//  Повторяющиеся семерки не найдены в целевом массиве.
// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false// Отсутствует 6 в целевом массиве.

function canConcatenate([arr, ...REST], compare) {

	let [arrRes, arr1] = [[], [arr, ...REST]];

	// Любое количество аргументов в функции
	for (let i = 0; i < arr1.length; i++) {
		arrRes.push(...arr1[i])
	}
	// сравниваем
	if (arrRes.sort((a, b) => a - b).join() == compare.sort((a, b) => a - b).join()) {
		return true;
	} else {
		return false;
	}

}

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]));
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]));
console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]));



