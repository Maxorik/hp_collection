import { observer } from "mobx-react-lite";
import { SearchPopup } from './SearchPopup'

export const Footer = observer(({ search }) => {
    return (
        <footer>
            <SearchPopup {...search} />
        </footer>
    );
})