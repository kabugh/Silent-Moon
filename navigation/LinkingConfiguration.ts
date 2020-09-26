import * as Linking from "expo-linking";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Welcome: {
            screens: {
              WelcomeScreen: "welcome",
              ChooseTopicScreen: "chooseTopic",
            },
          },
          Home: {
            screens: {
              HomeScreen: "home",
              HomeCategoryScreen: "homeCategory",
              DetailsCategoryScreen: "detailsCategory",
            },
          },
          Authentication: {
            screens: {
              AuthenticationScreen: "authentication",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
