import type { titles } from './titles';

type ProfileFormFieldValues = {
  readonly title: '' | typeof titles[number];
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly telephone: string;
};

export type { ProfileFormFieldValues };
