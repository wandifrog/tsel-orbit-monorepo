import React from 'react'
import { View as RNView } from 'react-native'

interface View {
  children: React.ReactNode
}

const View = ({ children, ...props }: View) => {
  const asd = `asdasd ${1 + 2}`
  const arr = [1, 23, 4]
  const user = {
    name: 'John Doe',
    age: 30
  }

  const stunt = arr.map((x) => x)
  return <RNView {...props}>{children}</RNView>
}

export default View
