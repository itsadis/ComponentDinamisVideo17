import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Story = Props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri:Props.gambar,
        }}
        style={{width: 110, height: 110, borderRadius: 110/2}}
      />
      <Text style={{maxWidth: 110, textAlign: 'center' }}>{Props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story 
            judul="Youtube Channel"
            gambar="https://inixindojogja.co.id/wp-content/uploads/2019/03/0531-ReactNative-REDESIGN-Waldek_Social-b06279a7bcbce74f6aea33f6dccc06b9-980x513.png"
          />
          <Story 
            judul="Kumaha Coding"
            gambar="https://inixindojogja.co.id/wp-content/uploads/2019/03/0531-ReactNative-REDESIGN-Waldek_Social-b06279a7bcbce74f6aea33f6dccc06b9-980x513.png"
          />
          <Story 
            judul="Adisty"
            gambar="https://inixindojogja.co.id/wp-content/uploads/2019/03/0531-ReactNative-REDESIGN-Waldek_Social-b06279a7bcbce74f6aea33f6dccc06b9-980x513.png"
          />
          <Story 
            judul="Nurharumandari"
            gambar="https://inixindojogja.co.id/wp-content/uploads/2019/03/0531-ReactNative-REDESIGN-Waldek_Social-b06279a7bcbce74f6aea33f6dccc06b9-980x513.png"
          />
          <Story 
            judul="Cihuyyy"
            gambar="https://inixindojogja.co.id/wp-content/uploads/2019/03/0531-ReactNative-REDESIGN-Waldek_Social-b06279a7bcbce74f6aea33f6dccc06b9-980x513.png"
          />
        </View>  
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
