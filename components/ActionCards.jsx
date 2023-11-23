import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(url) {
    Linking.openURL(url);
  }

  return (
    <View style={styles.background}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={[styles.headerText]}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2021/09/Hunza-Valley-400x231.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            {' '}
            Just tike every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.xd}
            onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.to}> Read More </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.xd}
            onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.to}> Follow Me </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingHorizontal: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 7,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  elevatedCard: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#242424',
    shadowOpacity: 0.33,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 100,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bodyText: {
    color: '#000',
  },
  to: {
    color: '#000',
  },
  xd: {
    backgroundColor: '#999',
    paddingHorizontal: 40,
    paddingVertical: 6,
  },
});
