import React, { ReactNode } from 'react'
import { View, ViewStyle, ViewProps } from 'react-native'

interface FlexRow {
  children: ReactNode
  props: ViewProps
}

const FlexRow = ({ children, ...props }: FlexRow) => {
  const flewRowStyle: ViewStyle = {
    flexDirection: 'row'
  }

  return (
    <View style={flewRowStyle} {...props}>
      {children}
    </View>
  )
}

export default FlexRow
