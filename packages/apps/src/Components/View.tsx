import React from 'react'
import { View as RNView, ViewProps } from 'react-native'

interface View {
  children: React.ReactNode;
  props: ViewProps
}

const View: (arg: View) => JSX.Element = ({
  children,
  ...props
}) => {



  return <RNView {...props}>{children}</RNView>
}

const Asd = () => {

  return <View style={{ backgroundColor: 'red' }} />
}

export default View
