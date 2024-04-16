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
        backgroundColor: 'rgb(5, 37, 63)',
    },
    text: {
        fontSize: 18,
        color: '#00E0FF',
        fontStyle: 'normal',
        textAlign: 'center',
    }
});
