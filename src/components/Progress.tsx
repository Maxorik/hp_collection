

export const ProgressBar = ({ title, currentCount, totalCount }) => {
    return (
        <div>
            <div className='flex'>
                <p>{ title }</p>
                <p>{ currentCount } / { totalCount }</p>
            </div>
            <div> progressbar... </div>

        </div>
    );
}