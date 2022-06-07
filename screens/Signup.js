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
import initDB from "../components/initDB";
import { useTogglePasswordVisibility } from "./useTogglePasswordVisibility";
import { insertUser } from "../components/initDB";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const Signup = ({ navigation }) => {
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event) => {
    setPassword(event.target.value);
    setFullName(event.target.value);
    setEmail(event.target.value);
    setConfirmPassword(event.target.value);
  };

  initDB();
  const signUp = () => {
    console.log("signup@@@@@@@@@@@@@values");
    insertUser(email, fullName, password);

    //   getUser(value.email, (u) => {
    //     console.log("display value of u :", u);
    //   });   value={values.email}
  };

  return (
    <KeyboardAvoidingWrapper>
      <View
        style={{
          flex: 1,
          paddingBottom: 400,
          paddingHorizontal: 10,
        }}
      >
        <Image
          style={{
            flex: 1,
            width: 120,
            height: 210,
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
            height: 140,
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
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          // onSubmit={() => {
          //   console.log(fullName, email, password, confirmPassword);
          // }}

          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <View style={{ width: "100%" }}>
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
                type="fullName"
                name="fullName"
                onChangeText={(text) => setFullName(text)}
                placeholder="Full Name"
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
                  top: 210,
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
                    top: 202,
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
                />
                <Pressable onPress={handlePasswordVisibility}>
                  <Ionicons
                    name={rightIcon}
                    size={22}
                    color="#232323"
                    style={{ position: "absolute", top: 154, right: 25 }}
                  />
                </Pressable>
              </View>

              <View>
                <Octicons
                  name="lock"
                  style={{
                    position: "absolute",
                    left: 25,
                    top: 155,
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
                    top: 193,
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
                  onChangeText={(text) => setConfirmPassword(text)}
                />
                <Pressable onPress={handlePasswordVisibility}>
                  <Ionicons
                    name={rightIcon}
                    size={22}
                    color="#232323"
                    style={{ position: "absolute", top: 145, right: 25 }}
                  />
                </Pressable>
              </View>

              <View>
                <Octicons
                  name="lock"
                  style={{
                    position: "absolute",
                    left: 25,
                    top: 145,
                    fontSize: 20,
                  }}
                ></Octicons>
              </View>

              <TouchableOpacity
                onPress={(value) => {
                  signUp(value);
                  navigation.navigate("Login");
                }}
                // onPress={handleSubmit}
                style={styles.button}
              >
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
            top: "200%",
            left: 80,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 15 }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "orange", fontWeight: "bold", fontSize: 15 }}>
              Login now!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "orange",
    position: "absolute",
    top: "175%",
    left: "52%",
    height: "17%",
    width: "45%",
    borderRadius: 10,
  },
});

export default Signup;
