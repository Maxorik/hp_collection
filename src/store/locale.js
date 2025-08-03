const locale = navigator.language === 'ru' ? 'ru' : 'en';

const lang = {
    ru: {
        filterName: 'Найти по названию (англ.)',
        nameTip: 'Введите имя фигурки',
        filterYear: 'Найти по году',
        yearTip: 'Введите год выпуска',
        filterCode: 'Найти по коду набора',
        codeTip: 'Введите код набора',
        showCheckedTip: 'Показывать отмеченные фигурки',
        showOnlynewTip: 'Показывать только новые (с 2018 г.)',
        discardBtn: 'Сбросить коллекцию',
        nonameFigure: 'Незнакомец',
        addBtn: 'Добавить в коллекцию',
        addBtnMini: 'В коллекцию',
        removeBtn: 'Убрать из коллекции',
        closeBtn: 'Закрыть',
        year: 'Год',
        name: 'Имя',
        set: 'Набор',
        includeIn: 'Встречается в',
        inCollection: 'В коллекции',
        yes: 'Да',
        no: 'Нет',
        searchTitle: 'Поиск по коллекции',
        view: 'Вид'
    },
    en: {
        filterName: 'Search by name',
        nameTip: 'Enter a name for the figure',
        filterYear: 'Search by year',
        yearTip: 'Enter the year of production',
        filterCode: 'Search by set code',
        codeTip: 'Enter the set code',
        showCheckedTip: 'Show the marked figures',
        showOnlynewTip: 'Showing only new (from 2018 year)',
        discardBtn: 'Reset collection',
        addBtnMini: 'Got it!',
        addBtn: 'Add to collection',
        removeBtn: 'Remove from collection',
        closeBtn: 'Close',
        year: 'Year',
        name: 'Name',
        set: 'Set',
        includeIn: 'It\'s found in',
        inCollection: 'In the collection',
        yes: 'Yes',
        no: 'No',
        nonameFigure: 'Stranger',
        searchTitle: 'Search by collection',
        view: 'View'
    }
}

export { locale, lang };