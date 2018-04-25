import React, { Component } from 'react'
import {
  Button,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native'
import { Link, navigateTo } from 'gatsby-link'
import { Header, Photo } from 'react-native-minimalist'

import NavBar from '../components/navbar'

const windowWidth = Dimensions.get('window').width

class Detail extends Component {
  constructor(props) {
    super(props)
    this._opacity = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this._opacity, {
      toValue: 1,
      duration: 200,
    }).start()
  }

  buttonPress = () => {
    alert('hey')
  }

  render() {
    const containerStyles = {
      flex: 1,
      opacity: this._opacity,
    }

    return (
      <Animated.ScrollView style={containerStyles}>
        <NavBar style={styles.navbar} arrowBack={true} />
        <View style={styles.header}>
          <Header>Detail page</Header>
          <Photo
            imageURL={
              'https://scontent-lhr3-1.cdninstagram.com/vp/6609ff65fc6c75f412ae237ce05e6f70/5B6FE8FF/t51.2885-15/e35/26152588_1188914984576015_4446380707253583872_n.jpg?se=7'
            }
          />
          <Button color="red" title="Press Me!" onPress={this.buttonPress} />
        </View>
      </Animated.ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    height: 812,
  },
  navbar: {
    top: 0,
    height: 50,
  },
  tabs: {
    top: 51,
    flex: 1,
  },
})

export default Detail
