import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
import { localize } from '../store/locale'

export const StartPage = observer(() => {
    return (
        <div className='flex-center h100'>
            <div className="base-container flex-column">
                <img alt="let's start" src='../img/greet.png' className='start-preview-img'/>
                <h2>{ localize('greetingsTitle') }</h2>
                <p className='break-line text-center'>{ localize('greetings') }</p>
                <Link className='button collection-btn mt-20' to="/collection">{ localize('startBtn') }</Link>
            </div>
        </div>
    );
})