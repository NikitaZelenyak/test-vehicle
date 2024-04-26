import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { Details } from '../Details/DetailsFeatures';
import { useState } from 'react';
import { useUpdateVehicleMutation } from '../../redux/CarsSlice';
import { Modal } from 'components/UI/Modal/VehicleModal';

export const Card = ({ vehicle }) => {
  const [updateVehicle] = useUpdateVehicleMutation();
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(vehicle.favorites);

  const handleUpdateFavorites = async () => {
    try {
      const updatedFavorites = !isFavorite;
      await updateVehicle({ id: vehicle.id, favorites: updatedFavorites });
      setIsFavorite(updatedFavorites);
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };
  return (
    <>
      <Modal setOpen={setOpen} open={open} vehicle={vehicle} />
      <li className="  grid items-center grid-cols-7 p-6 gap-6 border border-VehicleBlack rounded-md">
        <div className="col-span-3">
          <img
            src={vehicle.gallery[0]}
            alt=""
            width={290}
            height={310}
            className="w-full h-[300px] rounded-md"
          />
        </div>
        <div className="col-span-4">
          <div className="flex items-center justify-between">
            <h2 className="text-VehicleBlack-100 text-2xl">{vehicle.name}</h2>
            <div className="flex items-center gap-3 ">
              <p className="text-VehicleBlack-100 text-2xl">{`$${
                vehicle.price + '.00'
              } `}</p>
              <button type="button" onClick={handleUpdateFavorites}>
                <HeartIcon
                  className={`w-6 h-6 text-VehicleBlack-100 hover:text-VehicleRed cursor-pointer hover:fill-VehicleRed focus:fill-VehicleRed ${
                    isFavorite ? 'fill-VehicleRed text-VehicleRed' : ''
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-1 ">
              <StarIcon className="w-4 h-4 fill-VehicleYellow underline" />
              <p className="underline">
                <span>{vehicle.rating}</span>({vehicle.reviews.length} Reviews)
              </p>
              <div className=" ml-3 flex items-center gap-[2px]">
                <MapPinIcon className="w-4 h-4" />
                <p className="">{vehicle.location}</p>
              </div>
            </div>
          </div>
          <p className="text-VehicleBlack my-6 w-full h-6 overflow-hidden">
            {vehicle.description}
          </p>
          <ul className="flex items-center flex-wrap gap-2">
            {Object.keys(vehicle.details).map((feature, index) => {
              const values = Object.values(vehicle.details);
              return (
                <Details key={index} feature={feature} value={values[index]} />
              );
            })}
          </ul>
          <button
            onClick={() => setOpen(true)}
            type="button"
            className=" mt-6 bg-VehicleRed text-VehicleWhite text-base py-4 px-10 rounded-full hover:bg-VehicleRed-100 ease-in-out duration-300 "
          >
            Show More
          </button>
        </div>
      </li>
    </>
  );
};
