import React from 'react';
import { View, Text } from 'react-native';

import styles from './StyleSheet';

export default function LearnMore(props) {
  const { style } = props;
  return (
    <View style={style}>
      <Text style={styles.sectionTitle}>Learn More</Text>
      <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
    </View>
  );
}
