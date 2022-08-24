import { StyleSheet } from 'react-native';
import React from "react";
import { Button, Alert, SectionList, SafeAreaView, ScrollView, StatusBar } from "react-native";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


//SEPERATOR LINE
const Separator = () => (
  <View style={styles.separator} />
);

//LIST DATA
const DATA = [
  {
    title: "About IST Nav",
    data: ["IST Nav aims to help guide you through the Institute of Space Technology in an effective and efficient way.", "This is an early release of the application and is yet to grow tremendously."]
  },
  {
    title: "IST",
    data: ["The Institute of Space Technology (also known as IST) (Urdu: ادارہ خلائی ٹیکنالوجی) is a public university located in Islamabad, Pakistan. It is focused on the study of astronomy, aerospace engineering and astronautics. [2]", "Established in 2002 under the auspices of the Pakistan National Space Agency. IST offers a wide array of undergraduate and graduate degrees in partnership of Beihang University and University of Surrey.[2] Since 2008, IST has an ISO certified management standard. IST is based on a 573 acre campus on the outskirts of Islamabad.[2][3] It is one of the top institutions as ranked by the Higher Education Commission.[4] Materials Inspection, Testing, and Characterization of Materials, a three-day workshop, was organised from March 8-10, 2022 at the Department of Materials Science and Engineering, (IST) Islamabad.[5]"]
  }
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
      <Separator />
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
    marginTop: 16,
    fontFamily: 'space-mono'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    marginHorizontal: 2,
  
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '100',
    fontFamily: 'space-mono'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    overlayColor: 'rgba(255,255,255,0.05)',
  },
  header: {
    fontSize: 30,
    color: 'white'
  },
  item: {
      padding: 10,
      marginVertical: 2
    },

});
