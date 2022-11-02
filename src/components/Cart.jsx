import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Cart(props) {
  const [data, setdata] = useState([])
  const [ttl, setttl] = useState([])
  const [newttl, setnewttl] = useState([])
  useEffect(() => {
    ApiCall()
  }, [])
  const ApiCall = () => {
    fetch('http://localhost:3003/Cart').then((result) => {
      result.json().then((resp) => {
        setdata(resp)
        setttl(resp)
      })
    })
  }
  const deleteItem = (i) => {
    fetch('http://localhost:3003/Cart/' + i, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      })
      ApiCall()
      props.setid(i.id)
    })

    fetch('http://localhost:3003/deleted/' + i, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      })
      ApiCall()
    })
  }
  let blank = []
  let prc = []
  data.map((i) => {
    props.setval(i.Qty)

    blank.push(i.Qty)
    prc.push(i.price)
    return i
  })
  let total = blank.reduce(function (r, a, i) { return r + a * prc[i] }, 0)

  return (
    <div className='Collection-Div' style={{ minHeight: "92vh" }}>
      <Table striped bordered hover style={{ width: "70%" }} variant='dark'>
        <thead>
          <tr>
            <th>Preview</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qyt</th>
            <th>Action</th>
            {/* <td><Button variant="danger" onClick={() =>console.log(blank)}>Delete</Button></td> */}
          </tr>
        </thead>
        <tbody>
          {
            data.map((i, k) =>
              <tr key={k}>
                <td><img src={i.img} alt="" style={{ height: '170px', width: '145px', borderRadius: "10px" }} /></td>
                <td>{i.title}</td>
                <td>${i.price}</td>
                <td>{i.Qty}</td>
                <td><Button variant="danger" onClick={() => deleteItem(i.id)}>Delete</Button></td>
              </tr>
            )
          }
        </tbody>
        <tfoot>
          <tr><td colSpan={5} style={{ textAlign: 'center' }}>Total:${total}</td></tr>
        </tfoot>
      </Table>
    </div>
  )
}

export default Cart