import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Content, Header, Text } from 'react-native-minimalist'
import Link from 'gatsby-link'

class Profile extends Component {
  render() {
    return (
      <ScrollView style={[{ backgroundColor: '#ffffff' }]}>
        <Content>
          <Header>Profile</Header>
          <Text>
            Some body text that wraps on to the next line with the correct
            padding.
          </Text>
        </Content>
      </ScrollView>
    )
  }
}

export default Profile
