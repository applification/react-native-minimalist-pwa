import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import NavBar from 'antd-mobile/lib/nav-bar'
import Icon from 'antd-mobile/lib/icon'
import { Link, navigateTo } from 'gatsby-link'

import 'antd-mobile/lib/nav-bar/style/css'
import 'antd-mobile/lib/icon/style/css'

const UINavBar = props => (
  <NavBar
    style={{ backgroundColor: '#FAFAFA', color: '#000000' }}
    icon={
      props.arrowBack ? (
        <Icon type="left" onClick={() => navigateTo('/')} />
      ) : null
    }
    rightContent={[
      <Icon key="0" type="ellipsis" style={{ marginRight: '16px' }} />,
    ]}
  >
    Instagrammy
  </NavBar>
)

export default UINavBar
