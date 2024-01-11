import { Header } from "@components/Header";
import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <S.Container>
      <Header version="primary" />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard
        title="Galera do Ignite"
        onPress={() => {
          console.log("Clicou aqui");
        }}
      />
    </S.Container>
  );
}
