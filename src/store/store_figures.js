import { makeAutoObservable } from "mobx";
import figures from './catalog_figures'

class Collection {
    constructor() {
        makeAutoObservable(this, {}, { deep:false }) // FIXME для "глубокмх" массивов (ключ = объект) использовать deep:true
    }

    collectionList = [];

    /** получаем коллекцию */
    getCatalog() {
        const localCollection = localStorage.getItem('hp_collection') ? JSON.parse(localStorage.getItem('hp_collection')) : [];

        /** отображаем только новые наборы */
        this.collectionList = figures.filter(item => item.id.match(/hp\d+/))
            .sort((a, b) => a.id > b.id ? -1 : 1);

        /** запрашиваем отмеченные фигурки */
        this.collectionList = this.collectionList.map(item => {
            const newItem = {...item};
            const localItem = localCollection.find(bItem => bItem.id === item.id);
            if (localItem) {
                newItem.checked = localItem.checked;
            }
            return newItem;
        });
    }

    /** Завершенность коллекции */
    get checkedItems() {
        return `${ this.collectionList.filter((item) => item.checked === 'true').length }/${ this.collectionList.length }`;
    }

    get checkedItemsModern() {
        return `${ this.collectionList.filter((item) => item.checked === 'true').length }/${ this.collectionList.filter((item) => +item.year > 2017).length }`;
    }

    /** отметить найденный экземпляр */
    setCheck(id, state) {
        this.collectionList = this.collectionList.map(item => item.id === id ? { ...item, checked: state.toString() } : item );
        this.updateLocalStorage();
    }

    /** Обновить локальный стор */
    updateLocalStorage() {
        const collection = this.collectionList.map(item => {
            return { id: item.id, checked: item.checked }
        } );
        localStorage.setItem('hp_collection', JSON.stringify(collection));
    }

    /** Сбросить локальный стор DEPRECATED*/
    resetLocalStorage() {
        this.collectionList = this.collectionList.map(item => {
            return { ...item, checked: 'false' }
        })

        this.updateLocalStorage();
    }

    /** Получить табличный вид фигурок */
    get tableFigureList() {
        const unicNames = new Map();
        this.collectionList.map(item => {
            if (!unicNames.has(item.name)) {
                unicNames.set(item.name, { name: item.name, count: 1, photo: `catalog_images/${item.id}.png`, checked: item.checked === 'true' ? 1 : 0 });
            } else {
                const prev = unicNames.get(item.name);
                unicNames.set(item.name, { name: prev.name, count: prev.count + 1, photo: prev.photo, checked: item.checked === 'true' ? prev.checked + 1 : prev.checked });
            }
        })

        return Array.from(unicNames.values()).sort((a, b) => a.name > b.name ? 1 : -1);
    }
}

export default new Collection()