import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './Components/Login/Login';
import Header from './Components/Header';
import CauHoi from './Components/CauHoi/Cauhoi';
import DanhGiaMentor from './Components/DanhGiaMentor/DanhGiaMentor';
import DanhMuc from './Components/DanhMuc/DanhMuc';
import Pages from './Components/Pages/Pages';

import './App.scss';
import './styles.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="app">
          <BrowserRouter>
            
            <Switch>
              <Route exact path="/" component={ CauHoi }/>
              <Route path="/Login" component={ Login }/>
              <Route path="/CauHoi" component={ CauHoi }/>
              <Route path="/DanhGiaMentor" component={ DanhGiaMentor }/>
              <Route path="/DanhMuc" component={ DanhMuc }/>
              {/* <Route path="/colorful-tiles" component={ ColorfulTiles }/>
              <Route path="/giphy" component={ Giphy }/>
              <Route path="/giphy-detail/:id" component={ GiphyDetail }/>
              <Route path="/history" component={History}/>
              <Route component={ NotFound }/> */}
            </Switch>
          </BrowserRouter>
          <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; 2020</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
      </Provider>
    )
  }
}

export default App;
