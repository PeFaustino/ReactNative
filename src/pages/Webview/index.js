import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';


export default class MyWeb extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('name'),
    });

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    }


    render() {
        const { navigation } = this.props;
        const url = navigation.getParam('url');
        return (
            <WebView
                source={{ uri: url }}
            />
        )
    }

}
