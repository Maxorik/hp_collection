import {observer} from "mobx-react-lite";
import {useState} from "react";

const Footer = observer(({ setVisibleCheckedItems, showChecked, setFilteredItemName, itemName }) => {
    const [filtersClassList, setFiltersClassList] = useState('footer-filters hidden-content');
    const [footerBtnTitle, setFooterBtnTitle] = useState('фильтры');

    // FIXME !
    const filterVisibilityToggle = () => {
        filtersClassList.indexOf('hidden-content') > -1 ? setFiltersClassList('footer-filters') : setFiltersClassList('footer-filters hidden-content');
        footerBtnTitle === 'фильтры' ? setFooterBtnTitle('закрыть') : setFooterBtnTitle('фильтры');
    }

    return (
        <div className="footer">
            <div className='footer-opener' onClick={ () => filterVisibilityToggle() }>{ footerBtnTitle }</div>
            <div className={ filtersClassList }>
                <div className='footer-filters-content'>
                    <label><input
                        type='checkbox'
                        checked={ showChecked }
                        onChange={ (e) => setVisibleCheckedItems(e.target.checked) }
                    /> Показывать имеющиеся </label>
                    <span className='vertical-divider' />
                    <input
                        type='text'
                        value={ itemName }
                        placeholder='Введите имя'
                        onChange={ (e) => setFilteredItemName(e) }
                    />
                </div>
            </div>
        </div>
    );
})

export default Footer;
