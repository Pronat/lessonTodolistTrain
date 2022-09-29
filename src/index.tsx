import React from 'react';

let axios = {
    get() {
        let pr = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve("Lalala")
            },3000)
        })
        return pr
    }
}



axios.get()
    .then((data) => console.log(data))
    .then(() => {console.log(1)})
    .then(() => {console.log(2)})
    .catch((data) => console.error(data))













// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import App from './App';
// import {Provider} from 'react-redux';
// import {store} from './state/store';
//
// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
