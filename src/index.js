import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { reducer as reduxformReducer } from 'redux-form';
import thunk from 'redux-thunk';
import crawlDataReducer from './reducers/crawl_data';

const reducer = combineReducers({
    crawl_data:crawlDataReducer,
    form:reduxformReducer
});
const middleware = applyMiddleware(thunk);
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
