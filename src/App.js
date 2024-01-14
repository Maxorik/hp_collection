import React, {useState} from 'react';
import Header from './components/Header'
import Catalog from './components/Catalog'
import Footer from "./components/Footer";

function App() {
    const [showChecked, setShowChecked] = useState(true);
    const [filterItemName, setFilterItemName] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [filterSetCode, setFilterSetCode] = useState('');

    /** Чекбокс "показывать имеющиеся в коллекции" */
    const setVisibleCheckedItems = (state) => {
        setShowChecked(state);
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

    return (
        <>
            <Header />
            <Catalog
                showChecked = { showChecked }
                filterItemName = { filterItemName }
                filterYear = { filterYear }
                filterSetCode = { filterSetCode }
            />
            <Footer
                setFilteredItemName = { setFilteredItemName }
                filterItemName = { filterItemName }
                setVisibleCheckedItems = { setVisibleCheckedItems }
                showChecked = { showChecked }
                filterYear = { filterYear }
                setFilteredYear = { setFilteredYear }
                filterSetCode = { filterSetCode }
                setFilteredSetCode = { setFilteredSetCode }
            />
        </>
    );
}

export default App;
