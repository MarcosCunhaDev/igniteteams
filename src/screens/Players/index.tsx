import { Header } from "@components/Header";
import { ButtonIcon, Filter, Highlight, Input } from "@components/index";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

const defaultItems = ["Time A", "Time B", "Time C", "Time D", "Time E"];

export function Players() {
  const [groups, setGroups] = useState([]);
  const [selectedItem, setSelectedItem] = useState(defaultItems[0]);

  return (
    <Container>
      <Header version="secondary" />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
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
    </Container>
  );
}
