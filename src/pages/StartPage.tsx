import { observer } from "mobx-react-lite";
import { localize } from '../store/locale'

export const StartPage = observer(({ pageHandler }) => {
    return (
        <div className='flex-center h100'>
            <div className="base-container flex-column">
                <img alt="let's start" src='../img/greet.png' className='start-preview-img'/>
                <p className='break-line text-center'>{ localize('greetings') }</p>
                <div className='collection-btn mt-20' onClick={() => pageHandler('collection')}>
                    { localize('startBtn') }
                </div>
            </div>
        </div>
    );
})