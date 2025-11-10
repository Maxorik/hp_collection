import { observer } from "mobx-react-lite";
import collection from "../store/store_figures";
import { localize } from '../store/locale'
import { Footer } from "../views";
import { ProgressBar } from "../components";

export const ManagePage = observer(() => {
    return (
        <div className="page-container">
            <h1>{localize('statistic_title')}</h1>
            <div className='progress-container'>
                <ProgressBar title={localize('all_figures')} value={collection.getCurrentCount() + 100}
                             total={collection.collectionList.length}/>
                <ProgressBar title={localize('slytherin')} value={10} total={17} color='green'/>
                <ProgressBar title={localize('gryffindor')} value={29} total={58} color='red'/>
                <ProgressBar title={localize('hufflepuff')} value={4} total={7} color='yellow'/>
                <ProgressBar title={localize('ravenclaw')} value={2} total={17} color='blue'/>
            </div>

            <h1 className='mt-40'>{localize('last_added')}</h1>


            <div>


                <p>Manager</p>
                <button>экспорт</button>
                <button>вишлист</button>
                <button>недостаюющие</button>
                <button>недавно добавленные</button>
                добавить дату добавления в store
            </div>

            <Footer/>
        </div>
    );
})