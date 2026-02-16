import React, { useState } from "react";
import { locale, lang } from '../service/locale'
import { setViewUrl } from '../service/config/globals'
import Heart from '../../public/img/hearth.svg?react';

export function Card({ modal, showModal, selectedCard, onClickCheckBtn, onToggleFavorite }) {
    const [isChecked, setChecked] = useState(selectedCard.checked === 'true')

    const getHref = (href) => {
        const parsedHrefCode = href.match(/\d+/) ? href.match(/\d+/)[0] : '';
        return `${setViewUrl[locale]}${parsedHrefCode}`;
    }

    const tagsClassname = (cardName) => {
        return cardName.length > 20 ? 'tags-container top-medium' : 'tags-container top-small'
    }

    const onClickCheckButton = () => {
        onClickCheckBtn(selectedCard.id, !isChecked);
        setChecked(!isChecked)
    }

    const onClickFavorite = (id: string, state: boolean) => {
        onToggleFavorite(id, state);
        selectedCard.favorite = state.toString()
    }

    return (
        <div>
            { modal && (
                <div className="modal" onClick={() => showModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => showModal(false)}>&times;</button>
                        <div className={`card-in-modal ${selectedCard.checked === 'true' && 'card-checked-modal'}`}>
                            <img alt={selectedCard.name} className='card-modal-image'
                                 src={`catalog_images/${[selectedCard.id]}.png`}/>
                        </div>
                        <div className='modal-card-name'>{selectedCard.name}</div>
                        <div className={tagsClassname(selectedCard.name)}>
                            <div className='card-tag'>{isChecked ? <span className='green-check'>&#10004;</span> : '❌'}</div>
                            <div className='card-tag'>{selectedCard.year}</div>
                            {selectedCard.setCode.split(' ').map((setCode) => {
                                return setCode ? <div className='card-tag' key={setCode}>
                                    <div className='tag-icon'></div>
                                    <a target='_blank' rel="noreferrer" href={getHref(setCode)}>{setCode}</a>
                                </div> : <div style={{width: 20}} key={setCode}></div>
                            })}
                        </div>
                        <div className='card-buttons-container'>
                            <button className='button collection-btn' onClick={onClickCheckButton}>
                                {isChecked ?
                                    <span className='checked-title'>{lang[locale].removeBtn}</span> :
                                    <span className='unchecked-title'>{lang[locale].addBtn}</span>}
                            </button>
                            <button className='button favorite-btn-card'>
                                <Heart
                                    className={selectedCard.favorite === 'true' ? 'favorite-active' : ''}
                                    onClick={() => onClickFavorite(selectedCard.id, selectedCard.favorite === 'false')}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
