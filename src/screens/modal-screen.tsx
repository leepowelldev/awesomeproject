import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ModalScreen() {
  const navigation = useNavigation();

  // TODO hardware back button

  return (
    <SafeAreaView style={styles.root}>
      <Pressable
        style={[StyleSheet.absoluteFill, styles.background]}
        onPress={navigation.goBack}
      />
      <View style={styles.container}>
        <Text>
          Mise en place is a French term that literally means “put in place.” It
          also refers to a way cooks in professional kitchens and restaurants
          set up their work stations—first by gathering all ingredients for a
          recipes, partially preparing them (like measuring out and chopping),
          and setting them all near each other. Setting up mise en place before
          cooking is another top tip for home cooks, as it seriously helps with
          organization. It'll pretty much guarantee you never forget to add an
          ingredient and save you time from running back and forth from the
          pantry ten times.
        </Text>
        <Button
          title="Close"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: 'rgba(100,100,100,0.6)',
  },
  container: {
    padding: 16,
    width: '90%',
    maxWidth: 400,
    borderRadius: 3,
    backgroundColor: 'white',
  },
});

export { ModalScreen };
