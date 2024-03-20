import { Header, Pagination } from "@/components";
import ItemList from "@/components/ItemList";
import Search from "@/components/Search";
import { getMagazinesHook } from "@/hooks";
import { Magazine } from "@/types";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function Page() {
  const { getMagazines, magazines, isError, isLoading } = getMagazinesHook();

  useEffect(() => {
    getMagazines();
  }, []);

  return (
    <>
      <Header />
      <Search />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <FlatList
            data={magazines}
            keyExtractor={({ id }) => id}
            renderItem={({ item }: { item: Magazine | any }) => (
              <ItemList
                id={item.id}
                title={item.title}
                resume={item.resume.slice(50)}
                pub_date={item.pub_date}
                image_url={item.url_image_cover}
                category={item.category.name}
              />
            )}
          />
          <Pagination
            pages={magazines}
            changePage={(page) => {
              console.log(page);
            }}
          />
        </>
      )}
    </>
  );
}
