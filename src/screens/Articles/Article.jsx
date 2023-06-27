import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { colors, fonts } from "../../utils";
import { Image } from "react-native-elements";

function Article({ article }) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("ArticleProfile", { article: article });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Image
        style={styles.image}
        source={article.image}
        resizeMode="cover"
        PlaceholderContent={
          <ActivityIndicator size="large" color={colors.aliceblue} />
        }
      />
      <View style={styles.contentContainer}>
        <Text style={styles.headingText}>{article.heading}</Text>
        <Text style={styles.nameText} numberOfLines={2} ellipsizeMode="tail">
          {article.title}
        </Text>
        <View style={styles.likesContainer}>
          <Text style={styles.specialityText}>Likes {article.likes}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Article;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 120,
    marginBottom: 12,
    marginRight: 12,
    marginLeft: 12,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  nameText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    marginBottom: 5,
  },
  headingText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    marginBottom: 3,
  },
  specialityText: {
    fontSize: 16,
    color: "#666666",
  },
});
