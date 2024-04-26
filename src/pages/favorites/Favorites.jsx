import { VehicleCardsList } from 'components/CardsList/VehicleCardsList';
import { useGetVehiclesQuery } from '../../redux/CarsSlice';
export const Favorites = () => {
  const { data: vehicles } = useGetVehiclesQuery();

  return (
    <div className=" mx-auto container px-4 py-12 gap-12 ">
      <VehicleCardsList vehicles={vehicles} />
    </div>
  );
};
