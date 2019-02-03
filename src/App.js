import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header/Header'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div className='App'>
                        <Header />
                        {routes}
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

export default App
