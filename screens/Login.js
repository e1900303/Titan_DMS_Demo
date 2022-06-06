import React, { useState, useEffect } from "react";
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
import SQLite from "react-native-sqlite-storage";

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

const Login = () => {
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();
  const [isSelected, setSelection] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

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

  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
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
        initialValues={{ username: "", password: "" }}
        onSubmit={() => {
          console.log(`username: ${username} password :${password}`);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <View style={{ width: "100%" }} onSubmit={handleSubmit}>
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
              type="username"
              name="username"
              onChangeText={(text) => setUsername(text)}
              //onBlur={handleBlur("username")}
              placeholder="Username"
              //value={values.username}
            />

            <View>
              <Octicons
                name="person"
                style={{
                  position: "absolute",
                  left: 25,
                  top: 173,
                  fontSize: 20,
                }}
              ></Octicons>
            </View>

            <View>
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
                //value={values.password}
                enablesReturnKeyAutomatically
                onChangeText={(text) => setPassword(text)}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <Ionicons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                  style={{ position: "absolute", top: 170, right: 25 }}
                />
              </Pressable>
            </View>

            <View>
              <Octicons
                name="lock"
                style={{
                  position: "absolute",
                  left: 25,
                  top: 170,
                  fontSize: 20,
                }}
              ></Octicons>
            </View>

            <View style={{ position: "absolute", top: "625%", left: 5 }}>
              <Checkbox
                style={{ margin: 8 }}
                value={isSelected}
                onValueChange={setSelection}
              />
              <Text
                style={{
                  position: "relative",
                  left: 35,
                  bottom: "50%",
                  textAlign: "center",
                }}
              >
                Remember me
              </Text>
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={{ textAlign: "center", paddingVertical: 14 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={{ position: "absolute", top: "730%", left: 34 }}>
        <Text style={{ fontSize: 14 }}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={{ color: "orange", fontWeight: "bold", fontSize: 14 }}>
            Create one!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "orange",
    position: "absolute",
    top: "620%",
    left: "52%",
    height: "80%",
    width: "45%",
    borderRadius: 5,
  },
});

export default Login;
