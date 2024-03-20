import React from "react"
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native"

export default ({children, style} : {children : React.ReactNode, style: StyleProp<ViewStyle>}) => (
  <SafeAreaView>
    <View style={style}>
      {children}
    </View>
  </SafeAreaView>
)
