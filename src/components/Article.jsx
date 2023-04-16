import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

function Article({ docter }) {
  return (
    <TouchableOpacity
      style={[tw`flex flex-row bg-white w-58 h-28 mb-2 ml-2 shadow-md`]}
    >
      <Image
        style={tw`w-28 h-28 rounded-l-xl mr-4`}
        source={require(`../images/cv19.jpg`)}
      />
      <View style={tw`justify-center bg-white p-2 rounded-xl`}>
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

export default Article;
