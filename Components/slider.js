import {
  View,
  Modal,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import "react-native-get-random-values";

import { v4 as uuidv4 } from "uuid";

export default function Slider({ data, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  const d = data.results;

  const dd = d.map((d) => ({
    ...d,
    key: uuidv4(), // Inject a unique key (UUID) into each object
  }));

  const openModal = (data) => {
    setIsModalOpen(true);
    setModalContent(data);
  };

  return (
    <View>
      <View>
        <View style={styles.txtBtnFlex}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              fontWeight: 900,
              marginBottom: 6,
              left: 20,
            }}
          >
            {title}
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.other} horizontal>
          {/* {console.log("data in slider => ", data)} */}
          {dd &&
            dd.map((d) => (
              <Pressable onPress={() => openModal(d)} key={d.key}>
                <View key={d.key}>
                  <Image
                    style={styles.otherImage}
                    source={{
                      uri: d.primaryImage
                        ? d.primaryImage.url
                        : "https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
                    }}
                  />
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: 5,
                      width: 100,
                    }}
                  >
                    {" "}
                    {d.titleText.text}{" "}
                  </Text>
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
            {modalContent && modalContent.titleText.text}{" "}
          </Text>
          <View style={styles.modalImgContainer}>
            <Image
              source={{
                uri:
                  modalContent && modalContent.primaryImage
                    ? modalContent.primaryImage.url
                    : "https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
              }}
              style={styles.modalimg}
            />
          </View>
          <View style={styles.details}>
            <Text
              style={{
                color: "white",
                // left: 30,
                marginTop: 30,
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Details -
            </Text>
            <Text style={{ color: "#F5C518", fontWeight: "bold" }}>
              Release Date :{" "}
              <Text style={{ color: "white" }}>
                {" "}
                {modalContent && modalContent.releaseDate.day} /{" "}
                {modalContent && modalContent.releaseDate.month} /{" "}
                {modalContent && modalContent.releaseDate.year}{" "}
              </Text>{" "}
            </Text>
          </View>

          {/* <Button title="Close It" onPress={() => setIsModalOpen(false)} /> */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  other: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    left: 20,
    paddingRight: 30,
  },

  otherImage: {
    width: 120,
    height: 170,
    marginRight: 10,
    borderRadius: 5,
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
    width: 200,
    height: 280,
    borderRadius: 10,
  },
  details: {
    left: 40,
  },
});
