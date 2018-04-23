import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) =>
  (
    <View style={styles.containerStyle} behavior="padding">
      {props.children}
    </View >
  );

  const styles = StyleSheet.create({
    containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      backgroundColor: '#5cad14',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    distanceStyle:{
      alignSelf: 'flex-end'
    },
    supporterStyle: {
      marginTop: 5,
      fontSize: 12
    },
    headerContentStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },
    headerTextStyle: {
      fontSize: 20
    },
    thumbnailStyle: {
      height: 100,
      width: 100
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    },
    demo:{
      flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export { Card };
