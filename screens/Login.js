import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import { useTogglePasswordVisibility } from "./useTogglePasswordVisibility";

const Login = () => {
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();
  const [isSelected, setSelection] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [username, setUsername] = React.useState("");

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
      <>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(value) => {
            console.log(value);
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
                onChange={(text) => setUsername(text)}
                onBlur={handleBlur("username")}
                placeholder="Username"
                value={values.username}
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
                  value={values.password}
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
      </>
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
