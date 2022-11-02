import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function KitchenSinkExample() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3003/product').then((result) => {
      result.json().then((resp) => {
        setdata(resp)
      })
    })
  }, [])
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {
          data.slice(0, 4).map((x, k) =>
            <Card style={{ width: '18rem', margin: "10px" }} key={k}>
              <Card.Img variant="top" src={x.img} style={{ height: '450px', }}/>
              <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>

              </Card.Body>
            </Card>
            // console.log("x")    
          )
        }
      </div>
      <div style={{display:"flex",justifyContent:"center"}} >
      <Link to={'/collection'}><Button variant="outline-success" style={{margin:"30px"}}>See All Products</Button></Link>
      </div>
    </div>
  );
}

export default KitchenSinkExample;

