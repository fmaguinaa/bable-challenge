import { Header } from '@/components';
import { Link, Slot } from 'expo-router';
import { StyleSheet } from 'react-native';
import { usePathname } from 'expo-router';

export default function HomeLayout() {
  const pathname = usePathname();

  return (
    <>
      <div style={styles.header}>
        {pathname !== "/" && <Link href={"/"} style={{fontSize: 30}}> {"<"} </Link>} 
        <Header />
      </div>
      <Slot />
      {/* <Footer /> */}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

