import React, { useState } from 'react'
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap'

const BookCard = ({
  thumbnail,
  title,
  pageCount,
  authors,
  publisher,
  language,
  description,
  previewLink,
  infoLink,
}) => {

  // States 
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card style={{ width: '233px' }} className='card m-auto'>
      <CardImg top style={{ width: '100%', height: '233px' }} src={thumbnail} alt='card image'></CardImg>
      <CardBody>
        <CardTitle className='card-title'>{title}</CardTitle>
        <Button onClick={toggle}>More info</Button>
      </CardBody>
      <Modal style={{width: '100%'}} isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>{title}</h5>
          <button aria-label='Close' className='close ml-auto' type='button' onClick={toggle}>
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between'>
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Language: {language}</p>
              <p>Authors: {authors}</p>
              <p>Publisher: {publisher}</p>
              <div className='mt-3' alt='title'>
                <p>Description: {description}</p>
              </div>
              <div className='mt-3 d-flex justify-content-between' alt='title'>
                <a 
                className='btn-link' 
                color='default' 
                typ='button' 
                target='_blank' 
                rel='noopener noreferrer' 
                href={previewLink}>Preview link</a>
                <a 
                className='btn-link' 
                color='default' 
                typ='button' 
                target='_blank' 
                rel='noopener noreferrer' 
                href={infoLink}>Info link</a>

              </div>

            </div>

          </div>

        </div>
      </Modal>

    </Card>
  )
}

export default BookCard;