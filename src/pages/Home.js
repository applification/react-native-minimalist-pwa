import React, { Component } from 'react'
import {
  AsyncStorage,
  Button,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Content, Profile, Photo, PhotoInfo } from 'react-native-minimalist'
import { IconCircle } from 'react-native-minimalist-icons'
import Link from 'gatsby-link'

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
                'https://scontent-lhr3-1.cdninstagram.com/vp/157f88d298739845194d19096bc9834f/5B6F2F47/t51.2885-15/e35/28157443_404441573303128_568809590188146688_n.jpg?se=7'
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
                'https://scontent-lhr3-1.cdninstagram.com/vp/6609ff65fc6c75f412ae237ce05e6f70/5B6FE8FF/t51.2885-15/e35/26152588_1188914984576015_4446380707253583872_n.jpg?se=7'
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
                'https://scontent-lhr3-1.cdninstagram.com/vp/6609ff65fc6c75f412ae237ce05e6f70/5B6FE8FF/t51.2885-15/e35/26152588_1188914984576015_4446380707253583872_n.jpg?se=7'
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
                'https://scontent-lhr3-1.cdninstagram.com/vp/6609ff65fc6c75f412ae237ce05e6f70/5B6FE8FF/t51.2885-15/e35/26152588_1188914984576015_4446380707253583872_n.jpg?se=7'
              }
            />
          </Link>
        </Content>
      </ScrollView>
    )
  }
}

export default FirstRoute
