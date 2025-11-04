import { observer } from "mobx-react-lite";
import { locale, lang } from '../store/locale'

export const SettingsPage = observer(() => {
    return (
        <div className="page-conatiner">
            <button>скачать приложение</button>
            <button>github</button>
            <button>только новые фигурки</button>
            <button>сброс коллекции с подтверждением</button>
            <button>выбрать язык</button>
        </div>
    );
})