import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import collection from "../store/store_figures";
import { locale, lang } from '../store/locale'
import { Card } from "./Card";
import '../style/other.scss'

export const CatalogFigures = observer(({ showChecked, showModern, setFilterItemName, filterItemName, filterYear,
            filterSetCode, setView, viewType, setShowCleanBtn }) => {
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
  function setVisible(item) {
    const nameMatched = filterItemName === '' || item.name.toLowerCase().includes(filterItemName.toLowerCase());
    const yearMatched = filterYear === '' || item.year.includes(filterYear);
    const setCodeMatched = filterSetCode === '' || item.setCode.includes(filterSetCode);
    const onlyChecked = showChecked || !showChecked && item.checked === 'false';
    const onlyModern = !showModern || showModern && +item.year > 2017;
    return nameMatched && setCodeMatched && yearMatched && onlyChecked && onlyModern;
  }

  function showRow(item) {
    return filterItemName === '' || item.name.toLowerCase().includes(filterItemName.toLowerCase());
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
                      !e.target.classList.contains('button') && showModal(true, item)
                    }}
                >
                  <div className='card-preview-image-container'>
                    <img alt={item.name} className='card-preview-image' src={`catalog_images/${[item.id]}.png`}/>
                  </div>
                  {item.checked === 'false' && <button
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