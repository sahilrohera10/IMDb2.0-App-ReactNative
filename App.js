import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
const headimg = require("./assets/headimg.png");

const other = [
  {
    key: 1,
    url: "https://m.media-amazon.com/images/M/MV5BNWU5ZDRmMWItZGU0NC00NzZjLTgzYjctY2RlMzI3OTNkN2U5XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg",
    title: "Animal",
  },
  {
    key: 2,
    url: "https://assets.gadgets360cdn.com/pricee/assets/product/202311/Sam-Bahadur_1699944687.jpg",
    title: "Sam Bahadur",
  },
  {
    key: 3,
    url: "https://m.media-amazon.com/images/M/MV5BNjdiNjg5NDQtYTU1Ny00M2VkLWE5OTEtYWI2YWIwNTA2NTZlXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
    title: "Tiger 3",
  },
  {
    key: 4,
    url: "https://m.media-amazon.com/images/M/MV5BMjMwOTk3ZTYtMTc4Zi00NDFiLWFlZGMtNTVkMTU3MDY1MjU4XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
    title: "Fukrey 3",
  },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  const openModal = (data) => {
    setIsModalOpen(true);
    setModalContent(data);
    // console.log("data=>", data);
  };
  return (
    <View style={styles.home}>
      <ScrollView>
        <View style={styles.logo}>
          <Text style={styles.logoText}>2.0 </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.head}>
            <Image
              source={{
                uri: "https://sprcdn-assets.sprinklr.com/674/8b955864-7307-4d41-8ded-c194170f5305-2729152590.jpg",
              }}
              style={styles.headimg}
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

          <View>
            <View style={styles.txtBtnFlex}>
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
                <Text style={{ color: "#F5C518" }}>New</Text> Arrivals{" "}
              </Text>
              {/* <Button
                title="View more >>"
                onPress={() => console.log("pressed")}
              /> */}
            </View>

            <ScrollView contentContainerStyle={styles.other} horizontal>
              {other &&
                other.map((d) => (
                  <Pressable onPress={() => openModal(d)}>
                    <View key={d.key}>
                      <Image
                        style={styles.otherImage}
                        source={{
                          uri: d.url,
                        }}
                      />
                    </View>
                  </Pressable>
                ))}
            </ScrollView>
          </View>
          <Modal
            animationType="none" //slide
            visible={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
          >
            <View style={styles.modal}>
              <Text style={styles.modalTxt}>
                {" "}
                {modalContent && modalContent.title}{" "}
              </Text>
              <View style={styles.modalImgContainer}>
                <Image
                  source={{ uri: modalContent && modalContent.url }}
                  style={styles.modalimg}
                />
              </View>
              <Text
                style={{
                  color: "white",
                  left: 30,
                  top: 30,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Details
              </Text>

              {/* <Button title="Close It" onPress={() => setIsModalOpen(false)} /> */}
            </View>
          </Modal>

          {/* <View>
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
          </View> */}
          {/* <View>
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
          </View> */}
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
    left: 25,
  },

  head: {
    // left: 15,
    top: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  headimg: {
    width: 350,
    height: 200,
    borderRadius: 40,
    // marginLeft: 20,
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
});
