import React, { useState } from 'react';
import collection from "../service/figures/figuresModel";
import { observer } from "mobx-react-lite";
import { isMobile } from "../service/config/globals";
import { localize } from '../service/locale'
import { Input } from "@velumweb/ui-kit";
import Login from '../../public/img/login.svg?react';
import Logout from '../../public/img/logout.svg?react';

export const Header = observer(({ showModern, setFigureFilter }) => {
    const [search, setSearch] = useState();
    function searchHandler(val) {
        setFigureFilter(val);
        setSearch(val);
    }

    return (
        <header>
            <div className='collection-header'>
                <div className='collection-info-header'>
                    <img src='img/title2.png' className='header-logo-title-img'/>
                    {!isMobile && <p className='header-text'>{showModern ? collection.checkedItemsModern : collection.checkedItems}</p>}
                </div>
                <div className='header-search'>
                    {isMobile && <p className='header-text'>{showModern ? collection.checkedItemsModern : collection.checkedItems}</p>}
                    <Input
                        placeholder={localize('searchPlaceholder') }
                        live={true}
                        isSearch={true}
                        value={search}
                        onChange={searchHandler}
                        cls='main-search'
                    />
                </div>
                {!isMobile && <div className='header-controllers'>
                    <button className='button btn-icon'>
                        <>
                            <Login />
                            <p className='button-bottom-title'>{localize('login')}</p>    
                        </>
                    </button>
                </div>}
            </div>
        </header>
    );
})