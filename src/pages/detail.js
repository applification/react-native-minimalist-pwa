import React, { Component } from 'react'
import { Button, ScrollView, View, StyleSheet, Dimensions } from 'react-native'
import { Link, navigateTo } from 'gatsby-link'
import { HeaderText, Photo } from 'react-native-minimalist'

import NavBar from '../components/navbar'

class Detail extends Component {
  buttonPress = () => {
    alert('hey')
  }

  render() {
    return (
      <ScrollView style={styles.app}>
        <NavBar style={styles.navbar} arrowBack={true} />
        <View style={styles.header}>
          <HeaderText>Detail page</HeaderText>
          <Photo
            imageURL={
              'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
            }
          />
          <Button color="red" title="Press Me!" onPress={this.buttonPress} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
