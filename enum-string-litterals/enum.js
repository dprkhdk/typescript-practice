"use strict";
// Enum — це спеціальний "клас", який представляє групу констант (незмінних змінних).
// Переліки (enums) дозволяють визначити набір іменованих констант, які можна використовувати
// для представлення фіксованого набору пов’язаних значень.
// Вони часто застосовуються для представлення колекції значень,
// які пов’язані між собою і використовуються типобезпечно.
// Enums можуть бути числовими або рядковими. За замовчуванням створюється числовий enum,
// де першому значенню присвоюється 0, а кожному наступному — збільшене на 1 значення.
// Рядкові enum дозволяють явно задавати конкретні рядкові значення для кожного елемента переліку.
console.log('-------------------- Enums --------------------');
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
    DayOfWeek["Sunday"] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));
function isWorkday(day) {
    switch (day) {
        case DayOfWeek.Saturday:
        case DayOfWeek.Sunday:
            return "It's a weekend!";
        default:
            return "It's a workday!";
    }
}
console.log(isWorkday(DayOfWeek.Monday)); // Output: It's a workday!
console.log(isWorkday(DayOfWeek.Saturday)); // Output: It's a weekend!
