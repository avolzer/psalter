import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchButton from "./searchButton";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SettingsContext } from "../context/settingsContext";
import "../assets/i18n/i18n";
import { useTranslation } from "react-i18next";
import { romanizeNumeral } from "../tools/romanizeNumeral";

export default function ReaderHeader({ chapter, book }) {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const { appLanguage } = useContext(SettingsContext);

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        position: "relative",
        height: 120,
      }}
    >
      <View
        style={{
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={() => {
            navigation.navigate("Chapter Selection", {
              currentChapter: chapter,
              currentBook: book,
            });
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 25,
            }}
          >{`${t(book)} ${
            appLanguage == "English" ? chapter : romanizeNumeral(chapter)
          }`}</Text>
          <AntDesign style={{ color: "#737373" }} name="caretdown" size={15} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          top: 60,
          left: 10,
        }}
      >
        <SearchButton />
      </View>
    </View>
  );
}
