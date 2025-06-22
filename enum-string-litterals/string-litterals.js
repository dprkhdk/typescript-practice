"use strict";
// Enums vs String Literals:
// Enums створюють окрему сутність у згенерованому JavaScript-коді,
// що додає зайвий код та ускладнює читання.
// Натомість, string literal union types (наприклад: "success" | "error" | "loading")
// не створюють додаткових об'єктів у JS — це лише типова перевірка під час компіляції.
//
// Переваги літералів:
// ✅ Краще автодоповнення та читабельність
// ✅ Легше налагоджувати (у консоль одразу видно звичні рядки)
// ✅ Немає додаткового JS-коду
//
// Enums доцільно використовувати, коли:
// - значення числові або потрібні автоінкременти
// - потрібен доступ до списку значень як до об'єкта
// - потрібно зберігати значення в базі або працювати з API, яке використовує enum-подібні значення
console.log('-------------------- String Literals --------------------');
function isWorkdayLitteral(day) {
    switch (day) {
        case "Saturday":
        case "Sunday":
            return "It's a weekend!";
        default:
            return "It's a workday!";
    }
}
console.log(isWorkdayLitteral("Monday")); // Output: It's a workday!
console.log(isWorkdayLitteral("Saturday")); // Output: It's a weekend!
