import AsyncStorage from '@react-native-community/async-storage';

export function setUserInfo(userInfo) {
  AsyncStorage.setItem('userInfo', JSON.stringify(userInfo || {}));
}
export async function getUserInfo() {
  const result = await AsyncStorage.getItem('userInfo');
  return JSON.parse(result);
}
