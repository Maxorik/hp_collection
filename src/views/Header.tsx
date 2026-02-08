import React, { useState } from 'react';
import collection from "../store/store_figures";
import { observer } from "mobx-react-lite";
import { isMobile } from "../store/settings";
import { localize } from '../store/locale'
import { Input } from "@velumweb/ui-kit";

export const Header = observer(({ showModern }) => {
    const [search, setSearch] = useState();
    function searchHandler(val) {
        console.log(val)
        setSearch(val)
    }

    return (
        <header>
            <div className='collection-info-header'>
                <img src='img/title2.png' className='header-logo-title-img' />
                <p className='header-text'>{ showModern ? collection.checkedItemsModern : collection.checkedItems  }</p>
                { !isMobile && <Input
                    placeholder={ localize('searchPlaceholder') }
                    live={true}
                    isSearch={true}
                    value={search}
                    onChange={searchHandler}
                /> }
            </div>
        </header>
    );
})