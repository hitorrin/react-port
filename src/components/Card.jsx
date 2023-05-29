import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CardSubject({name,...props})
{ const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(<div><Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>{props.subject} </Card.Title>
  <Card.Text>
  </Card.Text>
  <Button  variant="primary"  onClick={handleShow}>Перейти</Button>
</Card.Body>
</Card>
<Offcanvas show={show} onHide={handleClose} placement={'top'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>

          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          {props.comp}
        </Offcanvas.Body>
      </Offcanvas>
</div>
)
}

export default CardSubject;