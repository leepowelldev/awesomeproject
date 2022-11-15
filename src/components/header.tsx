import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type HeaderProps = {
  title: string;
  onPressBackButton?: () => void;
  hideBackButton?: boolean;
};

function Header({ title, onPressBackButton, hideBackButton }: HeaderProps) {
  const navigation = useNavigation();

  const handlePressBackButton = useCallback(() => {
    if (onPressBackButton) {
      onPressBackButton();
      return;
    }
    navigation.goBack();
  }, [navigation, onPressBackButton]);

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        handlePressBackButton();
        return true;
      }
    );
    return subscription.remove();
  }, [handlePressBackButton]);

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {!hideBackButton && (
        <TouchableOpacity onPress={handlePressBackButton}>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
  },
});

export { Header };
export type { HeaderProps };
