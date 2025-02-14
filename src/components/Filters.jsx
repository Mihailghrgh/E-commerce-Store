import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormCheckBox from "./FormCheckBox";

const Filters = () => {
  const { meta } = useLoaderData();
  const { categories, companies } = meta;

  return (
    <Form className="bg-primary-content items-center rounded-md px-8 py-4 gap-x-4 gap-y-8 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2">
      {/* SEARCH FORM */}
      <FormInput
        type="search"
        label="Search product"
        name="search"
        size="input-sm"
      />
      {/* SEARCH FORM CATEGORIES */}
      <FormSelect
        label="select company"
        name="company"
        list={companies}
        size="select-sm"
      />
      {/* SEARCH FORM COMPANY */}
      <FormSelect
        label="select Category"
        name="categories"
        list={categories}
        size="select-sm"
      />
      {/* SEARCH FORM ORDER */}
      <FormSelect
        label="Sort by"
        name="order"
        list={[`a-z`, `z-a`, `high`, `low`]}
        size="select-sm"
      />
      {/* SEARCH BY MONEY */}
      <FormRange name="price" label="select price" size="range-sm" />
      {/* SHIPPING FORM  */}
      <FormCheckBox name="shipping" label="Free shipping" size="checkbox-sm" />
      {/* BUTTONS FORM */}
      <div className="flex gap-x-4 mt-4 sm:mt-9 ">
        <button
          type="submit"
          className="w-full btn btn-primary btn-sm flex-1 sm:flex-initial"
        >
          Search
        </button>
      </div>
      <div className="flex gap-x-4 mt-4 sm:mt-9">
        <Link
          to="/products"
          className="w-full btn btn-secondary btn-sm flex-1 sm:flex-initial"
        >
          Reset
        </Link>
      </div>
    </Form>
  );
};
export default Filters;
