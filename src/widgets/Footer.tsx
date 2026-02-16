import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
import { SearchPopup } from './SearchPopup';

type TFooterButtons = 'search' | 'manage' | 'collection'

export const Footer = observer(({ search, buttons }) => {
    return (
        <footer>
            <div className='footer-btn-container'>
                <Link className='footer-opener footer-btn btn-statistic' to="/manage" />
                <Link className='footer-opener footer-btn btn-collection' to="/collection" />
            </div>
            { search && <SearchPopup {...search} /> }
        </footer>
    );
})