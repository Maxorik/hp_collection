import React, {useState} from 'react';
import { Header, CatalogFigures } from '../views'

export function CollectionPage() {
    const [showChecked, setShowChecked] = useState(true);
    const [showModern, setShowModern] = useState(false);
    const [viewType, setViewType] = useState('grid');

    /** Общий фильтр по году\имени\набору\id */
    const [figureFilter, setFiguresFilter] = useState('')
    const setFigureFilter = (value: string):void => {
        setFiguresFilter(value || '')
    }

    /** Вид отображения строки \ карточки
     * type: grid | row
     * */
    const setView = (type) => {
        setViewType(type || 'grid');
    }


    /** Временно недоступно ********************/
    const [filterItemName, setFilterItemName] = useState('');
    const [showCleanBtn, setShowCleanBtn] = useState(false);
    /** Чекбокс "показывать имеющиеся в коллекции" */
    const setVisibleCheckedItems = (state) => {
        setShowChecked(state);
    }
    /** Чекбокс для наборов "новой волны" после 2017 года */
    const setVisibleModernItems = (state) => {
        setShowModern(state);
    }

    return (
        <>
            <Header
                showModern = { showModern }
                setFigureFilter = { setFigureFilter }
            />
            <CatalogFigures
                showChecked = { showChecked }
                showModern = { showModern }
                setFilterItemName = { setFilterItemName }
                figureFilter = { figureFilter }
                viewType = { viewType }
                setView = { setView }
                setShowCleanBtn = { setShowCleanBtn }
            />
        </>
    );
}