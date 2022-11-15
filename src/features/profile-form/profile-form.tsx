import React from 'react';
import { Button } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { TextInput } from '../../components/text-input';
import { SelectInput } from '../../components/select-input';
import { resolver } from './schema';
import { titles } from './titles';
import { trimFormatter, numbersOnlyFormatter } from './formatters';
import type { ProfileFormFieldValues } from './types';

const defaultValues: ProfileFormFieldValues = {
  title: '',
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
};

function ProfileForm() {
  const methods = useForm<ProfileFormFieldValues>({
    defaultValues,
    mode: 'onChange',
    resolver,
  });

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <FormProvider {...methods}>
      <SelectInput
        name="title"
        label="Title"
        items={[...titles.map((title) => ({ label: title, value: title }))]}
      />
      <TextInput
        name="firstName"
        label="First name"
        formatter={trimFormatter}
      />
      <TextInput name="lastName" label="Last name" formatter={trimFormatter} />
      <TextInput
        name="email"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        name="telephone"
        label="Telephone"
        keyboardType="phone-pad"
        formatter={numbersOnlyFormatter}
      />
      <Button title="Submit" onPress={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
}

export { ProfileForm };
