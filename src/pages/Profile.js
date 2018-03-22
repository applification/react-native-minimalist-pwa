import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Content, HeaderText, BodyText } from 'react-native-minimalist'
import Link from 'gatsby-link'

class Profile extends Component {
  render() {
    return (
      <ScrollView style={[{ backgroundColor: '#ffffff' }]}>
        <Content>
          <HeaderText>Profile</HeaderText>
          <BodyText>
            Some body text that wraps on to the next line with the correct
            padding.
          </BodyText>
        </Content>
      </ScrollView>
    )
  }
}

export default Profile
