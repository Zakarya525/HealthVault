import { Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import tw from "twrnc";

const ArticleProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { article } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.doctorName}>{article.heading}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={article.image} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.sectionContent}>{article.description}</Text>
      </View>
    </View>
  );
};

export default ArticleProfile;
