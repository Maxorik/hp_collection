import { Box, Button, Modal } from "@mui/material";
import { locale, lang } from '../store/locale'

function Card({ modal, showModal, selectedCard, onClickCheckBtn }) {
    /** ссылка на набор */
    const getSetsCode = (setCode) => {
        setCode.split(' ').map((set) => {
            return (`<a target='_blank' href={ getHref(set) }>{ set }</a>`)
        })
        console.log(setCode.split(' '))
    }

    const getHref = (href) => {
        const parsedHrefCode = href.match(/\d+/)[0];
        return `https://www.lego.com/en-us/service/buildinginstructions/${parsedHrefCode}`;
    }

    return (
      <Modal
          open={ modal }
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box className="modal-window">
              <div className='card-in-modal'>
                 <img alt={ selectedCard.name } className='card-modal-image' src={ `catalog_images/${[selectedCard.id]}.png` }/>
              </div>
              <div className='modal-card-name'>{ selectedCard.name }</div>
              <div className='modal-card-info'>
                <div className='modal-card-info-param-name'>
                    <p>{ lang[locale].year }:</p><p>{ lang[locale].includeIn }:</p><p>{ lang[locale].inCollection }:</p>
                </div>
                  <div className='modal-card-info-param-value'>
                      <p>{ selectedCard.year }</p>
                      <span className='card-sets-container'> {
                        selectedCard.setCode.split(' ').map((setCode) => {
                            return <a className='card-set-href' key={setCode} target='_blank' href={getHref(setCode)}>{setCode}</a>
                        })}
                      </span>
                      <p>{ selectedCard.checked === 'true' ? <span className='checked-title'>{ lang[locale].yes }</span> :
                          <span className='unchecked-title'>{ lang[locale].no }</span> }</p>
                  </div>
              </div>
              <div className="modal-footer">
                  { selectedCard.checked === 'false' ? <Button
                      className='mr-8 button'
                      variant="outlined"
                      onClick={() => onClickCheckBtn(selectedCard.id, true)}>
                      { lang[locale].addBtn }
                  </Button> : <Button
                      className='mr-8 button'
                      variant="outlined"
                      onClick={() => onClickCheckBtn(selectedCard.id, false)}>
                      { lang[locale].removeBtn }
                  </Button> }
                  <Button
                      className='mr-8 button'
                      variant="outlined"
                      onClick={ () => showModal(false) }>
                      { lang[locale].closeBtn }
                  </Button>
              </div>
          </Box>
      </Modal>
    );
}

export default Card;
