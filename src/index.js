/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import { Header, LearnMoreLinks, Colors } from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { getUserInfo } from './Utils';

import StepOne from './StepOne';
import SeeYourChanges from './SeeYourChanges';
import Debug from './Debug';
import LearnMore from './LearnMore';
import Login from './Login';

const Home = () => {
  return (
    <>
      {/* <Link to="/login" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text style={styles.sectionTitle}>Login</Text>
      </Link> */}
      <Header />
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <View style={styles.body}>
        <StepOne style={styles.sectionContainer} />
        <SeeYourChanges style={styles.sectionContainer} />
        <Debug style={styles.sectionContainer} />
        <LearnMore style={styles.sectionContainer} />
        <LearnMoreLinks />
      </View>
    </>
  );
};

const Main = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    (async () => {
      const userInfo = await getUserInfo();
      setIsLogin(Boolean(userInfo));
    })();
  }, []);
  let HomePage = Home;
  if (!isLogin) {
    HomePage = Login;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <HomePage />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const App = createStackNavigator({
  Main: { screen: Main },
  Login: { screen: Login },
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default createAppContainer(App);
