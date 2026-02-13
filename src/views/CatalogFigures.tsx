import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import collection from "../service/figuresModel";
import { locale, lang } from '../service/locale'
import {IFigures} from "../service/figuresModel";
import { Card } from "./Card";
import '../style/other.scss'

export const CatalogFigures = observer(({ showChecked, showModern, figureFilter,
                                          setView, setFilterItemName, viewType, setShowCleanBtn }) => {
  const [showCard, setShowCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const showModal = (state, card) => {
    setShowCard(state);
    card && setSelectedCard(card);
  }

  const onTableItemSelect = (itemName) => {
    setFilterItemName(itemName);
    setView('grid');
    setShowCleanBtn(true);
  }

  // useEffect(() => {
  //   collection.getCatalog();
  // }, []);

  function checkItem(id, state) {
    collection.setCheck(id, state)
  }

  /** Определяем, что показывать на основании фильтров */
  function setVisible(item: IFigures) {
    const onlyChecked = showChecked || !showChecked && item.checked === 'false';
    const onlyModern = !showModern || showModern && +item.year > 2017;
    return checkIncludes(figureFilter, item) && onlyChecked && onlyModern;
  }

  function checkIncludes(data: string, item: IFigures) {
    data = data.trim().toLowerCase();
    return data === '' || item.name.toLowerCase().includes(data) || item.id.includes(data)
        || item.year.includes(data) || item.setCode.includes(data);
  }

  function showRow(item) {
    return figureFilter === '' || item.name.toLowerCase().includes(figureFilter.toLowerCase());
  }

  function onToggleFavorite(id: string, state: boolean) {
    collection.setFavorite(id, state)
  }

  return (
      <div className='collection-body'>
        <div className='preload-image'><img alt='' src="../../public/img/card_back.png"/></div>
        {viewType === 'grid' ?
            <div className="card-grid">
              {collection.collectionList.map((item) => {
                return setVisible(item) && <div
                    className={`card-preview ${item.checked === 'true' ? 'card-checked-mask' : ''}`}
                    key={item.id}
                    onClick={(e) => {
                      e.target.nodeName.toLowerCase() !== 'button' && showModal(true, item)
                    }}
                >
                  <div className='flex-sb'>
                    <b>#{item.id}</b>
                    <button
                        className={`favorite-btn ${item.favorite ? "active" : ""}`}
                        onClick={() => onToggleFavorite(item.id, !item.favorite)}
                    >
                      {item.favorite ? "❤️" : "🤍"}
                    </button>
                  </div>
                  <div className='card-preview-image-container'>
                    <img alt={item.name} className='card-preview-image' src={`catalog_images/${[item.id]}.png`}/>
                  </div>
                  {item.checked !== 'true' && <button
                      className='button button-check'
                      id={item.id}
                      onClick={() => checkItem(item.id, true)}>
                    {lang[locale].addBtnMini}
                  </button>}
                </div>
              })}

              {showCard === true && <Card
                  modal={showCard}
                  selectedCard={selectedCard}
                  showModal={showModal}
                  onClickCheckBtn={checkItem}
              />}
            </div> : <div className="card-row">
              {collection.tableFigureList.map((item, index) => showRow(item) &&
                  <div className='figure-row' key={item.id} onClick={() => onTableItemSelect(item.name)}>
                    <p style={{width: 32}}>{`${index + 1}.`}</p>
                    <p className='table-item-name'>{item.name}</p>
                    <p>{`${item.checked} / ${item.count} `}</p>
                  </div>)}
            </div>
        }
      </div>
  )
})