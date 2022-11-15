import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput as RNTextInput } from 'react-native';
import { useController } from 'react-hook-form';
import type { TextInputProps as RNTextInputProps } from 'react-native';
import type { UseControllerProps } from 'react-hook-form';

interface TextInputProps
  extends Omit<RNTextInputProps, 'defaultValue'>,
    Partial<UseControllerProps> {
  label: string;
  name: UseControllerProps['name'];
  formatter?: (value: string) => string;
}

type FocusEvent = Parameters<NonNullable<TextInputProps['onFocus']>>[0];
type BlurEvent = Parameters<NonNullable<TextInputProps['onBlur']>>[0];

const passThroughFormatter = (value: string) => value;

function TextInput({
  label,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  formatter = passThroughFormatter,
  ...props
}: TextInputProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  const [isFocused, setIsFocused] = useState(false);

  const handleChangeText = (text: string) => {
    const formattedText = formatter(text);
    onChange(formattedText);
    if (props.onChangeText) {
      props.onChangeText(formattedText);
    }
  };

  const handleFocus = (event: FocusEvent) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(event);
    }
  };

  const handleBlur = (event: BlurEvent) => {
    setIsFocused(false);
    onBlur();
    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  const style = StyleSheet.flatten([
    styles.input,
    isFocused ? styles.inputFocused : undefined,
    error ? styles.inputErrored : undefined,
    props.style,
  ]);

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <RNTextInput
          ref={ref}
          returnKeyType="done"
          autoCorrect={false}
          autoComplete="off"
          spellCheck={false}
          {...props}
          style={style}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
        />
      </View>
      {error && (
        <Text style={styles.errorMessage}>{error.message || 'Error'}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  inputFocused: {
    borderColor: 'black',
  },
  inputErrored: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
  },
});

export { TextInput };
export type { TextInputProps };
