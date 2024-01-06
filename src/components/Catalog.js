import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import collection from "../store/store";
import Card from "./Card";
import '../style/index.css'

const Catalog = observer(() => {
  const [showCard, setShowCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const showModal = (state, card) => {
    setShowCard(state);
    card && setSelectedCard(card);
  }

  useEffect(() => {
    collection.getCatalog();
  }, []);

  function checkItem(event) {
    collection.setCheck(event)
  }

  return (
    <div className="card-grid">
      { collection.collectionList.map((item) => {
        return <div
            className={ `card-preview ${item.checked === 'true' ? 'card-checked-mask' : ''}` }
            key={ item.code }
            onClick={ () => showModal(true, item) }
        >
          <div className='card-preview-image-container'>
            <img alt={ item.name } className='card-preview-image' src={ `/catalog_images/${[item.code]}.png` }/>
          </div>
          { item.checked === 'false' && <div
              className='button button-check pretty-text'
              id={ item.code }
              onClick={ checkItem }>
            есть!</div> }
        </div>
      } ) }

      { showCard === true && <Card
          modal = { showCard }
          selectedCard = { selectedCard }
          showModal = { showModal }
      /> }
    </div>
  )
})

export default Catalog;
