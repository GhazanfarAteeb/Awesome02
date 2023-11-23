import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2021/09/Hunza-Valley-400x231.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hunza Valley</Text>
          <Text style={styles.cardLabel}>Gilgit Baltistan</Text>
          <Text style={styles.cardDescription}>
            Located in Gilgit Baltistan, the Hunza Valley is one of Pakistan’s
            hidden gems. This isolated valley is nestled between the Himalayas
            and the Karakoram mountain peaks. This is one of the best places to
            visit in Pakistan because of its lush farmlands. Here you can find
            markhors, ounces, ibexes, and red foxes. In this valley, a glorious
            view awaits you, and the locals are warm and friendly.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    margin: 24,
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 10,
  },
  cardImage: {
    height: 180,
  },
  cardBody: {
    marginTop: 7,
    paddingTop: 0,
    padding: 14,
  },
  cardTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 10.3,
    color: '#494949',
    marginVertical: 2,
    fontStyle: 'italic',
  },
  cardDescription: {
    fontSize: 11,
    textAlign: 'justify',
    color: 'gray',
  },
});
