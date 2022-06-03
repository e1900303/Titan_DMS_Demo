import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "./useTogglePasswordVisibility";

const Signup = () => {
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <KeyboardAvoidingView
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
      }}
    >
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
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={() => {
          console.log(username, email, password, confirmPassword);
        }}
      >
        {({ handleSubmit }) => (
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
              placeholder="Username"
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

            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                top: 215,
                borderRadius: 5,
                borderColor: "orange",
                backgroundColor: "white",
                textAlign: "center",
              }}
              type="email"
              name="email"
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
            />

            <View>
              <Octicons
                name="mail"
                style={{
                  position: "absolute",
                  left: 25,
                  top: 168,
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
                  top: 210,
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
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <Ionicons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                  style={{ position: "absolute", top: 163, right: 25 }}
                />
              </Pressable>
            </View>

            <View>
              <Octicons
                name="lock"
                style={{
                  position: "absolute",
                  left: 25,
                  top: 163,
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
                  top: 205,
                  borderRadius: 5,
                  borderColor: "orange",
                  backgroundColor: "white",
                  textAlign: "center",
                }}
                name="confirm password"
                placeholder="Confirm Password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
                onChangeText={(text) => setPassword(text)}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <Ionicons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                  style={{ position: "absolute", top: 157, right: 25 }}
                />
              </Pressable>
            </View>

            <View>
              <Octicons
                name="lock"
                style={{
                  position: "absolute",
                  left: 25,
                  top: 157,
                  fontSize: 20,
                }}
              ></Octicons>
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  paddingVertical: 14,
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View
        style={{
          position: "absolute",
          top: "1060%",
          left: 80,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 15 }}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={{ color: "orange", fontWeight: "bold", fontSize: 15 }}>
            Login now!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "orange",
    position: "absolute",
    top: "920%",
    left: "52%",
    height: "80%",
    width: "45%",
    borderRadius: 5,
  },
});

export default Signup;
