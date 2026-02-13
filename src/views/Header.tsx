import React, { useState } from 'react';
import collection from "../service/figuresModel";
import { observer } from "mobx-react-lite";
import { isMobile } from "../service/globals";
import { localize } from '../service/locale'
import { Input } from "@velumweb/ui-kit";

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
                        cls='w200'
                    />
                </div>
            </div>
        </header>
    );
})