import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cards({ product, add }) {
    // const [data, setdata] = useState(null);
    // const [print, setprint] = useState(false);
    // function GetValue(val) {
    //     setdata(val.target.value);
    //     // console.warn("============>",val.target.value)
    //     setprint(false);
    // }
    const [counter, setcounter] = useState(true);
    const [data,setdata]=useState(1)
    const Cheak = () => {
        setcounter(false);
    }
    
    const Incerment = () => {
        if(data=>1)
        {
            setdata(data + 1);
        }
        else
        {
            setcounter(true);
        }
    }
    const Decerment = () => {
        if(data<=1)
        {
            setcounter(true);
        }
        else
        {
            setdata(data - 1);
        }
    }


    return (<>
        <div >
            <Card border="success" style={{ width: '16rem' }} className="carthover m-1">
                <div className='cartwidth2 rounded fs-5 text-light'>{product.off}</div>
                <div className='w-100'>
                    <Card.Img variant="top" src={product.image} className="w-75 " />
                </div>
                <Card.Body >
                    <Card.Text style={{ textDecoration: 'none', width: "100%", height: "50px", textAlign: "center" }}>{product.title}</Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Card.Text >₹{product.price}</Card.Text>
                        <Card.Text >{product.weight}</Card.Text>
                    </div>
                    {/* <div className='d-flex justify-content-between'>
                        <Button variant="outline-success" >{add}</Button>
                    </div> */}

                    {/* <div>
                        {
                            print ? <h2>{data}</h2> : null
                                }
                        <input type="text" onChange={GetValue} />
                        <Button variant="outline-success" onClick={() => setprint(true)}>Show</Button>
                    </div> */}
                    {
                        counter ? <Button variant="outline-success" onClick={() => Cheak()}>{add}</Button> : (<div class="btn-group w-75" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary" onClick={Incerment}>+</button>
                            <button type="button" class="btn btn-primary">{data}</button>
                            <button type="button" class="btn btn-primary" onClick={Decerment}>-</button>
                        </div>)
                    }

                </Card.Body>
            </Card>
        </div>
    </>);
}

export default Cards;

