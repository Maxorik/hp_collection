import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import collection from "../store/store";
import Card from "./Card";
import '../style/index.css'

const Catalog = observer(({ showChecked, itemName }) => {
  const [showCard, setShowCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const showModal = (state, card) => {
    setShowCard(state);
    card && setSelectedCard(card);
  }

  useEffect(() => {
    collection.getCatalog();
  }, []);

  function checkItem(id, state) {
    collection.setCheck(id, state)
  }

  /** Определяем, что показывать на основании фильтров */
  function setVisible(item) {
    let nameMatched = true;
    if (itemName !== '') {
      nameMatched = item.name.toLowerCase().indexOf(itemName) > -1;
    }
    return nameMatched && (showChecked || !showChecked && item.checked === 'false');
  }

  return (
      <div className='collection-body'>
        <div className="card-grid">
          { collection.collectionList.map((item) => {
            return setVisible(item) && <div
                className={ `card-preview ${item.checked === 'true' ? 'card-checked-mask' : ''}` }
                key={ item.code }
                onClick={ (e) => { !e.target.classList.contains('button') && showModal(true, item) } }
            >
              <div className='card-preview-image-container'>
                <img alt={ item.name } className='card-preview-image' src={ `/catalog_images/${[item.code]}.png` }/>
              </div>
              { item.checked === 'false' && <div
                  className='button button-check'
                  id={ item.code }
                  onClick={ () => checkItem(item.code, true) }>
                В коллекцию</div> }
            </div>
          } ) }

          { showCard === true && <Card
              modal = { showCard }
              selectedCard = { selectedCard }
              showModal = { showModal }
              onClickCheckBtn = { checkItem }
          /> }
        </div>
      </div>
  )
})

export default Catalog;
