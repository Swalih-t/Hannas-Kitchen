import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import About from './Components/About';


class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </>
        )
    }
}

export default App;