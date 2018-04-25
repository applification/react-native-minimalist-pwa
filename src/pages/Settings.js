import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Content, Header, Text } from 'react-native-minimalist'
import Link from 'gatsby-link'

class Settings extends Component {
  render() {
    return (
      <ScrollView style={[{ backgroundColor: '#ffffff' }]}>
        <Content>
          <Header>Settings</Header>
          <Text>
            Some body text that wraps on to the next line with the correct
            padding.
          </Text>
        </Content>
      </ScrollView>
    )
  }
}

export default Settings
