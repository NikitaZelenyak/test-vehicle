import { useState, useEffect } from "react";
import { Card } from "../card/Card";
import { useLocation } from "react-router";
export const CardsList = ({
  vehicles,
  filterType,
  filtersDetails,
  isSubmitted,
  setIsSubmitted,
}) => {
  const [vehiclesArray, setVehiclesArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/favorites") {
      const filteredVehicles = vehicles?.filter((vehicle) => vehicle.favorites);
      setVehiclesArray(filteredVehicles);
      return;
    } else {
      if (filtersDetails.length === 0 && filterType.length === 0) {
        setVehiclesArray(vehicles);
        setIsSubmitted(false);
        return;
      }
      if (filtersDetails.length !== 0 && filterType.length !== 0) {
        const filteredVehicles = vehicles
          ?.filter((vehicle) =>
            filterType.some((type) => vehicle.form === type)
          )
          .filter((vehicle) =>
            filtersDetails.every((detail) => vehicle.details[detail] !== 0)
          );

        setVehiclesArray(filteredVehicles);
        setIsSubmitted(false);
        return;
      }

      if (filtersDetails.length !== 0 && filterType.length === 0) {
        const filteredVehicles = vehicles?.filter((vehicle) =>
          filtersDetails.every((detail) => vehicle.details[detail] !== 0)
        );

        setVehiclesArray(filteredVehicles);
        return;
      }
      if (filtersDetails.length === 0 && filterType.length !== 0) {
        const filteredVehicles = vehicles?.filter((vehicle) =>
          filterType.some((type) => vehicle.form === type)
        );

        setVehiclesArray(filteredVehicles);
        setIsSubmitted(false);
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted, location.pathname, setIsSubmitted, vehicles]);
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const itemsPerPage = 4;
  const totalPages = Math.ceil(vehiclesArray?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vehiclesArray?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {currentItems?.length > 0 ? (
        <div className="w-full">
          <ul className="flex flex-col gap-4">
            {currentItems.map((vehicle) => (
              <Card key={vehicle.id} vehicle={vehicle} />
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`mx-2 px-4 py-2 rounded-full border hover:border-VehicleRed duration-300 ease-in-out focus:border-VehicleRed ${
                  currentPage === index + 1
                    ? " bg-VehicleLightGrey text-VehicleBlack border border-VehicleRed"
                    : "bg-VehicleLightGrey"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>We don't have this type of car</p>
      )}
    </>
  );
};
