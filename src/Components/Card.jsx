import React from 'react'

export default function Card() {
  return (
    <div>
          <div>
            <div className="card mt-3" style={{"width": "18rem",height:"450px", "maxHeight":"700px"}}>
                <img src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='container w-100'>
                    <select className='m-2 h-100  bg-success rounded'>
                        {Array.from(Array(6),(e,i)=>{
                            return(
                                <option key={i+1} value={i+1}>{i+1}</option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100 bg-success rounded'>
                        <option value='half'>Half</option>
                        <option value='full'>Full</option>
                    </select>

                    <div className='d-inline h-100 fs-5'>
                        Total Price
                    </div>
                </div>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
    </div>
    </div>
  )
}
