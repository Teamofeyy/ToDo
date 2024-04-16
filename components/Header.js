import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: '#00E0FF',
    },
    text: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'normal',
        textAlign: 'center',
    }
});
