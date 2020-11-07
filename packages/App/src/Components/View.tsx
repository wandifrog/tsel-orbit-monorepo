import React from 'react'
import { View as RNView } from 'react-native';



interface View {
  children: string
}


const View = ({
  children,
  ...props
}: View) => <RNView {...props}>{children}</RNView>


export default View
