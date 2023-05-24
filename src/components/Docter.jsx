import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

function Docter({ docter }) {
  const navigatation = useNavigation();

  const handleClick = () => {
    console.log(docter);
    navigatation.navigate("DocterProfile", { name: docter.title });
  };

  return (
    <TouchableOpacity
      style={[
        tw`flex flex-row bg-white h-28 mb-2 mr-2 ml-2 rounded-xl shadow-md`,
      ]}
      onPress={handleClick}
    >
      <Image
        style={tw`w-28 h-28 rounded-l-xl mr-8`}
        source={require("../images/dr4.jpg")}
      />
      <View style={tw`justify-center`}>
        <Text style={tw`text-base font-bold mb-3`}>{docter.title}</Text>
        <View style={tw`flex-row`}>
          <Icon name="thumbs-up" size={20} color="#ccc">
            <Text style={tw`text-base`}>Likes {docter.likes}</Text>
          </Icon>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Docter;
