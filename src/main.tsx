import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.css'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'
import apolloClient from './utils/apollo-client/apollo-client.config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Router>
         <Provider store={store}>
            <ApolloProvider client={apolloClient}>
               <App />
            </ApolloProvider>
         </Provider>
      </Router>
   </React.StrictMode>
)
