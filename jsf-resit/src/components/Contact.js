import Heading from "./layout/Heading";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { queryTypes } from "./constants/queryTypes";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name.")
    .min(1, "Please enter your name."),
  phone: yup
    .string()
    .required("Please enter a valid phone number.")
    .matches(/^\+?[1-9][0-9]{7,14}$/, "Please enter a valid phone number."),
  message: yup
    .string()
    .required("Please enter your message.")
    .min(1, "You cannot send an empty message."),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <Heading>Contact us</Heading>
        <div className="container__contact">
          <div className="container__contact--success">
            <p>Your message was sent!</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Heading>Contact us</Heading>
      <div className="container__contact">
        <p>Don't hesitate to contact us for anything at all.</p>
        <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="contact__form--input"
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
          <input
            type="tel"
            className="contact__form--input"
            placeholder="Phone"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
          <Controller
            name="queryTypes"
            control={control}
            render={({ field }) => (
              <Select
                className="contact__form--select"
                options={queryTypes}
                {...field}
              />
            )}
          />
          <textarea
            className="contact__form--input"
            placeholder="Message"
            {...register("message")}
          />
          {errors.message && (
            <span className="error">{errors.message.message}</span>
          )}
          <button className="contact__form--button" type="submit">
            Send form
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
