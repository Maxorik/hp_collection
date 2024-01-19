import { makeAutoObservable } from "mobx";
import catalog from './catalog_min'

class Collection {
    constructor() {
        makeAutoObservable(this, {}, { deep:false }) // FIXME для "глубокмх" массивов (ключ = объект) использовать deep:true
    }

    collectionList = [];

    /** получаем коллекцию */
    getCatalog() {
        const localCollection = localStorage.getItem('hp_collection') ? JSON.parse(localStorage.getItem('hp_collection')) : [];

        /** отображаем только новые наборы */
        this.collectionList = catalog.filter(item => item.id.match(/hp\d+/));

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

    /** Сбросить локальный стор */
    resetLocalStorage() {
        this.collectionList = this.collectionList.map(item => {
            return { ...item, checked: 'false' }
        })

        this.updateLocalStorage();
    }
}

export default new Collection()