import { Text,View } from 'react-native';
import React from 'react';
const Header = () => {
    const {textStyle,viewStyle}= styles;
    return (<View style={viewStyle}><Text style={textStyle}>Welcome</Text><Text style={textStyle}> zeeshan </Text></View>);
};
const styles ={
    viewStyle:{
        backgroundColor:'#F8F8F8',
        //pod in vertical
        justifyContent:'center',
        // fro left-right
        height:100,
width:110,
        borderWidth:1,
        alignSelf:'center',
        padding:5,
        //for solid border shadow
        // shadowColor:'#000',
        //shadowOffset:{width:0,height:2},
        //shadowOpacity:0.2,

        elevation:2,
        position:'relative'
    },
    textStyle :
        {
            fontSize:22,
            alignSelf:'center',
        }

};
export default Header;