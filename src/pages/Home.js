import React, { Component } from 'react'
import {
  AsyncStorage,
  Button,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {
  Content,
  HeaderText,
  BodyText,
  Profile,
  Photo,
  PhotoInfo,
} from 'react-native-minimalist'
import Link from 'gatsby-link'
import IconCircle from '../components/icons/circle'
const Icon = <IconCircle style={{ color: '#000000', height: '1.6em' }} />

class FirstRoute extends Component {
  componentDidMount() {
    AsyncStorage.getItem('YPos', (err, result) => {
      console.log('res', result)
      if (result !== null) {
        this.scrollView.scrollTo({ y: result, animated: false })
      }
    })
  }

  render() {
    return (
      <ScrollView
        ref={scrollView => (this.scrollView = scrollView)}
        onScroll={event => {
          try {
            AsyncStorage.setItem('YPos', event.nativeEvent.contentOffset.y)
          } catch (error) {
            console.log(error)
          }
        }}
      >
        <Content>
          <Link to="/detail">
            <PhotoInfo
              photo={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
              }}
              title="bentierney"
              subtitle="Guitar Center 1"
              icon={Icon}
            />
            <Photo
              imageURL={
                'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
              }
            />
          </Link>
          <Link to="/detail">
            <PhotoInfo
              photo={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
              }}
              title="bentierney"
              subtitle="Guitar Center 2"
              icon={Icon}
            />
            <Photo
              imageURL={
                'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
              }
            />
          </Link>
          <Link to="/detail">
            <PhotoInfo
              photo={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
              }}
              title="bentierney"
              subtitle="Guitar Center 3"
              icon={Icon}
            />
            <Photo
              imageURL={
                'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
              }
            />
          </Link>
          <Link to="/detail">
            <PhotoInfo
              photo={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
              }}
              title="bentierney"
              subtitle="Guitar Center 4"
              icon={Icon}
            />
            <Photo
              imageURL={
                'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
              }
            />
          </Link>
        </Content>
      </ScrollView>
    )
  }
}

export default FirstRoute
