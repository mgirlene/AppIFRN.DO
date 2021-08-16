import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import { Input } from '../components/Input'
import styles from '../styles/MyStyles';
import api from '../service/IFAPI'

export default function Login({navigation}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        var params = new URLSearchParams();
        params.append('username', login);
        params.append('password', password);
        

        try {
            const responseToken = await api.post('autenticacao/token/', params);
            const {token} = responseToken.data;
            console.log(token)
            const responseDataUser = await api.get('minhas-informacoes/meus-dados/',{
                headers:{
                    'authorization': 'jwt ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log(responseDataUser.data);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error = ' + error.message);
        }
        
        
    }

    return (
        <View style={styles.container_login}>
            
            <View style={styles.container_img}>
                <Image style={styles.img_login} source={require('../images/if.png')}/>
            </View>
            <Text style={styles.text_titulo}>IFRN.DO</Text>
            <View>
                <Input label='Login' onChangeText = {text => setLogin(text)}/>
                <Input label='Senha' senha={true} onChangeText = {text => setPassword(text)}/>
            </View>
            <View style={styles.container_button}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={[{color:'#fff'}, {fontSize:21}]}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
