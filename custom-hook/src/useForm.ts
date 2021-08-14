import { useEffect, useState } from "react";

interface Props {
  initialValues: { [key: string]: string | boolean };
  validation: (values: { [key: string]: string }) => {};
  onSubmit: (values: { [key: string]: string }) => any;
}

export const useForm = (props: Props) => {
  const { initialValues, validation, onSubmit } = props;
  const [values, setValues] = useState<{ [key: string]: any }>(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    console.log(values);
  }, [values]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "rememberMe" ? e.target.checked : e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleSubmit = () => {
    const errors = validation(values);
    setErrors(errors);

    if (Object.keys(errors).length !== 0) onSubmit(values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
  };
};
