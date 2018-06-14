import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from "prop-types";
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {withHomePageTemplate} from '../../components/pages/HomePageTemplate'
import {EmptyResultStatePage} from "../../components/pages/EmptyResultStatePage";
import {Page404} from "../../components/pages/Page404";
import {SearchResultsPage} from "../../components/pages/SearchResultsPage";

export default class Root extends Component {
    render() {
        const { store, persistor} = this.props;

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={withHomePageTemplate(EmptyResultStatePage)}/>
                            {/*<Route exact path='/search' component={withHomePageTemplate(SearchResultsPage)}/>*/}
                            <Route path='/search/:searchQuery?' component={withHomePageTemplate(SearchResultsPage)}/>
                            <Route path='*' component={Page404}/>
                        </Switch>
                    </Router>
                </PersistGate>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    /*history: PropTypes.object.isRequired,
    routes: PropTypes.node.isRequired*/
};