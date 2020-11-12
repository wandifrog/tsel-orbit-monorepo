import React from 'react'
import { View, ViewStyle, ViewProps } from 'react-native'

interface FlexRow {
  children: React.ReactNode
  props: ViewProps,
}

const FlexRow = ({
  children,
  ...props
}: FlexRow) => {

  const flewRowStyle: ViewStyle = {
    flexDirection: 'row'
  }

  console.log(123)

  return (
    <View style={flewRowStyle} {...props}>
      {children}
    </View>
  )
}

export default FlexRow
