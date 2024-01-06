import { makeAutoObservable } from "mobx";
import catalog from './catalog_min'

class Collection {
    collectionList = [];

    constructor() {
        makeAutoObservable(this, {}, { deep:false })
    }

    /** получаем коллекцию */
    getCatalog() {
        this.collectionList = catalog.filter(item => item.code.match(/hp\d+/) && +item.year > 2017);
    }

    /** обновление для рендера */
    updateCollection() {
        const clone = this.collectionList.map(item => item);
        this.collectionList = [];
        this.collectionList = clone;
    }

    /** отметить найденный экземпляр */
    setCheck(e) {
        // TODO api
        // const selectedItem = catalog.find(item => item.id === id);
        catalog.map((item) => {
           if (item.code === e.target.id) {
               item.checked = 'true';
               this.updateCollection();
           }
        })
    }
}

export default new Collection()