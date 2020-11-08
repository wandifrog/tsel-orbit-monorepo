import React from 'react'
import { View, ViewStyle, ViewProps, StyleProp } from 'react-native'

interface FlexRow {
  children: React.ReactNode
  props: StyleProp<ViewProps>
}

const FlexRow = ({ children, ...props }: FlexRow) => {
  const flewRowStyle: ViewStyle = {
    flexDirection: 'row'
  }
  let asd

  return (
    <View style={flewRowStyle} {...props}>
      {children}
    </View>
  )
}

export default FlexRow
