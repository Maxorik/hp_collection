import React, {useState} from 'react';
import Header from './components/Header'
import Catalog from './components/Catalog'
import Footer from "./components/Footer";

function App() {
    const [showChecked, setShowChecked] = useState(true);
    const [showModern, setShowModern] = useState(false);
    const [filterItemName, setFilterItemName] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [filterSetCode, setFilterSetCode] = useState('');
    const [viewType, setViewType] = useState('grid');
    const [showCleanBtn, setShowCleanBtn] = useState(false);

    /** Чекбокс "показывать имеющиеся в коллекции" */
    const setVisibleCheckedItems = (state) => {
        setShowChecked(state);
    }

    /** Чекбокс для наборов "новой волны" после 2017 года */
    const setVisibleModernItems = (state) => {
        setShowModern(state);
    }

    /** Фильтр по имени */
    const setFilteredItemName = (value) => {
        setFilterItemName(value || '');
    }

    /** Фильтр по году */
    const setFilteredYear = (value) => {
        setFilterYear(value || '');
    }

    /** Фильтр по коду набора */
    const setFilteredSetCode = (value) => {
        setFilterSetCode(value || '');
    }

    /** Вид отображения строки \ карточки
     * type: grid | row
     * */
    const setView = (type) => {
        setViewType(type || 'grid');
    }

    return (
        <>
            <Header
                showModern = { showModern }
            />
            <Catalog
                showChecked = { showChecked }
                showModern = { showModern }
                filterItemName = { filterItemName }
                setFilterItemName = { setFilterItemName }
                filterYear = { filterYear }
                filterSetCode = { filterSetCode }
                viewType = { viewType }
                setView = { setView }
                setShowCleanBtn = { setShowCleanBtn }
            />
            <Footer
                setFilteredItemName = { setFilteredItemName }
                filterItemName = { filterItemName }
                // setVisibleCheckedItems = { setVisibleCheckedItems }
                // showChecked = { showChecked }
                filterYear = { filterYear }
                setFilteredYear = { setFilteredYear }
                filterSetCode = { filterSetCode }
                setFilteredSetCode = { setFilteredSetCode }
                showModern = { showModern }
                setVisibleModernItems = { setVisibleModernItems }
                setView = { setView }
                showCleanBtn = { showCleanBtn }
                setShowCleanBtn = { setShowCleanBtn }
            />
        </>
    );
}

export default App;
