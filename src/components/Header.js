import collection from "../store/store";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
  return (
    <div className="header">
        <div className='collection-info-header'>
            <img src='/img/title2.png' className='header-logo-title-img' />
            <p className='header-text'>{ collection.checkedItems  }</p>
        </div>
    </div>
  );
})

export default Header;
