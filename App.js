import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Pressable,
  StatusBar,
  ActivityIndicator,
  Alert,
  // Dimensions,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import Slider from "./Components/slider";
import useFetch from "./utils/useFetch";

const other = {
  results: [
    {
      id: 1,
      primaryImage: {
        url: "https://m.media-amazon.com/images/M/MV5BNWU5ZDRmMWItZGU0NC00NzZjLTgzYjctY2RlMzI3OTNkN2U5XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg",
      },
      titleText: {
        text: "Animal",
      },
      releaseDate: {
        day: 1,
        month: 12,
        year: 2023,
      },
    },
    {
      id: 2,
      primaryImage: {
        url: "https://assets.gadgets360cdn.com/pricee/assets/product/202311/Sam-Bahadur_1699944687.jpg",
      },
      titleText: {
        text: "Sam Bahadur",
      },
      releaseDate: {
        day: 1,
        month: 12,
        year: 2023,
      },
    },
    {
      id: 3,
      primaryImage: {
        url: "https://m.media-amazon.com/images/M/MV5BNjdiNjg5NDQtYTU1Ny00M2VkLWE5OTEtYWI2YWIwNTA2NTZlXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
      },
      titleText: {
        text: "Tiger 3",
      },
      releaseDate: {
        day: 12,
        month: 11,
        year: 2023,
      },
    },
    {
      id: 4,
      primaryImage: {
        url: "https://m.media-amazon.com/images/M/MV5BMjMwOTk3ZTYtMTc4Zi00NDFiLWFlZGMtNTVkMTU3MDY1MjU4XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
      },
      titleText: {
        text: "Fukrey 3",
      },
      releaseDate: {
        day: 23,
        month: 11,
        year: 2023,
      },
    },
  ],
};

export default function App() {
  // const [upcomingMovies , setUpcomingMovies] = useState();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "94f183054emshc5ce4b98b71f620p186e99jsnf7c82f10c801",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const upcomingMovies = useFetch(
    "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
    options
  );

  // console.log("data=>", upcomingMovies);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.home}>
        <StatusBar />
        <ScrollView>
          <View style={styles.logo}>
            <Text style={styles.logoText}>v 2.0 </Text>
            <Pressable
              onPress={() =>
                Alert.alert(
                  "Coming Soon 🚀",
                  "This feature will be live soon.",
                  [
                    {
                      text: "cancel",
                      onPress: () => console.log("cancel pressed"),
                    },
                    {
                      text: "ok",
                      onPress: () => console.log("ok pressed"),
                    },
                  ]
                )
              }
            >
              <Text style={[styles.morebtn]}>More</Text>
            </Pressable>
          </View>
          <View style={styles.main}>
            <View style={styles.head}>
              <Image
                source={{
                  uri: "https://sprcdn-assets.sprinklr.com/674/8b955864-7307-4d41-8ded-c194170f5305-2729152590.jpg",
                }}
                style={{
                  width: windowWidth > 500 ? 600 : 350,
                  height: windowHeight > 500 ? 140 : 160,
                  borderRadius: 30,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 43,
                  marginTop: 5,
                }}
              >
                {/* ANIMAL (2023) <Text style={{ color: "#F5C518" }}> - NEW</Text> */}
              </Text>
            </View>

            {other ? (
              <Slider data={other} title="New Arrivals" />
            ) : (
              <ActivityIndicator size="large" />
            )}
            {upcomingMovies ? (
              <Slider data={upcomingMovies} title="Upcoming Movies" />
            ) : (
              <ActivityIndicator
                size="large"
                color="#F5C518"
                style={{ marginTop: 40 }}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// for dynamic user interfaces - this Dimensions api does not get update in real time on the change in the dimension
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// console.log("width=>", windowWidth);
// console.log("height=>", windowHeight);

// best way to do so is the use of useWindowDimensions hook from react-native
// const windowWidth = useWindowDimensions().width;
// const windowHeight = useWindowDimensions().height;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  home: {
    flex: 1,
    backgroundColor: "black",
  },

  logo: {
    backgroundColor: "#F5C518",
    height: 45,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 10,
  },

  logoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    margin: "auto",
    marginTop: 10,
    left: 25,
  },

  head: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  headimg: {
    // width: windowWidth > 500 ? 600 : 350,
    // height: windowHeight > 500 ? 140 : 160,
    // borderRadius: 20,
  },

  other: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    left: 30,
    paddingRight: 30,
  },

  otherImage: {
    width: 120,
    height: 170,
    marginRight: 10,
    borderRadius: 10,
  },

  txtBtnFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  modal: {
    backgroundColor: "black",
    flex: 1,
  },

  modalTxt: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  modalImgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  modalimg: {
    width: 210,
    height: 235,
    borderRadius: 40,
  },

  morebtn: {
    color: "black",
    marginTop: 9,
    marginRight: 20,
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 2,
    paddingLeft: 5,
  },

  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },

  androidShadow: {
    elevation: 2,
  },
});
