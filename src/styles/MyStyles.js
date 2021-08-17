import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container_login:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#1DB877"
    },
    container_img:{
        marginTop:70,
    },
    img_login:{
        alignItems: 'center',
        height: 220,
        width: 180,
    },
    container_button:{
        marginTop:20,
        width: '80%',
        height: 60,
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        height: '100%',
        padding: 10,
        backgroundColor: '#666',
        paddingLeft: 20,
        borderRadius: 5,
    },
    text_titulo:{
        marginTop: 10,
        marginBottom:30,
        fontSize:36,
        fontWeight:'700',
        color:'#FFFFFF',
    },
    containerHome: {
        flex: 1,
        alignItems: 'center'
    },
    container_header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1DB863',
        width: '100%',
        height: 140,
    },
    text: {
        marginTop: 50,
        color: '#fff'
    },
    text_title: {
        fontSize: 24,
    },
    container_input: {
        margin: -30,
        width: '85%',
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    inputText: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        paddingLeft: 20,
        color: '#808080',
        fontSize: 22,

    },
    buttonTask: {
        padding: 15,
        backgroundColor: '#fff',
        borderLeftWidth: 1,
        borderLeftColor: '#808080',
    },
    list_tasks: {
        marginTop: 50,
        alignItems: 'center',
    },
   
});

export default styles;