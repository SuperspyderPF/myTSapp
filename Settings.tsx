import React from 'react';
import { Button, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define the type for our navigation parameters
type RootStackParamList = {
  test: undefined;
  // Add other routes as needed
};

// Define the type for the navigation prop
type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'test'>;
};

const Settings: React.FC<NavigationProps> = () => {
  // Use the typed navigation hook
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'test'>>();

  const handle = () => {
    navigation.navigate('test');
  };

  return (
    <View>
      <Button title="ha" onPress={handle} />
    </View>
  );
};

export default Settings;
