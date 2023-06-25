import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "twrnc";

import { colors } from "../../utils";
import MIcon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Article from "./Article";
import { articles, trendingArticles } from "@utils/articlesArray";

const Articles = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <MIcon
          name="hand-holding-medical"
          size={35}
          color={colors.primaryColor}
        />
        <Text style={styles.headingLarge}>Articles</Text>
      </View>
      <View style={tw`flex-row justify-between`}>
        <Text style={styles.headingMedium}>Trending</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DocterList")}>
          <Text
            style={{
              color: colors.primaryColor,
              marginTop: 10,
              marginEnd: 10,
              fontFamily: "Urbanist_700Bold",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {trendingArticles.map((article) => {
          return (
            <View key={article.id}>
              <Image
                style={tw`w-80 h-48 m-5 rounded-xl`}
                source={article.image}
              />
              <Text
                style={styles.mealTypeText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {article.description}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      <Text style={styles.headingMedium}>Articles</Text>

      <View>
        <ScrollView style={styles.scrollView}>
          {articles.map((article) => {
            return <Article key={article.id} article={article} />;
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  headingLarge: {
    fontSize: 25,
    fontFamily: "Urbanist_700Bold",
    marginTop: 30,
    marginBottom: 20,
    marginStart: 10,
  },

  headingMedium: {
    fontSize: 20,
    fontFamily: "Urbanist_700Bold",
    marginTop: 10,
    marginStart: 10,
    marginBottom: 5,
  },

  card: {
    backgroundColor: "#fff",
    width: 270,
    height: 100,
    marginTop: -80,
    marginStart: 43,
    marginEnd: 30,
    borderRadius: 15,
  },

  innerTextStyle: {
    fontFamily: "Urbanist_700Bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
  },
  mealTypeView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  mealTypeText: {
    fontFamily: "Urbanist_700Bold",
    marginLeft: 20,
    width: 350,
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  scrollView: {
    height: 500,
  },
});

export default Articles;
