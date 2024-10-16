import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card } from '@rneui/themed';

const leaguestanding = [
  {
    rank: 1,
    teamName: 'Singida Black Stars',
    wins: 65109,
    losses: 3616,
    point: 16,
  },
  {
    rank: 2,
    teamName: 'Simba',
    wins: 541012,
    losses: 21013,
    point: 13,
  },
  {
    rank: 3,
    teamName: 'Fountain Gate',
    wins: 741214,
    losses: 12213,
    point: 13,
  },
  {
    rank: 4,
    teamName: 'Young Africans',
    wins: 44008,
    losses: 812,
    point: 12,
  },
  {
    rank: 5,
    teamName: 'Azam',
    wins: 73316,
    losses: 2412,
    point: 12,
  },
  {
    rank: 6,
    teamName: 'Dodoma Jiji',
    wins: 72325,
    losses: 419,
    point: 9,
  },
  {
    rank: 7,
    teamName: 'Mashujaa',
    wins: 62314,
    losses: 319,
    point: 9,
  },
  {
    rank: 8,
    teamName: 'Kinondoni MC',
    wins: 72234,
    losses: 848,
    point: 8,
  },
  {
    rank: 9,
    teamName: 'Tabora United',
    wins: 72235,
    losses: 1058,
    point: 8,
  },
  {
    rank: 10,
    teamName: 'JKT Tanzania',
    wins: 61413,
    losses: 307,
    point: 7,
  },
  {
    rank: 11,
    teamName: 'Tanzania Prisons',
    wins: 61413,
    losses: 307,
    point: 7,
  },
  {
    rank: 12,
    teamName: 'Namungo',
    wins: 61413,
    losses: 307,
    point: 6,
  },
  {
    rank: 13,
    teamName: 'Coastal Union',
    wins: 61413,
    losses: 307,
    point: 5,
  },
  {
    rank: 14,
    teamName: 'Kagera Sugar',
    wins: 61413,
    losses: 307,
    point: 4,
  },
  {
    rank: 15,
    teamName: 'KenGold',
    wins: 61413,
    losses: 307,
    point: 4,
  },
  {
    rank: 16,
    teamName: 'Pamba Jiji',
    wins: 61413,
    losses: 307,
    point: 4,
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
    <Card.Title><Image style={{width: 50, height: 60}} source={require('../../assets/images/nbclegue.png')} />NBC LEAGUE STANDING</Card.Title>
    <Card.Divider />
    {leaguestanding.map((team, i) => {
      return (
        <View key={i} style={styles.user}>
          <Text style={styles.name}>{team.rank}: {team.teamName} ...................Points: {team.point}</Text>
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
