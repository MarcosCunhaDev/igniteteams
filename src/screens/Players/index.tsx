import { Header } from "@components/Header";
import {
  Button,
  ButtonIcon,
  EmptyList,
  Filter,
  Highlight,
  Input,
  PlayerCard,
} from "@components/index";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { useRoute } from "@react-navigation/native";

const defaultItems = ["Time A", "Time B", "Time C", "Time D", "Time E"];

interface RouteParams {
  group: string;
}

export function Players() {
  const route = useRoute();
  const { group } = route.params as RouteParams;
  const [groups, setGroups] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedItem, setSelectedItem] = useState(defaultItems[0]);

  return (
    <Container>
      <Header version="secondary" />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" type="primary" />
      </Form>
      <HeaderList>
        <FlatList
          horizontal
          data={defaultItems}
          key={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={selectedItem === item}
              onPress={() => setSelectedItem(item)}
            />
          )}
        />
        <NumberOfPlayers>{defaultItems.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        contentContainerStyle={[
          { paddingBottom: 30 },
          players.length === 0 && { flex: 1 },
        ]}
        data={players}
        showsVerticalScrollIndicator={false}
        key={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard
            onCloseClick={() => {
              console.log("Clicou no close");
            }}
            name={item}
          />
        )}
        ListEmptyComponent={() => {
          return <EmptyList message="Não há pessoas nesse time." />;
        }}
      />
      <Button title="Remover Turma" type="Secondary" onPress={() => {}} />
    </Container>
  );
}
