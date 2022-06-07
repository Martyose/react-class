import React from 'react'
// import FenceSharpIcon from '@mui/icons-material/FenceSharp';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './header.css';
// import 'bootstrap/scss/';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your components takes precedence over default styles.


const header = (props) => {

  return (
      
    
    <div className="container">

        <div className='container__main_header'>
      <div className="container__sub_headeer">
          
              {/* <nav>Home </nav> <br />
              <nav>About</nav> <br />
              <nav>Contact</nav>
              <form class="form-inline my-1 my-lg-0">
                  <input class="form-control mr-sm-1" type="text" placeholder="Search"/>
                  <button class="btn btn-outline-success my-2 mx-5 my-sm-2 b-small" type="submit">Search</button>
              </form> */}
    


                    <nav class="navbar navbar-expand-lg main-cs navbar-dark bg-primary">
                        <a class="navbar-brand" href="#"><AcUnitIcon className='Icon' />Martology</a>
                        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation"></button>
                        <div class="collapse navbar-collapse" id="collapsibleNavId">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                                <li class="nav-item">
                                        <a class="nav-link" href="#">Action 2</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
      </div>
        </div>

    </div>

  )
}

export default header