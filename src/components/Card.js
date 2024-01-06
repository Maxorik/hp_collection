import { Box, Button, Modal } from "@mui/material";

function Card({ modal, showModal, selectedCard }) {
    const getHref = (href) => {
        const parsedHrefCode = href.match(/\d+/)[0];
        return `https://www.lego.com/en-us/product/${parsedHrefCode}`;
    }

    return (
      <Modal
          open={ modal }
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box className="modal-window">
              <div className='card-in-modal'>
                 <img alt={ selectedCard.name } className='card-modal-image' src={ `/catalog_images/${[selectedCard.code]}.png` }/>
              </div>
              <div className='modal-card-name'>{ selectedCard.name }</div>
              <div className='modal-card-info'>
                <div className='modal-card-info-param-name'>
                    <p>Год</p><p>Встречается в</p><p>В коллекции</p>
                </div>
                  <div className='modal-card-info-param-value'>
                      <p>{ selectedCard.year }</p>
                      <a target='_blank' href={ getHref(selectedCard.setCode) }>{ selectedCard.setCode }</a>
                      <p>{ selectedCard.checked }</p>
                  </div>
              </div>


              <div className="modal-footer">
                  <Button variant="outlined" onClick={ () => showModal(false) }> закрыть </Button>
              </div>
          </Box>
      </Modal>
    );
}

export default Card;
