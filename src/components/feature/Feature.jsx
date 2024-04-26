import { VehicleForm } from '../Form/VehicleForm';
import { Details } from '../Details/Details';
export const Feature = ({ vehicle }) => {
  const VehicleDetails = [
    'form',
    'length',
    'width',
    'height',
    'tank',
    'consumption',
    'transmission',
    'engine',
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mt-12">
      <div>
        <ul className="flex items-center flex-wrap gap-2">
          {Object.keys(vehicle.details)?.map((feature, index) => {
            const values = Object.values(vehicle.details);
            return (
              <Details key={index} feature={feature} value={values[index]} />
            );
          })}
        </ul>
        <h3 className="mt-12 font-semibold  text-VehicleBlack-100 text-2xl">
          Vehicle details
        </h3>
        <ul>
          {VehicleDetails.map((name, index) => {
            if (vehicle[name].length === 0) return <></>;
            return (
              <li key={index} className="flex items-center justify-between">
                <p className="capitalize">{name}</p>
                <p className="capitalize">{vehicle[name]}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <VehicleForm />
    </div>
  );
};
