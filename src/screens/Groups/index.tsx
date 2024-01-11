import { Header } from "@components/Header";
import * as S from "./styles";
import { Highlight, GroupCard, EmptyList, Button } from "@components/index";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState([]);

  return (
    <S.Container>
      <Header version="primary" />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item, index }) => <GroupCard title={item} />}
        ListEmptyComponent={() => {
          return <EmptyList message="Que tal cadastrar a primeira turma?" />;
        }}
      />

      <Button title="Criar nova turma" />
    </S.Container>
  );
}
