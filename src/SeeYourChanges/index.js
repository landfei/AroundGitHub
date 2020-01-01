import React from 'react';
import { View, Text } from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import styles from './StyleSheet';

export default function SeeYourchanges(props) {
  const { style } = props;
  return (
    <View style={style}>
      <Text style={styles.sectionTitle}>See Your Changes</Text>
      <Text style={styles.sectionDescription}>
        <ReloadInstructions />
      </Text>
    </View>
  );
}
