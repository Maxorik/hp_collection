import {observer} from "mobx-react-lite";
import {useState} from "react";

const Footer = observer(({ setVisibleCheckedItems, showChecked, setFilteredItemName,
                        filterItemName, setFilteredYear, filterYear, filterSetCode, setFilteredSetCode }) => {
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

                    <label><input
                        type='checkbox'
                        checked={ showChecked }
                        onChange={ (e) => setVisibleCheckedItems(e.target.checked) }
                    /> Показывать отмеченные </label>
                </div>
            </div>
        </div>
    );
})

export default Footer;
