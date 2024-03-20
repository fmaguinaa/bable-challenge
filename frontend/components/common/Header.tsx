import { Image, SafeAreaView, View } from "react-native";

export default () => (
  <SafeAreaView>
    <View>
      <Image source={require("../../assets/logo.png")} />
    </View>
  </SafeAreaView>
);
