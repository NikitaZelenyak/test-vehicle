import AirIcon from "@mui/icons-material/Air";
import BathroomIcon from "@mui/icons-material/Bathroom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BedIcon from "@mui/icons-material/Bed";
import { ImTv } from "react-icons/im";
import { FaCompactDisc } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { LuShowerHead } from "react-icons/lu";
import { TbToiletPaper } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbMicrowave } from "react-icons/tb";
import { ReactComponent as Hob } from "../../image/svg/hob.svg";
import { ReactComponent as Van } from "../../image/svg/Van.svg";
import { ReactComponent as FullyIntegrated } from "../../image/svg/FullyIntegrated.svg";
import { ReactComponent as Alcove } from "../../image/svg/Alcove.svg";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { IoWaterOutline } from "react-icons/io5";


export const Details = ({ feature, value }) => {
  if (value === 0 || value === "undefined") return;
  const iconMap = {
    TV: ImTv,
    CD: FaCompactDisc,
    radio: FaRadio,
    shower: LuShowerHead,
    toilet: TbToiletPaper,
    freezer: CgSmartHomeRefrigerator,
    microwave: TbMicrowave,
    hob: Hob,
    panelTruck:Van,
    fullyIntegrated:FullyIntegrated,
    alcove:Alcove,
    gas: WhatshotIcon,
    water: IoWaterOutline,
    airConditioner: AirIcon,
    bathroom: BathroomIcon,
    kitchen: RestaurantIcon,
    beds: BedIcon,
  };

  const IconComponent = iconMap[feature];
  return (
    <li className="flex items-center gap-1 rounded-full px-5 py-3 bg-VehicleLightGrey">
      {IconComponent && (
        <IconComponent className="!w-5 !h-5 text-VehicleBlack-200 " />
      )}
      <span>{value}</span>
      <p className="capitalize">{feature}</p>
    </li>
  );
};
