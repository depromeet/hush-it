import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootStackNavigator from '~/navigations/RootNavigator';
import {persistor, store} from '~/stores/rootStore';

const fullFlex = {
  flex: 1,
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const StorybookUI = require('./storybook').default;

const EntryApp =
  process.env.STORYBOOK === 'true' ? (
    StorybookUI
  ) : (
    <SafeAreaView style={fullFlex}>
      <RootStackNavigator />
    </SafeAreaView>
  );

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={fullFlex}>
          <SafeAreaProvider>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
            {process.env.STORYBOOK === 'true' ? <StorybookUI /> : EntryApp}
          </SafeAreaProvider>
        </View>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
