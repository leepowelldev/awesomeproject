import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useController } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import type { UseControllerProps } from 'react-hook-form';
import type {
  PickerSelectProps,
  PickerStyle,
} from 'react-native-picker-select';

interface SelectInputProps
  extends Omit<PickerSelectProps, 'onValueChange'>,
    Partial<UseControllerProps> {
  label: string;
  name: UseControllerProps['name'];
  onValueChange?: PickerSelectProps['onValueChange'];
}

function SelectInput({
  label,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: SelectInputProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  const [isFocused, setIsFocused] = useState(false);

  const handleOpen = () => {
    setIsFocused(true);
    if (props.onOpen) {
      props.onOpen();
    }
  };

  const handleClose = () => {
    setIsFocused(false);
    onBlur();
    if (props.onClose) {
      props.onClose();
    }
  };

  const handleValueChange = (nextValue: unknown, index: number) => {
    onChange(nextValue ?? '');
    if (props.onValueChange) {
      props.onValueChange(nextValue, index);
    }
  };

  const style: PickerStyle = {
    viewContainer: StyleSheet.flatten([
      styles.input,
      isFocused ? styles.inputFocused : undefined,
      error ? styles.inputErrored : undefined,
      props.style?.viewContainer,
    ]),
    placeholder: styles.placeholder,
  };

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <RNPickerSelect
          {...props}
          style={style}
          onOpen={handleOpen}
          onClose={handleClose}
          onValueChange={handleValueChange}
          value={value}
        />
      </View>
      {error && (
        <Text style={styles.errorMessage}>{error.message ?? 'Error'}</Text>
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
  placeholder: {
    color: 'black',
  },
});

export { SelectInput };
export type { SelectInputProps };
