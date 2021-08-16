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
        fontFamily:'bold'
    },
   
});

export default styles;