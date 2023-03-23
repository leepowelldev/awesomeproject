import { Text, View } from 'react-native';

export type BookProps = {
  title: string;
  author: string;
};

export function Book({ title, author }: BookProps) {
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>{author}</Text>
      </View>
    </View>
  );
}
