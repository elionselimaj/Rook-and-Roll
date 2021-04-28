import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  title1: {
    fontSize: 48,
    fontWeight: '300',
  },
  title2: {
    fontSize: 48,
    fontWeight: '600',
  },
  description: {
    opacity: 0.5,
    fontSize: 22,
  },
});

interface ContentProps {
  color: string;
  backgroundColor: string;
  source: number;
  title1: string;
  title2: string;
}

export default ({
                  color,
                  backgroundColor,
                  source,
                  title1,
                  title2,
                }: ContentProps) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          ...StyleSheet.absoluteFillObject,
          padding: 32,
          backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Image style={{ width: 300, height: 300 }} {...{ source }} />
        <View>
          <Text style={[styles.title1, { color }]}>{title1}</Text>
          <Text style={[styles.title2, { color }]}>{title2}</Text>
          <Text style={[styles.description, { color }]}>
            When you see a good move, look for a better one
          </Text>
        </View>
      </View>
    </View>
  );
};
