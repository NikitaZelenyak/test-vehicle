import { useState, useEffect } from 'react';
import { Card } from 'components/Card/Card';
import { useLocation } from 'react-router';

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
    if (location.pathname === '/favorites') {
      const filteredVehicles = vehicles?.filter(vehicle => vehicle.favorites);
      setVehiclesArray(filteredVehicles);
    } else {
      if (filtersDetails.length === 0 && filterType.length === 0) {
        setVehiclesArray(vehicles);
        setIsSubmitted(false);
      }
      if (filtersDetails.length !== 0 && filterType.length !== 0) {
        const filteredVehicles = vehicles
          ?.filter(vehicle => filterType.some(type => vehicle.form === type))
          .filter(vehicle =>
            filtersDetails.every(detail => vehicle.details[detail] !== 0)
          );
        setVehiclesArray(filteredVehicles);
        setIsSubmitted(false);
      }
      if (filtersDetails.length !== 0 && filterType.length === 0) {
        const filteredVehicles = vehicles?.filter(vehicle =>
          filtersDetails.every(detail => vehicle.details[detail] !== 0)
        );
        setVehiclesArray(filteredVehicles);
      }
      if (filtersDetails.length === 0 && filterType.length !== 0) {
        const filteredVehicles = vehicles?.filter(vehicle =>
          filterType.some(type => vehicle.form === type)
        );
        setVehiclesArray(filteredVehicles);
        setIsSubmitted(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted, location.pathname, setIsSubmitted, vehicles]);

  const itemsPerPage = 4;
  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = vehiclesArray?.slice(0, indexOfLastItem);

  return (
    <>
      {currentItems?.length > 0 ? (
        <div className="w-full">
          <ul className="flex flex-col gap-4">
            {currentItems.map(vehicle => (
              <Card key={vehicle.id} vehicle={vehicle} />
            ))}
          </ul>
          {currentItems.length < vehiclesArray.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={loadMore}
                className="mx-2 px-4 py-2 rounded-full border hover:border-VehicleRed duration-300 ease-in-out focus:border-VehicleRed bg-VehicleLightGrey"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>We don't have this type of car</p>
      )}
    </>
  );
};
