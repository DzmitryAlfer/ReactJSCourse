import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from "prop-types";
import { PersistGate } from 'redux-persist/integration/react'
import { Route, Switch } from 'react-router-dom'
import {withHomePageTemplate} from '../../components/pages/HomePageTemplate'
import {EmptyResultStatePage} from "../../components/pages/EmptyResultStatePage";
import {Page404} from "../../components/pages/Page404";
import {SearchResultsPage} from "../../components/pages/SearchResultsPage";
import {FilmDescriptionPage} from "../../components/pages/FilmDescriptionPage";

export default class Root extends Component {
    render() {
        const { Router, store, persistor, requestLocation, context} = this.props;

        return (
           /*<Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router context={context} location={requestLocation}>
                        <Switch>
                            <Route exact path='/' component={withHomePageTemplate(EmptyResultStatePage)}/>
                            <Route path='/search/:searchQuery?' component={withHomePageTemplate(SearchResultsPage)}/>
                            <Route path='/film/:movieId' component={FilmDescriptionPage}/>
                            <Route path='*' component={Page404}/>
                        </Switch>
                    </Router>
                </PersistGate>
            </Provider>*/

            <Provider store={store}>
                    <Router context={context} location={requestLocation}>
                        <Switch>
                            <Route exact path='/' component={withHomePageTemplate(EmptyResultStatePage)}/>
                            <Route path='/search/:searchQuery?' component={withHomePageTemplate(SearchResultsPage)}/>
                            <Route path='/film/:movieId' component={FilmDescriptionPage}/>
                            <Route path='*' component={Page404}/>
                        </Switch>
                    </Router>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object,
    context: PropTypes.object,
    Router: PropTypes.func,
    location: PropTypes.string,
};