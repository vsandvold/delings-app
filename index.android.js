import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  StatusBar,
} from 'react-native'

import routes from './routes'
import cssVar from './cssVar'

const DelingsApp = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor='black'/>
    <Navigator
        initialRoute={routes.initialRoute}
        renderScene={routes.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
      />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

AppRegistry.registerComponent('DelingsApp', () => DelingsApp)
