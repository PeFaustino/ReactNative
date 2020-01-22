import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import {
    Container,
    Avatar,
    Name,
    Bio,
    Header,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    UserInfo,
    Title,
    Author,
    RepButton
} from './styles';

Icon.loadFont();
export default class User extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    }

    state = {
        stars: [],
        loading: false,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const { navigation } = this.props;
        const user = navigation.getParam('user');

        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ stars: response.data, loading: false });
    }

    handleOpenWeb = (url, name) => {
        const { navigation } = this.props;
        navigation.navigate('MyWeb', { url, name });
    };

    render() {
        const { navigation } = this.props;
        const { stars, loading } = this.state;
        const user = navigation.getParam('user');

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>

                {loading ? (<ActivityIndicator size={30} color="#333" />) : (
                    <Stars
                        data={stars}
                        keyExtractor={star => String(star.id)}
                        renderItem={({ item }) => (
                            <Starred>
                                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                                <Info>
                                    <UserInfo>
                                        <Title>{item.name}</Title>
                                        <Author>{item.owner.login}</Author>
                                    </UserInfo>

                                    <RepButton onPress={() => this.handleOpenWeb(item.html_url, item.name)}>
                                        <Icon name="add-circle-outline" size={20} color="#FFF" />
                                    </RepButton>
                                </Info>
                            </Starred>
                        )}
                    >

                    </Stars>
                )}

            </Container>
        );
    }

}
