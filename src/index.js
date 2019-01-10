import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from '@/store/store';
import './utils/setRem';
import './style/base.css';

FastClick.attach(document.body);
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );

// if (module.hot) {
//   module.hot.accept('./router/', function(){
//     render(Route);
//   })
// }

registerServiceWorker();
