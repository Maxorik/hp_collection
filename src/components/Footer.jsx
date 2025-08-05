import { observer } from "mobx-react-lite";
import { useState } from "react";
import clsx from "clsx";
import { locale, lang } from '../store/locale'

const Footer = observer(({ setFilteredItemName, filterItemName, setFilteredYear, filterYear, filterSetCode,
         setFilteredSetCode, setView, showCleanBtn, setShowCleanBtn }) => {
    const [hiddenClass, setHiddenClass] = useState('hidden-content');
    const [footerOpenerClassList, setFooterOpenerClassList] = useState('up');
    const [cleanerClassList, setCleanerOpenerClassList] = useState('shadow');

    /** событие при филтрации */
    const onFilter = (event, callback, discard=false) => {
        callback(event?.target.value);
        setShowCleanBtn(!discard);
    }

    /** нажатие на основную кнопку метелки */
    const onCleanAllFilters = () => {
        setFilteredSetCode(null);
        setFilteredYear(null);
        setFilteredItemName(null);
        setShowCleanBtn(false);
    }

    /** нажатие на кнопку лупы */
    const filterVisibilityToggle = () => {
        setHiddenClass(prev => prev === 'hidden-content' ? '' : 'hidden-content');
        setFooterOpenerClassList(prev => prev === 'up' ? 'down' : 'up');
        setCleanerOpenerClassList(hiddenClass === 'hidden-content' ? '' : 'shadow');
    }

    return ( <>
        <div className="footer-gradient"/>
        <div className="footer">
            <div className={ clsx('footer-opener footer-btn', footerOpenerClassList) } onClick={ filterVisibilityToggle }/>
            {showCleanBtn && <div className={clsx('footer-btn footer-clean-btn', cleanerClassList)} onClick={ onCleanAllFilters }/>}
            <div className={ clsx('footer-filters', hiddenClass) }>
                <div className='footer-filters-content'>
                    <p className='footer-text'>{ lang[locale].searchTitle }</p><br />
                    <div className='input-container'>
                        <p className='footer-text footer-input-title-left'>{lang[locale].name}</p>
                        <input
                            type='text'
                            className='filter-input'
                            value={filterItemName}
                            onChange={(e) => onFilter(e, setFilteredItemName)}
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={(e) => onFilter(e, setFilteredItemName, true)}
                        />
                    </div>

                    <div className='input-container'>
                        <p className='footer-text footer-input-title-left'>{lang[locale].year}</p>
                        <input
                            type='number'
                            className='filter-input'
                            value={filterYear}
                            onChange={(e) => onFilter(e, setFilteredYear)}
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={(e) => onFilter(e, setFilteredYear, true)}
                        />
                    </div>

                    <div className='input-container'>
                        <p className='footer-text footer-input-title-left'>{lang[locale].set}</p>
                        <input
                            type='number'
                            className='filter-input'
                            value={filterSetCode}
                            onChange={(e) => onFilter(e, setFilteredSetCode)}
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={(e) => onFilter(e, setFilteredSetCode, true)}
                        />
                    </div>

                    {/** DEPRECATED */}
                    {/*<div className='filter-all-checkbox-container'>*/}
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
                        {/* чекбокс "показывать только 2018+" */}
                        {/*<div className='filter-checkbox-container'>*/}
                        {/*    <p>{lang[locale].showOnlynewTip}</p>*/}
                        {/*    <input*/}
                        {/*        type='checkbox'*/}
                        {/*        checked={showModern}*/}
                        {/*        onChange={(e) => setVisibleModernItems(e.target.checked)}*/}
                        {/*        className='checkbox'*/}
                        {/*        id='show-modern-checkbox'*/}
                        {/*    />*/}
                        {/*    <label htmlFor="show-modern-checkbox" className="checkbox-label"/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/* сброс коллекции */}
                    {/*<button*/}
                    {/*    className='filter-reset-btn'*/}
                    {/*    onClick={ () => collection.resetLocalStorage() }*/}
                    {/*>*/}
                    {/*    { lang[locale].discardBtn }*/}
                    {/*</button>*/}

                    <div className='view-interface-container'>
                        <p className='footer-text footer-input-title-left'>{lang[locale].view}</p>
                        <div className='view-interface-container-buttons'>
                            <div className='set-view-btn btn-grid' onClick={() => setView('grid')}/>
                            <div className='set-view-btn btn-row' onClick={() => setView('row')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
})

export default Footer;
