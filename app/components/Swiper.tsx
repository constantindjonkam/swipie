import React, {useRef} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

import Card, {CardType} from './Card';
import colors from '../config/colors';
import data from './data';
import overlayLabels from './overlayLabels';

export interface ProfileSwiperProps {}

const ProfileSwiper: React.FC<ProfileSwiperProps> = () => {
  const swiperRef = useRef(null as any);

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/originals/e7/a2/81/e7a281de1ea4acfb3660f6f7db00be7c.jpg',
      }}
      style={styles.container}>
      <View style={styles.container}>
        <Swiper
          ref={swiperRef}
          cards={data}
          infinite
          renderCard={(card: CardType) => {
            return <Card card={card} />;
          }}
          onSwiped={(cardIndex: Number) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          backgroundColor={'#ffffff'}
          overlayLabels={overlayLabels}
          stackSize={2}></Swiper>

        <View style={styles.bottomButtons}>
          <Icon.Button
            backgroundColor=""
            color={colors.blue}
            name="heart-o"
            size={46}
            underlayColor="transparent"
            activeOpacity={0.3}
            onPress={() => swiperRef.current?.swipeRight()}
            style={styles.icon}></Icon.Button>
          <Icon.Button
            name="times"
            backgroundColor=""
            color={colors.red}
            size={58}
            underlayColor="transparent"
            activeOpacity={0.3}
            onPress={() => swiperRef.current?.swipeLeft()}
            style={styles.icon}></Icon.Button>
          <Icon.Button
            name="star-o"
            backgroundColor=""
            color={colors.yellow}
            size={52}
            underlayColor="transparent"
            activeOpacity={0.3}
            onPress={() => swiperRef.current?.swipeTop()}
            style={styles.icon}></Icon.Button>
          <Icon.Button
            name="save"
            backgroundColor=""
            color={colors.green}
            size={52}
            underlayColor="transparent"
            activeOpacity={0.3}
            onPress={() => swiperRef.current?.swipeBottom()}
            style={styles.icon}></Icon.Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  bottomButtons: {
    position: 'absolute',
    top: 300,
    left: '80%',
  },
  icon: {
    marginBottom: 20,
  },
});
