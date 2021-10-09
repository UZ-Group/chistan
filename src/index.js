import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {axios} from 'axios'
import App from "./App";
import ErrorBoundary from './Error';
import {SWRConfig} from 'swr';

ReactDOM.render(
    <ErrorBoundary>
        <Suspense fallback={<h1>لطفا شکیبا باشید</h1>}>
            <React.StrictMode>
                <SWRConfig value={{fetcher: (url)=>axios(url).then(res=>res.tasks)}}>
                    <App/>
                </SWRConfig>
            </React.StrictMode>
        </Suspense>
    </ErrorBoundary>
, document.getElementById('root')
)
;
