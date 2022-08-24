import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Menu, Provider } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          sections={DATA}
          keyExtractor={(item,index)=> item+index}
          renderItem={({item}) => <Item title={item}/>}
          renderSectionHeader={({section: {title}})} => (
            <Text style={styles.header}>{title}</Text>
          )
          <Seperator />
        </ScrollView>  
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
