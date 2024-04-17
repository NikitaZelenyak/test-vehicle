import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Wrapper, Btn, Label, Input } from './AddContactForm.styled';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/ContactsSlice/contactSlice';
import { TailSpin } from 'react-loader-spinner';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
  email: yup.string().email().required(),
});

export const AddContactForm = () => {
  const [addContact] = useAddContactMutation();
  const { data: contacts, isFetching } = useGetContactsQuery();

  const getInfoContact = async (values, action) => {
    console.log(values);
    try {
      await addContact(values);

      const checkOnIncludes = contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );

      if (checkOnIncludes) {
        return toast.error(
          `This name: "${values.name}" already exists in the list`
        );
      }
      toast.success(`Contact added`);
    } catch (error) {
      toast.error(`${error}`);
    }

    action.resetForm();
  };

  return (
    <Wrapper>
      <Toaster position="top-right" />
      <Formik
        initialValues={{
          name: '',
          number: '',
          email: '',
          group: '',
        }}
        validationSchema={schema}
        onSubmit={getInfoContact}
      >
        <Form>
          <Label htmlFor="name">Enter the name</Label>
          <Input id="name" name="name" type="text" />
          <ErrorMessage name="name" component="div" />
          <Label htmlFor="number">Enter the number</Label>
          <Input id="number" name="number" type="tel" />
          <ErrorMessage name="number" component="div" />
          <Label htmlFor="email">Enter the email</Label>
          <Input id="email" name="email" type="email" />
          <ErrorMessage name="email" component="div" />
          <Label htmlFor="group">Select group</Label>
          <Input component="select" id="group" name="group">
            <option value="Other">Other</option>
            <option value="favorites">Favorites</option>
            <option value="family">Family</option>
            <option value="work">Work</option>
            <option value="friends">Friends</option>
          </Input>

          <Btn type="submit">
            {isFetching ? (
              <TailSpin height="26" width="26" radius="4" color="black" />
            ) : (
              <AiOutlineUserAdd size={24} color="#000000" />
            )}
          </Btn>
        </Form>
      </Formik>
    </Wrapper>
  );
};
