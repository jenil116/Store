import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { BsPlus } from "react-icons/bs";
import { VscChromeMinimize } from "react-icons/vsc";

function Product({ val }) {
  const [values, setvalues] = useState()
  const { id } = useParams()
  const [card, setcard] = useState([]);
  const [del, setdel] = useState([])
  const [qty, setqty] = useState(1)
  const navigate = useNavigate()


  useEffect(() => {
    fetch('http://localhost:3003/product/' + id).then((result) => {
      result.json().then((resp) => {
        setcard(resp)
      })
    })

    fetch('http://localhost:3003/deleted').then((result) => {
      result.json().then((resp) => {
        setdel(resp)
      })
    })

    if (val > 1) {
      Qty = qty
      const item = { title, img, price, Qty }
      fetch('http://localhost:3003/cart/' + id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      }).then(() => {
      }).catch(() => {
      })
    }
  }, [qty])

  let title = card.title
  let img = card.img
  let price = card.price
  let Qty = undefined

  const inputVal = (e) => {
    // Qty =  qty
    // const item = { title, img, price, Qty }
    // fetch('http://localhost:3003/cart/' + ids, {
    //   method: 'PUT',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(item)
    // }).then(() => {
    // }).catch(() => {
    // })
    // console.log(Qty);
  }

  let a = undefined
  let title2 = []
  del.map((i) => {
    title2.push(i.title)
    a = title2.includes(title)
    return i
  })

  const handleClick = () => {
    if (a) {
      navigate("/Cart");
    } else {
      Qty = qty
      navigate("/Cart");
      const item = { title, img, price, Qty }
      const name = { title }
      fetch('http://localhost:3003/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      }).then(((response) => response.json()))
        .then((data) => {
          console.log('Qty Update')
        }).catch((error) => {
          console.error('Error:');
        });

      fetch('http://localhost:3003/deleted', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
      }).then(() => {
      }).catch(() => {
      })
    }
  }

  return (
    <div style={{ display: "flex", backgroundColor: "rgb(24, 24, 24)", minHeight: "93vh", color: "white" }}>
      <div className="img" style={{ padding: "30px" }}>
        <img style={{ height: "500px", width: "400px" }} src={card.img} alt="" />
      </div>
      <div className="text" style={{ padding: "30px" }}>
        <h2 style={{ borderBottom: "1px solid #d7d5d5" }}>{card.title}</h2>
        <h4 style={{ borderBottom: "1px solid #d7d5d5" }}>Price:${card.price}.00</h4>
        <p style={{ width: "100%" }}>{card.body}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
          <h4>Qty:</h4>
          <Button className='btn-icon' variant="light" onClick={() => { setqty(qty - 1) }}><VscChromeMinimize className='icon' /></Button>
          <input className='Qty-input' type="text" placeholder='Quantity' value={qty} onChange={inputVal} />
          <Button className='btn-icon' variant="light" onClick={() => { setqty(qty + 1) }}><BsPlus className='icon' /></Button>
          <Button variant="outline-primary" onClick={handleClick}>Add To Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default Product