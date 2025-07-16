import {observer} from "mobx-react-lite";
import {useState} from "react";
import collection from "../store/store";
import { locale, lang } from '../store/locale'

const Footer = observer(({ setVisibleCheckedItems, showChecked, setFilteredItemName,
    filterItemName, setFilteredYear, filterYear, filterSetCode, setFilteredSetCode, showModern, setVisibleModernItems }) => {
    const [filtersClassList, setFiltersClassList] = useState('footer-filters hidden-content');
    const [footerOpenerClassList, setFooterOpenerClassList] = useState('footer-opener up');

    // FIXME !
    const filterVisibilityToggle = () => {
        filtersClassList.indexOf('hidden-content') > -1 ? setFiltersClassList('footer-filters') : setFiltersClassList('footer-filters hidden-content');
        footerOpenerClassList.indexOf('up') > -1 ? setFooterOpenerClassList('footer-opener down') : setFooterOpenerClassList('footer-opener up');
    }

    return ( <>
        <div className="footer-gradient"/>
        <div className="footer">
            <div className={ footerOpenerClassList } onClick={ () => filterVisibilityToggle() }/>
            <div className={ filtersClassList }>
                <div className='footer-filters-content'>
                    <p className='footer-text'>{ lang[locale].searchTitle }</p><br />
                    <div className='input-container'>
                        <p className='footer-text footer-input-title-left'>{lang[locale].name}</p>
                        <input
                            type='text'
                            className='filter-input'
                            value={filterItemName}
                            // placeholder={lang[locale].nameTip}
                            onChange={(e) => setFilteredItemName(e)}
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={(e) => setFilteredItemName(e)}
                        />
                    </div>

                    <div className='input-container'>
                        <p className='footer-text footer-input-title-left'>{lang[locale].year}</p>
                        <input
                            type='text'
                            className='filter-input'
                            value={filterYear}
                            // placeholder={lang[locale].yearTip}
                            onChange={(e) => setFilteredYear(e)}
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={(e) => setFilteredYear(e)}
                        />
                    </div>

                    <div className='input-container'>
                        <p className='footer-text footer-input-title-left'>{lang[locale].set}</p>
                        <input
                            type='text'
                            className='filter-input'
                            value={filterSetCode}
                            // placeholder={lang[locale].codeTip}
                            onChange={(e) => setFilteredSetCode(e)}
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={(e) => setFilteredSetCode(e)}
                        />
                    </div>

                    <div className='filter-all-checkbox-container'>
                        {/* чекбокс "показывать отмеченные" */}
                        {/*<div className='filter-checkbox-container'>*/}
                        {/*    <input*/}
                        {/*        type='checkbox'*/}
                        {/*        checked={ showChecked }*/}
                        {/*        onChange={ (e) => setVisibleCheckedItems(e.target.checked) }*/}
                        {/*        className='checkbox'*/}
                        {/*        id='show-checked-checkbox'*/}
                        {/*    />*/}
                        {/*    <label htmlFor="show-checked-checkbox" className="checkbox-label"/>*/}
                        {/*    <p>{ lang[locale].showCheckedTip }</p>*/}
                        {/*</div>*/}
                        <div className='filter-checkbox-container'>
                            <input
                                type='checkbox'
                                checked={ showModern }
                                onChange={ (e) => setVisibleModernItems(e.target.checked) }
                                className='checkbox'
                                id='show-modern-checkbox'
                            />
                            <label htmlFor="show-modern-checkbox" className="checkbox-label"/>
                            <p>{ lang[locale].showOnlynewTip }</p>
                        </div>
                    </div>

                    {/* сброс коллекции */}
                    {/*<button*/}
                    {/*    className='filter-reset-btn'*/}
                    {/*    onClick={ () => collection.resetLocalStorage() }*/}
                    {/*>*/}
                    {/*    { lang[locale].discardBtn }*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    </>
    );
})

export default Footer;
