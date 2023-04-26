import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import colors from '../misc/colors';

const Note = ({item}) => {
    const {title, destination, date, rick, desc} = item;
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
            <Text numberOfLines={3}>{destination}</Text>
            <Text>{date}</Text>
            <Text>{rick}</Text>
            <Text numberOfLines={3}>{desc}</Text>
        </View>
    );
}

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY,
        width: width / 2 - 10,
        justifyContent: 'space-between',
        padding: 8,
        borderRadius: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.LIGHT,
    },
})

export default Note;
