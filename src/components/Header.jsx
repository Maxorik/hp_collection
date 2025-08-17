import collection from "../store/store_figures";
import {observer} from "mobx-react-lite";

const Header = observer(({ showModern }) => {
  return (
    <div className="header">
        <div className='collection-info-header'>
            <img src='img/title2.png' className='header-logo-title-img' />
            <p className='header-text'>{ showModern ? collection.checkedItemsModern : collection.checkedItems  }</p>
        </div>
    </div>
  );
})

export default Header;
