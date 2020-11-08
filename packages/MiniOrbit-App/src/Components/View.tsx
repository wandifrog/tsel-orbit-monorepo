import React from 'react'
import { View as RNView } from 'react-native'

interface View {
  children: React.ReactNode;
}

const View = ({ children, ...props }: View) => {
  const asd = `asdasd ${1 + 2}`
  const arr: number[] = [1, 23, 4, 2, 1, 23, 123123, 213]
  const user = {
    name: 'John Doe',
    age: 30
  }
  console.log(123)
  var asd2 = 123
  var asdas = 123
  alert(asd2)

  alert(123)

  const stunt = arr.map((x) => x)
  return <RNView {...props}>{children}</RNView>
}

export default View
