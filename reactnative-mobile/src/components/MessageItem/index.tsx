import React from "react";

import { Text, View } from "react-native";
import { Message } from "../../models/message";
import { UserPhoto } from "../UserPhoto";

import { styles } from "./styles";

type MessageItemProps = {
  data: Message;
};

export function MessageItem({ data }: MessageItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.text}</Text>
      <View style={styles.userInfo}>
        <UserPhoto size="SMALL" imageUri={data.user.avatar_url} />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </View>
  );
}
