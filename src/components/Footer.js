import {observer} from "mobx-react-lite";
import {useState} from "react";
import collection from "../store/store";

const Footer = observer(({ setVisibleCheckedItems, showChecked, setFilteredItemName,
    filterItemName, setFilteredYear, filterYear, filterSetCode, setFilteredSetCode, showModern, setVisibleModernItems }) => {
    const [filtersClassList, setFiltersClassList] = useState('footer-filters hidden-content');
    const [footerOpenerClassList, setFooterOpenerClassList] = useState('footer-opener up');

    // FIXME !
    const filterVisibilityToggle = () => {
        filtersClassList.indexOf('hidden-content') > -1 ? setFiltersClassList('footer-filters') : setFiltersClassList('footer-filters hidden-content');
        footerOpenerClassList.indexOf('up') > -1 ? setFooterOpenerClassList('footer-opener down') : setFooterOpenerClassList('footer-opener up');
    }

    return (
        <div className="footer">
            <div className={ footerOpenerClassList } onClick={ () => filterVisibilityToggle() }/>
            <div className={ filtersClassList }>
                <div className='footer-filters-content'>
                    <p className='footer-text'>Найти по названию (англ):</p>
                    <div style={{ display: 'flex' }}>
                        <input
                            type='text'
                            className='filter-input'
                            value={ filterItemName }
                            placeholder='Введите имя'
                            onChange={ (e) => setFilteredItemName(e) }
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={ (e) => setFilteredItemName(e) }
                        />
                    </div>

                    <p className='footer-text'>Найти по году:</p>
                    <div style={{ display: 'flex' }}>
                        <input
                            type='text'
                            className='filter-input'
                            value={ filterYear }
                            placeholder='Введите год'
                            onChange={ (e) => setFilteredYear(e) }
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={ (e) => setFilteredYear(e) }
                        />
                    </div>

                    <p className='footer-text'>Найти по коду набора:</p>
                    <div style={{ display: 'flex' }}>
                        <input
                            type='text'
                            className='filter-input'
                            value={ filterSetCode }
                            placeholder='Введите код набора'
                            onChange={ (e) => setFilteredSetCode(e) }
                        />
                        <div
                            className='filter-name-clean-btn'
                            onClick={ (e) => setFilteredSetCode(e) }
                        />
                    </div>

                    <div className='filter-all-checkbox-container'>
                        <div className='filter-checkbox-container'>
                            <input
                                type='checkbox'
                                checked={ showChecked }
                                onChange={ (e) => setVisibleCheckedItems(e.target.checked) }
                                className='checkbox'
                                id='show-checked-checkbox'
                            />
                            <label htmlFor="show-checked-checkbox" className="checkbox-label"/>
                            <p>Показывать отмеченные</p>
                        </div>
                        <div className='filter-checkbox-container'>
                            <input
                                type='checkbox'
                                checked={ showModern }
                                onChange={ (e) => setVisibleModernItems(e.target.checked) }
                                className='checkbox'
                                id='show-modern-checkbox'
                            />
                            <label htmlFor="show-modern-checkbox" className="checkbox-label"/>
                            <p>Показывать 2018г+ </p>
                        </div>
                    </div>

                    <div
                        className='filter-reset-btn'
                        onClick={ () => collection.resetLocalStorage() }
                    >
                        Обнулить коллекцию
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Footer;
