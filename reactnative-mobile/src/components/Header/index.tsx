import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import LogoImg from "../../assets/logo.svg";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoImg />
      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
