import React, {useState} from 'react';
import Header from './components/Header'
import Catalog from './components/Catalog'

function App() {
    const [showChecked, setShowChecked] = useState(true);

    const setVisibleCheckedItems = (state) => {
        setShowChecked(state);
    }

    return (
    <>
        <Header setVisibleCheckedItems = { setVisibleCheckedItems } />
        <Catalog showChecked = { showChecked } />
    </>
    );
}

export default App;
