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
        addBtn: 'В коллекцию',
        removeBtn: 'Из коллекции',
        closeBtn: 'Закрыть',
        year: 'Год',
        includeIn: 'Встречается в',
        inCollection: 'В коллекции',
        yes: 'Да',
        no: 'Нет'
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
        addBtn: 'Got it!',
        removeBtn: 'Remove',
        closeBtn: 'Close',
        year: 'Year of release',
        includeIn: 'It\'s found in',
        inCollection: 'In the collection',
        yes: 'Yes',
        no: 'No',
        nonameFigure: 'Stranger',
    }
}

export { locale, lang };