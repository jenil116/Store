import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function BasicExample() {
  const [card, setcard] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3003/product').then((result) => {
      result.json().then((resp) => {
        setcard(resp)
      })
    })
  }, [])
  return (
    <div className='Collection-Div'>
      <div className='Cards-Div'>
        {
          card.slice(0, 4).map((x, k) =>
            <Card style={{ width: '18rem', margin: "10px" }} key={k}>
              <Card.Img variant="top" src={x.img} style={{height:"400px",}} />
              <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <NavLink to={`/product/${x.id}`}><Button variant="primary">About Product</Button></NavLink>
              </Card.Body>
            </Card>
          )
        }
      </div>
      <div className='Cards-Div'>
        {
          card.slice(4, 8).map((x, k) =>
            <Card style={{ width: '18rem', margin: "10px" }} key={k}>
              <Card.Img variant="top" src={x.img} style={{height:"400px"}}/>
              <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <NavLink to={`/product/${x.id}`}><Button variant="primary">About Product</Button></NavLink>
              </Card.Body>
            </Card>
          )
        }
      </div>
    </div>
  );
}

export default BasicExample;