import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { getUser } from "../components/initDB";

// const db = SQLite.openDatabase(
//   {
//     name: "Login_db",
//     location: "default",
//   },
//   () => {},
//   (error) => {
//     console.log(error);
//   }
// );

import { useTogglePasswordVisibility } from "./useTogglePasswordVisibility";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import SQLite from "react-native-sqlite-storage";

// const db = SQLite.openDatabase("USER DATA");

const Login = ({ navigation }) => {
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();
  const [isSelected, setSelection] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  // useEffect(() => {
  //   createTable();
  //   getData();
  // }, []);

  // const createTable = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXISTS" +
  //         "Users" +
  //         "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT);"
  //     );
  //   });
  // };

  // const getData = () => {
  //   try {
  //     db.transaction((tx) => {
  //       tx.executeSql("SELECT Name, Password FROM Users", [], (tx, results) => {
  //         var len = results.rows.length;
  //         if (len > 0) {
  //           var username = results.rows.item(0).Name;
  //           var password = results.rows.item(0).Password;
  //           setName(username);
  //           setPassword(password);
  //         }
  //       });
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const setData = async () => {
  //   if (username.length == 0 || password.length == 0) {
  //     Alert.alert("Warning!", "Please write your data.");
  //   } else {
  //     try {
  //       await db.transaction(async (tx) => {
  //         await tx.executeSql("INSERT INTO Users (Name, Password) VALUES (?,?)", [
  //           username,
  //           password,
  //         ]);
  //       });
  //       // navigation.navigate("Home");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const userValidator = () => {
    console.log(`email: ${email} password :${password}`);
    getUser(email, password, (resultset) => {
      if (resultset) {
        navigation.navigate("Welcome");
      } else {
        Alert.alert("Wrong user name or password!");
      }
    });
  };

  return (
    <KeyboardAvoidingWrapper>
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 640,
        }}
      >
        <Image
          style={{
            width: 412,
            height: 265,
            position: "absolute",
            top: 450,
            left: 0,
            right: 0,
          }}
          source={require("./../assets/bg_login1.png")}
        />

        <Image
          style={{
            flex: 1,
            width: 120,
            height: 120,
            resizeMode: "contain",
            position: "absolute",
            left: 10,
          }}
          source={require("./../assets/Titan_Logo.png")}
        />

        <Image
          style={{
            flex: 1,
            width: 40,
            height: 40,
            resizeMode: "contain",
            position: "absolute",
            top: 40,
            right: 15,
          }}
          source={require("./../assets/Gear.png")}
        />

        <Image
          style={{
            flex: 1,
            width: 220,
            height: 220,
            resizeMode: "contain",
            position: "absolute",
            top: 45,
            left: 95,
          }}
          source={require("./../assets/logo_login.png")}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          // onSubmit={() => {
          //   console.log(`email: ${email} password :${password}`);
          //   navigation.navigate("Welcome");
          // }}
          onSubmit={userValidator}
        >
          {({ handleSubmit }) => (
            <View
              style={{
                width: "100%",
                flexDirection: "column",
              }}
              onSubmit={() => userValidator(value.email)}
            >
              <TextInput
                style={{
                  height: 50,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  top: 220,
                  borderRadius: 5,
                  borderColor: "orange",
                  backgroundColor: "white",
                  textAlign: "center",
                }}
                type="email"
                name="email"
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
              ></TextInput>

              <Octicons
                name="mail"
                style={{
                  position: "absolute",
                  left: 25,
                  top: 245,
                  fontSize: 20,
                  fontSize: 20,
                }}
              ></Octicons>

              <TextInput
                style={{
                  height: 50,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  top: 220,
                  borderRadius: 5,
                  borderColor: "orange",
                  backgroundColor: "white",
                  textAlign: "center",
                }}
                name="password"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
                onChangeText={(text) => setPassword(text)}
              ></TextInput>
              <Octicons
                name="lock"
                style={{
                  position: "absolute",
                  left: 25,
                  top: 320,
                  fontSize: 20,
                }}
              ></Octicons>
              <Pressable onPress={handlePasswordVisibility}>
                <Ionicons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                  style={{ position: "absolute", top: 170, right: 25 }}
                />
              </Pressable>

              <Checkbox
                style={{ margin: 8, top: 225, left: 6 }}
                value={isSelected}
                onValueChange={setSelection}
              />
              <Text
                style={{
                  position: "absolute",
                  left: 40,
                  top: 380,
                }}
              >
                Remember me
              </Text>
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={{ textAlign: "center", paddingVertical: 4 }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <View style={{ position: "absolute", bottom: 450, left: 15 }}>
          <Text style={{ fontSize: 14 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "orange", fontWeight: "bold", fontSize: 14 }}>
              Create one!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    width: "30%",
    left: 265,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    top: 190,
    borderRadius: 10,
    textAlign: "center",
    borderColor: "orange",
  },
});

export default Login;
