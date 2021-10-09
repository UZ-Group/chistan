import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import {axios} from 'axios';
import App from "./App";

ReactDOM.render(
        <Suspense fallback={<h1>لطفا شکیبا باشید</h1>}>
            <React.StrictMode>
                    <App/>
            </React.StrictMode>
        </Suspense>
, document.getElementById('root')
)
;
