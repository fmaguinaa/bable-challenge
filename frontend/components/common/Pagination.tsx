import { Button, FlatList, StyleSheet, View } from "react-native";

type PaginationProps = {
  pages: Array<any>;
  changePage: (page: number) => void;
};

type PageProps = {
  page: number;
  onPress: (page: number) => void;
};

const Page = ({ page, onPress }: PageProps) => (
  <Button title={page?.toString() || ''} onPress={() => onPress(page)} />
);

export default ({ pages, changePage }: PaginationProps) => (
  <View style={styles.container}>
    <FlatList
    directionalLockEnabled
      data={pages}
      // keyExtractor={({ index }) => index}
      renderItem={({ item }) => <Page page={item.id} onPress={changePage} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center'
  },
  button :{
    display: 'flex',
    alignItems: 'center'
  }
});
