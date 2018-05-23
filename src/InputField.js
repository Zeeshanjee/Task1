import{ View,Text } from 'react-native';
import React from 'react';
import Button from 'react-native-button';

const InputField = () => {

        return (<View style={{
        flex:1,
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:"row",

        }}>
            <Button style={{
               fontSize:20,
                color:'blue',}}
              //  styleDisabled={{ color:'red'}}
            >
               Like</Button>

            <Button style={{
                fontSize:20,
                color:'blue',
            }}>
                Comment</Button>
        </View>);

};
export default InputField;