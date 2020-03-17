export type FormValues = {
  name: string;
  phone?: string;
  email?: string;
  content: string;
};

export type ValidationErrors = {
  name?: string;
  phone?: string;
  email?: string;
  content?: string;
};

export type FormikSubmitting = {
  setSubmitting: Function;
};
