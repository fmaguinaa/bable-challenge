import { getMagazineHook } from "@/hooks";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, StyleSheet, Text } from "react-native";
import moment from "moment";
import { useEffect } from "react";

export default function Page() {
  const { slug } = useLocalSearchParams();

  const { magazine, getMagazine, isLoading } = getMagazineHook(slug);

  useEffect(() => {
    getMagazine();
  }, [])

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : magazine ? (
        <div style={styles.container}>
          <Text>
            {magazine.category.name} - {moment(magazine.pub_date).format("LL")}
          </Text>
          <Text style={{fontWeight: "500",}}>{magazine.title}</Text>
          <Image alt="cover-image" source={magazine.url_image_cover} style={styles.image} />
          <Text>{magazine.resume}</Text>
        </div>
      ) : (
        <>Not found</>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    gap: 12,
    margin: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
});