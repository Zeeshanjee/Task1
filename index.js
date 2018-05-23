import { AppRegistry,Text,View,Image,StyleSheet,TextInput,ScrollView } from 'react-native';
import React,{Component} from 'react';
import AgeAndName from './src/AgeAndName';
import Header from './src/Header';
import InputField from'./src/InputField';

const App =() => {

    const styles= StyleSheet.create({
        Stretch: {
            width: 150,
            height: 300,
        }
    });

     {
    return (
        <ScrollView>



        <View style={{borderColor:'blue', borderWidth:0, flex:1,justifyContent:'center'}}>

            <Header/>

           <View style={{
                flexDirection:'row'

        }}>
            <Image

                source={require('./20180511_121723.jpg')}
                style={styles.Stretch}
            />

            <AgeAndName/>


        </View>



            <InputField/>
            <TextInput style={{
                fontSize:20,height:50, borderColor:'gray',borderWidth:0.4
            }}
            />
            <Header/>

            <View style={{
                flexDirection:'row'

            }}>
                <Image

                    source={require('./20180522_082605.jpg')}
                    style={styles.Stretch}
                />
                <AgeAndName/>

            </View>



            <InputField/>
            <TextInput style={{
                fontSize:20,height:50, borderColor:'gray',borderWidth:0.4
            }}
            />
        </View>
        </ScrollView>

    );
        };
};
AppRegistry.registerComponent('Task1', () => App);