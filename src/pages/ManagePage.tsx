import { observer } from "mobx-react-lite";
import collection from "../store/store_figures";
import { locale, lang } from '../store/locale'
import { Footer } from "../views";
import { ProgressBar } from "../components";

export const ManagePage = observer(() => {
    return (
        <div className="page-container">
            <p> title = управление вашей коллекцией </p>
            <div style={{ width: 300, margin: "40px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
                <p>Total</p>
                <ProgressBar title='все' value={ collection.getCurrentCount() + 100 } total={ collection.collectionList.length } />
                <ProgressBar title='студенты' value={ collection.getCurrentCount() } total={ collection.collectionList.length } />
                {/*<ProgressBar title='преподаватели' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />*/}
                {/*<ProgressBar title='deatheaters' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />*/}
                {/*<ProgressBar title='other' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />*/}
                {/*<ProgressBar title='beasts *secret' currentCount={ collection.checkedItems } totalCount={ collection.collectionList.length } />*/}

                {/*золотые???*/}
            </div>
            <div>
                <p>Manager</p>
                <button>экспорт</button>
                <button>вишлист</button>
                <button>недостаюющие</button>
                <button>недавно добавленные</button> добавить дату добавления в store
            </div>

            <Footer />
        </div>
    );
})