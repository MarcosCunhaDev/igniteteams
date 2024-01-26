import { Header } from "@components/Header";
import { Button, Highlight, Input } from "@components/index";
import { useState } from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);

  const handleNewGroup = () => {
    navigation.navigate("players", { group });
  };

  return (
    <S.Container>
      <Header version="secondary" />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input
          onChangeText={setGroup}
          placeholder="Nome da turma"
          defaultValue=""
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Container>
  );
}
