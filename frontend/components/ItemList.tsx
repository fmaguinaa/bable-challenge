import {Image, Text, StyleSheet } from 'react-native'; 
import { Magazine } from '../types';
import moment from 'moment';
import { Link } from 'expo-router';

const ItemList = ({id, title, pub_date, resume, image_url, category,}: any) => (
  <Link href={`/magazine/${id}`}>
    <div style={styles.container}>
    <div style={styles.infoContainer}>
      <Text>{category} - {moment(pub_date).format("LL")}</Text>
      <Text style={{fontWeight: "500",}}>{title}</Text>
      <div style={styles.resumeContainer}>
        <Text>{resume}</Text>
      </div>
    </div>
    <Image alt='cover-image' source={image_url} style={styles.image}/>
  </div>
  </Link>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 500,
    gap: 8,
    paddingBottom: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: 'red',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 'auto',
  },
  resumeContainer: {
    overflow: 'hidden',
    width: 300,
    height: 60,
    margin: 4,
  },
  image: {
    width: 200,
    height: 200,
  },
});



export default ItemList;