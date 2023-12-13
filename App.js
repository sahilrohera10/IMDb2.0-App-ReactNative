import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
const headimg = require("./assets/headimg.png");
export default function App() {
  return (
    <View style={styles.home}>
      <ScrollView>
        <View style={styles.logo}>
          <Text style={styles.logoText}> IMDb 2.0 </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.head}>
            <Image source={headimg} style={styles.headimg} />
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 43,
                marginTop: 5,
              }}
            >
              ANIMAL (2023) <Text style={{ color: "#F5C518" }}> - NEW</Text>
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "white",
                marginTop: 50,
                fontWeight: 900,
                marginBottom: 10,
                left: 30,
              }}
            >
              {" "}
              Other <Text style={{ color: "#F5C518" }}>New</Text> Arrivals{" "}
            </Text>
            <ScrollView contentContainerStyle={styles.other} horizontal>
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://assets.gadgets360cdn.com/pricee/assets/product/202311/Sam-Bahadur_1699944687.jpg",
                }}
              />
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://m.media-amazon.com/images/M/MV5BNjdiNjg5NDQtYTU1Ny00M2VkLWE5OTEtYWI2YWIwNTA2NTZlXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
                }}
              />
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://m.media-amazon.com/images/M/MV5BMjMwOTk3ZTYtMTc4Zi00NDFiLWFlZGMtNTVkMTU3MDY1MjU4XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
                }}
              />
            </ScrollView>
          </View>

          <View>
            <Text
              style={{
                color: "white",
                marginTop: 40,
                fontWeight: 900,
                marginBottom: 10,
                left: 30,
              }}
            >
              {" "}
              Top picks for the day 🎉{" "}
            </Text>
            <ScrollView contentContainerStyle={styles.other} horizontal>
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://pbs.twimg.com/media/F-pUPryWsAAPzF1?format=jpg&name=small",
                }}
              />
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://pbs.twimg.com/media/F_oXH-GbQAA9pRA?format=jpg&name=900x900",
                }}
              />
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://pbs.twimg.com/media/F263V73bAAAmE2Q?format=jpg&name=large",
                }}
              />
            </ScrollView>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                marginTop: 40,
                fontWeight: 900,
                marginBottom: 10,
                left: 30,
              }}
            >
              {" "}
              Top IMDb rated ⭐{" "}
            </Text>
            <ScrollView contentContainerStyle={styles.other} horizontal>
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://m.media-amazon.com/images/M/MV5BMDQwOTI3NTMtZjA0My00M2E3LThmODUtODdiNTQ3ZjNiNGE3XkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_.jpg",
                }}
              />
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://assets.gadgets360cdn.com/pricee/assets/product/202311/Sam-Bahadur_1699944687.jpg",
                }}
              />
              <Image
                style={styles.otherImage}
                source={{
                  uri: "https://m.media-amazon.com/images/M/MV5BNDY5YWMzOWEtNTVhZi00NTdmLWIxNGItN2Q5ZmIxNGRkZDYyXkEyXkFqcGdeQXVyMTYzMTU3Njgx._V1_FMjpg_UX1000_.jpg",
                }}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "black",
  },

  logo: {
    backgroundColor: "#F5C518",
    height: 65,
    borderRadius: 5,
    marginTop: 10,
  },

  logoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    margin: "auto",
    marginTop: 30,
    left: 10,
  },

  head: {
    left: 65,
    top: 20,
  },

  headimg: {
    width: 210,
    height: 235,
    borderRadius: 40,
    marginLeft: 20,
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
});
