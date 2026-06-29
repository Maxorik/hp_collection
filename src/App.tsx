import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { CollectionPage } from './pages';
import collection from "./service/figures/figuresModel";
import { Loader } from "./components/Loader";

function App() {
    return (
            // <BrowserRouter>
                <main className='body-bg'>
                    <PageRotes />
                </main>
            // </BrowserRouter>
    );
}


function PageRotes() {
    const pageRef = useRef('');

    useEffect(() => {
        if (pageRef.current === '') {
            collection.getCatalog();
            pageRef.current = 'collection'
        }
    }, []);

    return (
        <CollectionPage />
    )
}


/** версия с навигацией - добавить, когда будет несколько страниц */
// function PageRotesWithNav() {
//     const pageRef = useRef('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (pageRef.current === '') {
//             collection.getCatalog();
//             // pageRef.current = collection.getCurrentCount() ? 'collection' : 'start';
//             pageRef.current = 'collection'
//             navigate(pageRef.current, { replace: false })
//         }
//     }, []);

//     return (
//         <Routes>
//             <Route path="*" element={ <Loader /> } />
//             <Route path="collection" element={ <CollectionPage /> } />
//         </Routes>
//     )
// }

export default App;
