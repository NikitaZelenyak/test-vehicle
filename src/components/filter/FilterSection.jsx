import { MapPinIcon } from "@heroicons/react/24/outline";
import { FilterDetails } from "../Details/FilterDetails";
export const FilterSection = ({
  vehicles,
  setFiltersDetails,
  filtersDetails,
  setFilterType,
  filterType,
}) => {
  const allDetails = vehicles?.flatMap((item) => Object.keys(item.details));
  const uniqueDetails = new Set(allDetails);
  const uniqueDetailsArray = Array.from(uniqueDetails);

  const allForms = vehicles?.map((item) => item.form);
  const uniqueForms = new Set(allForms);
  const uniqueFormsArray = Array.from(uniqueForms);

  return (
    <div className="">
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium leading-6 text-VehicleBlack-100"
        >
          Location
        </label>
        <div className="mt-2 relative">
          <input
            type="location"
            name="location"
            id="location"
            className="block w-full rounded-md border-0 py-3 pl-8 pr-2 text-VehicleBlack-100 shadow-sm ring-1 ring-inset bg-VehicleLightGrey ring-VehicleLightGrey placeholder:text-VehicleBlack-100 focus:ring-2 focus:ring-inset focus:ring-VehicleYellow sm:text-sm sm:leading-6"
            placeholder="Kyiv, Ukraine"
          />
          <MapPinIcon className="w-4 h-4 absolute top-[50%] left-2 text-VehicleBlack-100 translate-y-[-50%]" />
        </div>
      </div>
      <p className="mt-8">Filters</p>
      <p className="text-2xl text-VehicleBlack-100 mt-3">Vehicle equipment</p>
      <div className="flex items-center flex-wrap gap-2 mt-6 pt-6 border-t border-VehicleLightGrey">
        {uniqueDetailsArray.map((feature, index) => {
          return (
            <FilterDetails
              setFilters={setFiltersDetails}
              filters={filtersDetails}
              key={index}
              feature={feature}
              value={""}
            />
          );
        })}
      </div>
      <p className="text-2xl text-VehicleBlack-100 mt-6">Vehicle type</p>
      <ul className="flex items-center flex-wrap gap-2 mt-6 pt-6 border-t border-VehicleLightGrey">
        {uniqueFormsArray.map((form, index) => {
          return (
            <FilterDetails
              setFilters={setFilterType}
              filters={filterType}
              key={index}
              feature={form}
              value={""}
            />
          );
        })}
      </ul>
    </div>
  );
};
