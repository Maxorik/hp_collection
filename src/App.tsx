import React, {useEffect, useState} from 'react';
import { CollectionPage, StartPage, ManagePage, SettingsPage } from './pages';
import { Loader, Footer } from './components'
import collection from "./store/store_figures";

export type IPages = 'manage' | 'collection' | 'start' | 'settings';

function App() {
    const [activePage, setActivePage] = useState('');

    const handlerActivePage = (state: IPages): void => {
        setActivePage(state)
    }

    useEffect(() => {
        collection.getCatalog();
        !collection.getCurrentCount() ? setActivePage('start') : setActivePage('collection')
    }, []);

    return (
        <div className='body-bg'>
            { activePage === '' ?
                <Loader /> :
                <div className=''>
                    <>
                        { activePage === 'start' && <StartPage pageHandler={ handlerActivePage } /> }
                        { activePage === 'collection' && <CollectionPage pageHandler={handlerActivePage}/> }
                        { activePage === 'manage' && <ManagePage pageHandler={handlerActivePage}/> }
                        { activePage === 'settings' && <SettingsPage pageHandler={handlerActivePage}/> }
                    </>
                    <Footer
                        setPage = { handlerActivePage }
                    />
                </div>
            }
        </div>
    );
}

export default App;
