import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import LogoImg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoImg />

      <View style={styles.userPhotoLogout}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri="https://github.com/ajvideira.png" />
      </View>
    </View>
  );
}
