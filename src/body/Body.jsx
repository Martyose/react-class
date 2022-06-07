import React from 'react'
import './body.css';
import FenceSharpIcon from '@mui/icons-material/FenceSharp';
import 'bootstrap/dist/css/bootstrap.css';

// let obj = {}

// obj.name='marty';
// obj.name ='ose';
// console.log(obj);

const body = (props) => {

  return (
    <div className="container-b">


      <div className="row">

          <h1>Martology</h1>
      </div>

      <div className="row px-5 main-row">
          <div className="row">
            <div className="col bg-dark">
              <div className="row">
                <h2 className='text-white'> Apex</h2>
              </div>
            </div>
          </div>

          <div className="row minor-row">
             {/* col opening */}
             <div className="col-3 bg-secondary rounded shadow" >
                  <div className="row">
                    <div className="col">
                      <h2 className='text-white'>#2156 </h2>
                    <p className='text-white'>{props.name}<a href="">{props.mycourse} </a> </p>
                    </div>
                    <div className="col">
                      <FenceSharpIcon className='Icon'/>
                    </div>
                  </div>
                </div>
                {/* col opening */}
                <div className="col-3 bg-danger rounded shadow ">
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                      <p className='text-white'>Total Tax</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                    </div>
                </div>
                {/* col opening */}
                <div className="col-3 bg-success rounded shadow ">
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                      <p className='text-white'>Total Tax</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                      
                    </div>
                </div>
                {/* col opening */}
                <div className="col-3 rounded shadow " style={{backgroundColor:"#dd6300"}}>
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                        <p className='text-white'>you're {props.getrandom} online</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                    </div>
                </div> 
                {/* closing col */}
          </div>
      </div>

      <br />

      <div className="row py-5 px-5 main-row1">
          <div className="row">
            <div className="col bg-dark">
              <div className="row">
                <h2 className='text-white'> Apex</h2>
              </div>
            </div>
          </div>

          <div className="row minor-row">
             {/* col opening */}
             <div className="col-3 bg-secondary rounded shadow" >
                  <div className="row">
                    <div className="col"> <FenceSharpIcon className='Icon'/>
                    
                    </div> <br/><p id="count">0</p>
                    <div className="col">
                      
                     
                    </div>
                  </div>
                </div>
                {/* col opening */}
                <div className="col-3 bg-danger rounded shadow ">
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                      <p className='text-white'>Total Tax</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                    </div>
                </div>
                {/* col opening */}
                <div className="col-3 bg-success rounded shadow ">
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                      <p className='text-white'>Total Tax</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                      
                    </div>
                </div>
                {/* col opening */}
                <div className="col-3 rounded shadow " style={{backgroundColor:"#dd6300"}}>
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                        <p className='text-white'>Total Tax</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                    </div>
                </div> 
                {/* closing col */}
          </div>
      </div>
      <br />

      <div className="row py-5 px-5 main-row2">
          <div className="row">
            <div className="col bg-dark">
              <div className="row">
                <h2 className='text-white'> Apex</h2>
              </div>
            </div>
          </div>

          <div className="row minor-row">
             {/* col opening */}
             <div className="col-3 bg-secondary rounded shadow" >
                  <div className="row">
                    <div className="col">
                      <h2 className='text-white'>#2156 </h2>
                    <p className='text-white'>Total Tax</p>
                    </div>
                    <div className="col">
                      <FenceSharpIcon className='Icon'/>
                    </div>
                  </div>
                </div>
                {/* col opening */}
                <div className="col-3 bg-danger rounded shadow ">
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                      <p className='text-white'>Total Tax</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                    </div>
                </div>
                {/* col opening */}
                <div className="col-3 bg-success rounded shadow ">
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                      <p className='text-white'>Total Tax</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                      
                    </div>
                </div>
                {/* col opening */}
                <div className="col-3 rounded shadow " style={{backgroundColor:"#dd6300"}}>
                  <div className="row">
                      <div className="col">
                        <h2 className='text-white'>#2156 </h2>
                        <p className='text-white'>Total Tax</p>
                      </div>
                      <div className="col">
                        <FenceSharpIcon className='Icon'/>
                      </div>
                    </div>
                </div> 
                {/* closing col */}
          </div>
      </div>

    </div>
  )
}
export default body