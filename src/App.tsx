import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { CollectionPage, StartPage, ManagePage, SettingsPage } from './pages';
import collection from "./store/figuresModel";
import { Loader } from "./components";

function App() {
    return (
        <BrowserRouter>
            <main className='body-bg'>
                <PageRotes />
            </main>
        </BrowserRouter>
    );
}

function PageRotes() {
    const pageRef = useRef('');
    const navigate = useNavigate();

    useEffect(() => {
        if (pageRef.current === '') {
            collection.getCatalog();
            // pageRef.current = collection.getCurrentCount() ? 'collection' : 'start';
            pageRef.current = 'collection'
            navigate(pageRef.current, { replace: false })
        }
    }, []);

    return (
        <Routes>
            <Route path="*" element={ <Loader /> } />
            <Route path="start" element={ <StartPage /> } />
            <Route path="collection" element={ <CollectionPage /> } />
            <Route path="manage" element={ <ManagePage /> } />
            <Route path="settings" element={ <SettingsPage /> } />
        </Routes>
    )
}

export default App;
