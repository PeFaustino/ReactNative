import Reactotron from 'reactotron-react-native'

if (_DEV_) {
    const tron = Reactotron.configure({
        host: '10.110.71.159'
    }).useReactNative().connect();

    console.tron = tron;
}

