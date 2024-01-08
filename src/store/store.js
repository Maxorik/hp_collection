import { makeAutoObservable } from "mobx";
import catalog from './catalog_min'

class Collection {
    constructor() {
        makeAutoObservable(this, {}, { deep:false }) // FIXME для "глубокмх" массивов (ключ = объект) использовать deep:true
    }

    collectionList = [];

    /** получаем коллекцию */
    getCatalog() {
        this.collectionList = catalog.filter(item => item.code.match(/hp\d+/) && +item.year > 2017);
    }

    /** Состояние коллекции */
    get checkedItems() {
        return `${ this.collectionList.filter((item) => item.checked === 'true').length }/${ this.collectionList.length }`;
    }

    /** отметить найденный экземпляр */
    setCheck(id, state) {
        // TODO api

        this.collectionList = this.collectionList.map(item => item.code === id ? { ...item, checked: state.toString() } : item );
    }
}

export default new Collection()