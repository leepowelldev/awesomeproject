import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useBackHandler } from '@react-native-community/hooks';

export type OfflineControllerProps = {
  children: ReactNode;
};

export function OfflineController({
  children,
}: OfflineControllerProps): JSX.Element {
  const navigation = useNavigation();
  const { isConnected, isInternetReachable } = useNetInfo();
  const isOffline = isConnected === false || isInternetReachable === false;

  // Prevent hardware back button
  useBackHandler(() => {
    return true;
  });

  useEffect(() => {
    console.log('isOffline', isOffline);
    if (isOffline) {
      navigation.navigate('Offline');
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [isOffline, navigation]);

  return <>{children}</>;
}
