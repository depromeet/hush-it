// import { AppRegistry } from 'react-native';
import url from 'url';
import AsyncStorage from '@react-native-community/async-storage';
import {getStorybookUI, configure} from '@storybook/react-native';
import {NativeModules} from 'react-native';
import {loadStories} from './storyLoader';

const {hostname} = url.parse(NativeModules.SourceCode.scriptURL || '');

import './rn-addons';

// import stories
configure(() => {
  loadStories();
  require('../src/navigations/RootNavigator.rootstories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
  host: hostname as string,
  onDeviceUI: true,
  resetStorybook: true,
  shouldPersistSelection: true,
  shouldDisableKeyboardAvoidingView: true,
});

export default StorybookUIRoot;
