import { Header } from "@components/Header";
import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState([
    "Galera da Gringo",
    "Amigos",
    "Nintendistas",
  ]);

  return (
    <S.Container>
      <Header version="primary" />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => <GroupCard title={item} />}
      />
    </S.Container>
  );
}
