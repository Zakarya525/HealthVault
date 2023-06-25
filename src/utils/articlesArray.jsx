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

export const trendingArticles = [
  {
    id: uuid.v4(),
    heading: "Healthy Eating Habits",
    title: "Developing a Balanced Diet: Tips for Healthy Eating",
    description:
      "Eating a balanced diet is essential for overall health and well-being. Discover tips for incorporating nutrient-rich foods, portion control, meal planning, and mindful eating into your daily routine.",
    likes: "1.2K",
    image: require("../images/trending1.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Heart Health",
    title: "Taking Care of Your Heart: Preventing Cardiovascular Diseases",
    description:
      "Maintaining a healthy heart is vital for a long and active life. Learn about the risk factors for cardiovascular diseases, the importance of regular exercise, heart-healthy nutrition, and strategies for reducing stress.",
    likes: "862",
    image: require("../images/trending2.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Healthy Aging",
    title: "Aging Gracefully: Tips for Healthy Aging and Longevity",
    description:
      "Aging is a natural process, and adopting healthy habits can promote graceful aging. Explore strategies for maintaining physical and mental well-being, managing age-related conditions, and enjoying a fulfilling lifestyle as you age.",
    likes: "1.1K",
    image: require("../images/trending3.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Gut Health",
    title:
      "Nurturing Your Gut: Importance of Gut Health and Digestive Wellness",
    description:
      "A healthy gut contributes to overall health and immunity. Discover the benefits of gut-friendly foods, probiotics, fiber-rich diet, and lifestyle habits that promote optimal digestion and gut microbiome balance.",
    likes: "742",
    image: require("../images/trending4.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Brain Health",
    title: "Boosting Brain Power: Strategies for Cognitive Health",
    description:
      "Keeping your brain sharp and healthy is vital for cognitive function. Explore brain-boosting activities, memory-enhancing techniques, brain-healthy foods, and lifestyle habits that support long-term brain health.",
    likes: "984",
    image: require("../images/trending5.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Weight Management",
    title: "Achieving and Maintaining a Healthy Weight: Strategies and Tips",
    description:
      "Maintaining a healthy weight is important for overall health and disease prevention. Discover effective strategies for weight management, including portion control, mindful eating, regular physical activity, and behavior modification.",
    likes: "1.5K",
    image: require("../images/trending6.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Immune System Boost",
    title: "Strengthening Your Immune System: Natural Ways to Boost Immunity",
    description:
      "A strong immune system is essential for fighting off illnesses and infections. Learn about immune-boosting foods, lifestyle habits, supplements, and practices that support a robust immune system.",
    likes: "1.3K",
    image: require("../images/trending6.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Mindfulness and Meditation",
    title: "The Power of Mindfulness: Cultivating Calmness and Clarity",
    description:
      "Practicing mindfulness and meditation can bring numerous benefits to mental and emotional well-being. Explore mindfulness techniques, meditation practices, and tips for incorporating mindfulness into daily life.",
    likes: "942",
    image: require("../images/trending6.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Men's Health",
    title: "Promoting Men's Health: Essential Tips and Screening Guidelines",
    description:
      "Men have unique health concerns that require attention and care. Discover essential tips for men's health, including preventive screenings, healthy lifestyle choices, and addressing common men's health issues.",
    likes: "872",
    image: require("../images/trending6.jpg"),
  },
  {
    id: uuid.v4(),
    heading: "Women's Health",
    title: "Empowering Women's Health: Key Topics and Wellness Strategies",
    description:
      "Women's health encompasses various aspects, from reproductive health to hormonal changes. Explore topics such as menstrual health, pregnancy, menopause, breast health, and strategies for maintaining overall wellness.",
    likes: "1.2K",
    image: require("../images/trending6.jpg"),
  },
];
