import React, { Component } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Tabs from 'antd-mobile/lib/tabs'

import NavBar from '../components/navbar'
import Home from './Home'
import Profile from './Profile'
import Settings from './Settings'

import IconCamera from '../components/icons/camera'
import IconAlerts from '../components/icons/alerts'
import IconCircle from '../components/icons/circle'

import 'antd-mobile/lib/tabs/style/css'

const tabs = [
  { title: 'Home', sub: '1' },
  { title: 'Profile', sub: '2' },
  { title: 'Settings', sub: '3' },
]

const styles = StyleSheet.create({
  view: {
    height: 812 - 90,
  },
  navbar: {
    top: 0,
    height: 50,
  },
})

class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Tabs
          swipeable={true}
          useOnPan={false}
          distanceToChangeTab={0.2}
          tabBarPosition="top"
          tabBarBackgroundColor="#FAFAFA"
          tabBarActiveTextColor="red"
          tabBarInactiveTextColor="#666"
          tabBarUnderlineStyle={{ borderColor: 'red' }}
          tabs={tabs}
          initialPage={0}
          renderTab={tab => {
            switch (tab.title) {
              case 'Home':
                return <IconCamera />

              case 'Profile':
                return <IconCircle />

              case 'Settings':
                return <IconAlerts />
            }
          }}
        >
          <View style={styles.view}>
            <Home />
          </View>
          <View style={styles.view}>
            <Profile />
          </View>
          <View style={styles.view}>
            <Settings />
          </View>
        </Tabs>
      </React.Fragment>
    )
  }
}

export default IndexPage
