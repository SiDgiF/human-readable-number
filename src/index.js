module.exports = function toReadable(number) {
    // 1. добавим первый массив ( 0 - 19)
    const firstArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    // 2. добавим 2й массив (десятки от 20 до 90)
    const secondArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const numberArr = String(number).split('')

    // число преобразовать в строку и использовать разделитель между словами split
    // в массиве нумерация идет с 0
    // 3. Условие первое - всё просто - выборка с первого массива
    if (number <= 19) {
        return firstArr[number]
    }
    // 4. Условие второе - меньше 99 и второе число равно 0 - из numberArr вычитаем 2, чтобы получить первое значение из массива 2
    if (number <= 99 && numberArr[1] === '0') {
        return secondArr[numberArr[0] - 2]
    }
    // 5. Условие третье - меньше или равно 99 - из numberArr вычитаем 2, чтобы получить первое значение из массива 2, второе число из массива 1
    if (number <= 99) {
        return `${secondArr[numberArr[0] - 2]} ${firstArr[numberArr[1]]}`
    }
    // 6. Условие третье - два вторых числа равны 0
    if (number <= 999 && numberArr[1] === '0' && numberArr[2] === '0') {
        return `${firstArr[numberArr[0]]} hundred`
    }
    // 7. Условие четыре -  например число 1 1 7 - выборка из первого массива - порядковый номер (Number) получен из превращения строки в число ( метод Number()), строка получена из превращения строки 1 1 7 , это [0],[1],[2]  в массиве, методом slice выбираем часть строки от 1 до 2 элемента длины строки, метод join убирает пробелы
    if (number <= 999 && numberArr[1] <= '1') {
        return `${firstArr[numberArr[0]]} hundred ${firstArr[Number(numberArr.slice(1, numberArr.length).join(''))]}`
    }
    if (number <= 999 && numberArr[2] === '0') {
        return `${firstArr[numberArr[0]]} hundred ${secondArr[numberArr[1] - 2]}`
    }
    if (number <= 999) {
        return `${firstArr[numberArr[0]]} hundred ${secondArr[numberArr[1] - 2]} ${firstArr[numberArr[2]]}`
    }


}
