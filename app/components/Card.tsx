import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import colors from '../config/colors';

export interface CardType {
  image: string;
  name: string;
  age: Number;
}

export interface CardProps {
  card: CardType;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card: React.FC<CardProps> = ({card}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: card.image,
        }}
        style={styles.cardImage}
      />
      <View style={styles.text}>
        <Text style={styles.name}>{card.name}</Text>
        <Text style={styles.age}>{card.age}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardImage: {
    width: windowWidth,
    height: windowHeight,
    // marginHorizontal: 0,
    // marginVertical: 0,
    // flex: 1,
    resizeMode: 'cover',
  },
  card: {
    flex: 1,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    alignItems: 'baseline',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
    marginRight: 10,
  },
  age: {
    fontSize: 24,
    color: colors.white,
  },
});
