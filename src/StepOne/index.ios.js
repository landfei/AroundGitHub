import React from 'react';
import { View, Text } from 'react-native';

import styles from './StyleSheet';

export default function StepOne(props) {
  const { style } = props;
  return (
    <View style={style}>
      <Text style={styles.sectionTitle}>Step One ios</Text>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.js</Text> to change this and then come back to see your edits.
      </Text>
    </View>
  );
}
