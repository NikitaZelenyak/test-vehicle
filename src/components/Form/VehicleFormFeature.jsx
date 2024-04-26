import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Date is required"),
  comment: Yup.string(),
});
export const VehicleForm = () => {
  return (
    <div className=" p-6 border border-VehicleLightGrey rounded-xl h-fit">
      <h2 className="text-base font-semibold leading-7 text-VehicleBlack">
        Book your campervan now
      </h2>
      <p className="mt-1">Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          date: "",
          comment: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          alert("Form Submitted");
          actions.setSubmitting(false);
          actions.resetForm();
          window.location.reload();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 mt-6">
            <div>
              <Field
                type="text"
                name="firstName"
                placeholder="Name"
                className="block w-full rounded-md border-0 py-3 pl-8 pr-2 text-VehicleBlack shadow-sm ring-1 ring-inset bg-VehicleLightGrey ring-VehicleLightGrey placeholder:text-VehicleBlack focus:ring-2 focus:ring-inset focus:ring-VehicleBlack sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="block w-full rounded-md border-0 py-3 pl-8 pr-2 text-VehicleBlack shadow-sm ring-1 ring-inset bg-VehicleLightGrey ring-VehicleLightGrey placeholder:text-VehicleBlack focus:ring-2 focus:ring-inset focus:ring-VehicleBlack sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div>
              <Field
                type="date"
                name="date"
                className="block w-full rounded-md border-0 py-3 pl-8 pr-2 text-VehicleBlack shadow-sm ring-1 ring-inset bg-VehicleLightGrey ring-VehicleLightGrey focus:ring-2 focus:ring-inset focus:ring-VehicleBlack sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comments"
                className="block w-full resize-none bg-VehicleLightGrey rounded-md border-0 py-1.5 text-VehicleBlack shadow-sm ring-1 ring-inset ring-gray-300 h-24 placeholder:text-VehicleBlack focus:ring-2 focus:ring-inset focus:ring-VehicleBlack sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mr-auto bg-VehicleRed text-VehicleWhite text-base py-2 px-10 rounded-full hover:bg-VehicleRed-100 ease-in-out duration-300"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
