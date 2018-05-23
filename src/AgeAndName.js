import{ Text,View  } from 'react-native';
import React from 'react';

const AgeAndName = () => {
    return(
        <View style={{borderColor: 'red', borderWidth: 1, flex: 1, justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center', fontSize: 20}}>Name</Text>
            <Text style={{alignSelf: 'center', fontSize: 20}}>Age</Text>

        </View>
    );

};
export default AgeAndName;