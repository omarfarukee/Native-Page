import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {

  return (
    <View style={styles.main}>
      <View style={{ height: 40, backgroundColor: "white" }} />
      <ScrollView style={styles.container}>
        <View style={styles.catImgArea}>
          <Image source={require('./assets/img/cat.jpg')} style={styles.img} />
          <View>
            <Text style={{ fontSize: 35, fontWeight: "500" }}>The Octocat</Text>
            <Text style={{ fontSize: 25, color: "blue" }}>Nice Cat</Text>
            <Text style={{ fontSize: 20 }}>Joined 25 JAN 2024</Text>
          </View>
        </View>

        <View >
          <Text style={{ fontSize: 20, lineHeight: 30, textAlign: "center", fontFamily: 'monospace' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", height: 200 }}>
          <View style={{ height: 150, width: 380, alignContent: "center", justifyContent: "center", flexDirection: "row", alignItems: "center", backgroundColor: "#f6f8ff", borderRadius: 10, shadowColor: "black", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 10, }}>
            <View style={styles.minBox}>
              <Text style={styles.repos}>Repos</Text>
              <Text style={styles.numbers}>10</Text>
            </View>
            <View style={styles.minBox}>
              <Text style={styles.repos}>Followers</Text>
              <Text style={styles.numbers}>5021</Text>
            </View>
            <View style={styles.minBox}>
              <Text style={styles.repos}>Repos</Text>
              <Text style={styles.numbers}>10</Text>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Icon name="location-arrow" size={40} color="black" style={{color:"#16c24b"}} />
            <Text style={{ fontSize: 25 }}>Dhaka, Bangladesh</Text>
          </View>


          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Icon name="link" size={40} color="blue" style={styles.icon} />
            <Text style={{ fontSize: 25 }}>https://omarfaruk.com</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Icon name="github" size={40} color="black"  />
            <Text style={{ fontSize: 25 }}>GitHub</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Icon name="twitter" size={40} color="black" style={{color:"#1da1f3"}} />
            <Text style={{ fontSize: 25 }}>Twitter</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {

  },
  container: {

  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: 'blue',
  },
  minBox: {
    height: 100,
    width: 120,
    alignItems: "center",
    justifyContent: "center"
  },
  catImgArea: {
    height: 200,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center"
  },
  repos: { fontSize: 20, fontFamily: 'monospace' },

  numbers: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: "800"
  },

});
