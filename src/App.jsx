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

    /** Чекбокс "показывать имеющиеся в коллекции" */
    const setVisibleCheckedItems = (state) => {
        setShowChecked(state);
    }

    /** Чекбокс для наборов "новой волны" после 2017 года */
    const setVisibleModernItems = (state) => {
        setShowModern(state);
    }

    /** Фильтр по имени */
    const setFilteredItemName = (event) => {
        setFilterItemName(event.target.value || '');
    }

    /** Фильтр по году */
    const setFilteredYear = (event) => {
        setFilterYear(event.target.value || '');
    }

    /** Фильтр по коду набора */
    const setFilteredSetCode = (event) => {
        setFilterSetCode(event.target.value || '');
    }

    /** Вид отображения строки \ карточки */
    const setView = (type) => {
        console.log(type)
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
                filterYear = { filterYear }
                filterSetCode = { filterSetCode }
                viewType = { viewType }
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
            />
        </>
    );
}

export default App;
