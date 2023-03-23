import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTimeoutWhen } from 'rooks';
import { useToastController } from '../contexts/toast-controller';
import type { StyleProp, ViewStyle } from 'react-native';

export type ToastProps = {
  style?: StyleProp<ViewStyle>;
};

export function Toast({ style }: ToastProps) {
  const safeAreaInsets = useSafeAreaInsets();
  const { isVisible, setIsVisible } = useToastController();

  useTimeoutWhen(() => setIsVisible(false), 3000, isVisible);

  return isVisible ? (
    <View style={[styles.root, { top: safeAreaInsets.top }, style]}>
      <Text style={styles.text}>Oops! Something went wrong</Text>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#FFDBD7',
    borderColor: '#FE6F61',
    padding: 12,
    position: 'absolute',
    top: 0,
    textAlign: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 13,
    lineHeight: 17,
  },
});
