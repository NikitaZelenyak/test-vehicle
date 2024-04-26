import { CardsList } from "../../components/CardsList/CardsList";
import { FilterSection } from "../../components/Filter/FilterSection";
import { useGetVehiclesQuery } from "../../redux/CarsSlice";
import { useState } from "react";
export const Catalog = () => {
  const { data: vehicles } = useGetVehiclesQuery();
  const [filtersDetails, setFiltersDetails] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className=" mx-auto container px-4 py-12 gap-12 grid grid-cols-3">
      <div className="col-span-1 ">
        <FilterSection
          filterType={filterType}
          setFilterType={setFilterType}
          setFiltersDetails={setFiltersDetails}
          filtersDetails={filtersDetails}
          vehicles={vehicles}
        />
        <button
          onClick={() => setIsSubmitted(!isSubmitted)}
          type="button"
          className=" mt-14 bg-VehicleRed text-VehicleWhite text-base py-4 px-10 rounded-full hover:bg-VehicleRed-100 ease-in-out duration-300 "
        >
          Search
        </button>
      </div>
      <div className="col-span-2">
        <CardsList
        setIsSubmitted={setIsSubmitted}
          isSubmitted={isSubmitted}
          filterType={filterType}
          filtersDetails={filtersDetails}
          vehicles={vehicles}
        />
      </div>
    </div>
  );
};
