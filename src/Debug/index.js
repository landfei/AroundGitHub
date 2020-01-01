import React from 'react';
import { View, Text } from 'react-native';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';

import styles from './StyleSheet';

export default function Debug(props) {
  const { style } = props;
  return (
    <View style={style}>
      <Text style={styles.sectionTitle}>Debug</Text>
      <Text style={styles.sectionDescription}>
        <DebugInstructions />
      </Text>
    </View>
  );
}
