import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@rneui/themed';

const leaguestanding = [
  {
    rank: 1,
    teamName: 'Singida Black Stars',
    wins: 65109,
    losses: 3616,
  },
  {
    rank: 2,
    teamName: 'Simba',
    wins: 541012,
    losses: 21013,
  },
  {
    rank: 3,
    teamName: 'Fountain Gate',
    wins: 741214,
    losses: 12213,
  },
  {
    rank: 4,
    teamName: 'Young Africans',
    wins: 44008,
    losses: 812,
  },
  {
    rank: 5,
    teamName: 'Azam',
    wins: 73316,
    losses: 2412,
  },
  {
    rank: 6,
    teamName: 'Dodoma Jiji',
    wins: 72325,
    losses: 419,
  },
  {
    rank: 7,
    teamName: 'Mashujaa',
    wins: 62314,
    losses: 319,
  },
  {
    rank: 8,
    teamName: 'Kinondoni MC',
    wins: 72234,
    losses: 848,
  },
  {
    rank: 9,
    teamName: 'Tabora United',
    wins: 72235,
    losses: 1058,
  },
  {
    rank: 10,
    teamName: 'Tanzania Prisons',
    wins: 61413,
    losses: 307,
  }
]

export default function HomeScreen() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>League Standing</Text>
    // </View>


<ScrollView>
<View style={styles.container}>
  <Card>
    <Card.Title>NBC LEAGUE STANDING</Card.Title>
    <Card.Divider />
    {leaguestanding.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          {/* <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          /> */}
          <Text style={styles.name}>{u.rank}: {u.teamName}</Text>
        </View>
      );
    })}
  </Card>
  </View>
  </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    color: 'black',
  },
});
