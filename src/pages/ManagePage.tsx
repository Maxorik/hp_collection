import { observer } from "mobx-react-lite";
import { ProgressBar } from "../components";
import collection from "../store/store_figures";
import { locale, lang } from '../store/locale'

export const ManagePage = observer(() => {
    return (
        <div className="page-conatiner">
            <p> title = управление вашей коллекцией </p>
            <div>
                <p>Total</p>
                <ProgressBar title='все' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />
                <ProgressBar title='студенты' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />
                <ProgressBar title='преподаватели' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />
                <ProgressBar title='deatheaters' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />
                <ProgressBar title='other' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />
                <ProgressBar title='beasts *secret' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />

                золотые???
            </div>
            <div>
                <p>Manager</p>
                <button>экспорт</button>
                <button>вишлист</button>
                <button>недостаюющие</button>
                <button>недавно добавленные</button> добавить дату добавления в store
            </div>
        </div>
    );
})