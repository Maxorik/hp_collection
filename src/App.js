import React, {useState} from 'react';
import Header from './components/Header'
import Catalog from './components/Catalog'
import Footer from "./components/Footer";

function App() {
    const [showChecked, setShowChecked] = useState(true);
    const [itemName, setItemName] = useState('');

    /** Чекбокс "показывать имеющиеся в коллекции" */
    const setVisibleCheckedItems = (state) => {
        setShowChecked(state);
    }

    /** Фильтр по имени */
    const setFilteredItemName = (event) => {
        setItemName(event.target.value);
    }

    return (
        <>
            <Header />
            <Catalog
                showChecked = { showChecked }
                itemName = { itemName }
            />
            <Footer
                setFilteredItemName = { setFilteredItemName }
                itemName = { itemName }
                setVisibleCheckedItems = { setVisibleCheckedItems }
                showChecked = { showChecked }
            />
        </>
    );
}

export default App;
