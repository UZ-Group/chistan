import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import {axios} from 'axios';
import App from "./App";


ReactDOM.render(
        <Suspense fallback={<div className={'wating'}>در حال بار گذاری...</div>}>
            <React.StrictMode>
                    <App/>
            </React.StrictMode>
        </Suspense>
, document.getElementById('root')
)
;


