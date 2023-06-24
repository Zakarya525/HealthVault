import uuid from "react-native-uuid";

export const articles = [
  {
    id: uuid.v4(),
    heading: "Diabetes",
    title: "Understanding Diabetes: Causes, Symptoms, and Management",
    description:
      "Diabetes is a chronic condition characterized by high blood sugar levels. Learn about the causes, symptoms, and effective management strategies for diabetes, including lifestyle changes, medication, and regular monitoring.",
    likes: "332",
    image: require("../images/article1.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Lung Cancer",
    title: "The Link Between Smoking and Lung Cancer",
    description:
      "Smoking is a major risk factor for developing lung cancer. Explore the harmful effects of smoking on lung health, the importance of quitting smoking, and available resources for smoking cessation.",
    likes: "332K",
    image: require("../images/article2.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Hypertension",
    title: "Managing Hypertension: Tips for Controlling High Blood Pressure",
    description:
      "Hypertension, or high blood pressure, is a common condition that increases the risk of heart disease and stroke. Discover effective tips for managing blood pressure through lifestyle modifications and medication.",
    likes: "33K",
    image: require("../images/article3.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "COVID-19",
    title: "Preventing the Spread of COVID-19: Essential Safety Measures",
    description:
      "COVID-19 is a highly contagious respiratory illness caused by the SARS-CoV-2 virus. Learn about crucial safety measures such as vaccination, wearing masks, practicing good hand hygiene, and maintaining physical distancing.",
    likes: "3K",
    image: require("../images/article4.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Stress Management",
    title: "Managing Stress: Techniques for a Healthier Mind and Body",
    description:
      "Chronic stress can have detrimental effects on both mental and physical health. Explore effective stress management techniques such as exercise, mindfulness, relaxation techniques, and seeking support from loved ones.",
    likes: "32K",
    image: require("../images/article5.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Allergies",
    title: "Understanding Allergies: Causes, Symptoms, and Treatment",
    description:
      "Allergies are hypersensitive reactions to substances such as pollen, dust mites, or certain foods. Discover common allergy triggers, symptoms, and available treatment options, including medication and allergen avoidance.",
    likes: "52K",
    image: require("../images/article6.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Exercise",
    title: "The Importance of Regular Exercise for Overall Health",
    description:
      "Regular exercise offers numerous benefits for physical and mental well-being. Learn about the positive effects of exercise on cardiovascular health, weight management, mood, and stress reduction.",
    likes: "500K",
    image: require("../images/article7.jpg"),
  },
];
