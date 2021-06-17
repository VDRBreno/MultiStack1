import React from 'react';
import { View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import Button from 'ui/components/inputs/Button';

import { RootStackParamList } from 'ui/router/Router';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Index'>

interface IIndex {
  navigation: NavigationProp;
}

const Index: React.FC<IIndex> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button 
        mode='contained' 
        onPress={() => navigation.navigate('EncontrarDiaristas')}
      >
        Encontrar Diarista
      </Button>
    </View>
  );
}

export default Index;