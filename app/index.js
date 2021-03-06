/**
 * Created by alvaroviebrantz on 06/04/16.
 * @flow
 */
'use strict';

import React, {StyleSheet, Component} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import {Styles} from './styles';

import { Scene, Router} from 'react-native-router-flux';

import HomePage from './pages/HomePage';
import TrendingGiphyPage from './pages/TrendingGiphyPage';
import SearchGiphyPage from './pages/SearchGiphyPage';

const store = configureStore();

export default class GifPartyApp extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Router navigationBarStyle={styles.header} titleStyle={styles.headerTitle} backButtonTextStyle={styles.headerTitle} sceneStyle={styles.content}>
                    <Scene key="root">
                        <Scene key="home" initial={true} component={HomePage} title="GifParty" />
                        <Scene key="trending" component={TrendingGiphyPage} title="Trending"/>
                        <Scene key="search" component={SearchGiphyPage} title="Search"/>
                    </Scene>
                </Router>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        flex: 1,
        borderBottomColor: Styles.primaryColorDarker
    },
    headerTitle:{
        color: Styles.primaryColorDarker
    },
    content:{
        backgroundColor: 'white'
    }
});
