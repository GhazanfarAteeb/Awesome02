import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never">
        <View style={[styles.card, styles.elevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>more</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>xDDDDDD</Text>
        </View>
      </ScrollView>
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
  container: {
    // flex: 1,
    // flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 6,
  },
  elevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.65,
    shadowRadius: 5,
    shadowColor: '#EF5354',
  },
});
