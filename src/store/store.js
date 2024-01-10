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
        this.collectionList = catalog.filter(item => item.code.match(/hp\d+/) && +item.year > 2017);
        this.collectionList.forEach((item, index) => {
            item.checked = item.code === localCollection[index] && localCollection[index].code ? localCollection[index].checked : item.checked;
        })
    }

    /** Состояние коллекции */
    get checkedItems() {
        return `${ this.collectionList.filter((item) => item.checked === 'true').length }/${ this.collectionList.length }`;
    }

    /** отметить найденный экземпляр */
    setCheck(id, state) {
        this.collectionList = this.collectionList.map(item => item.code === id ? { ...item, checked: state.toString() } : item );
        this.updateLocalStorage();
    }

    /** Обновить локальный стор */
    updateLocalStorage() {
        const collection = this.collectionList.map(item => {
            return { code: item.code, checked: item.checked }
        } );
        localStorage.setItem('hp_collection', JSON.stringify(collection));
    }
}

export default new Collection()