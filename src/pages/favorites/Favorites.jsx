import { CardsList } from "../../components/cardsList/CardsList";

import { useGetVehiclesQuery } from "../../redux/CarsSlice";
export const Favorites = () => {
  const { data: vehicles } = useGetVehiclesQuery();

  return (
    <div className=" mx-auto container px-4 py-12 gap-12 ">
      <CardsList vehicles={vehicles} />
    </div>
  );
};
