import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Favorites", href: "/favorites" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  let location = useLocation();
  const [currentLink, setCurrentLink] = useState(0);
  useEffect(() => {
    location.pathname === "/catalog" && setCurrentLink(1);
  }, [location.pathname]);

  const linkClassNames = (index) =>
    classNames(
      currentLink === index
        ? "bg-VehicleRed-100 text-VehicleWhite"
        : "text-VehicleWhite hover:bg-VehicleRed hover:text-VehicleLightGrey",
      "rounded-md duration-300 ease-in-out px-3 py-2 text-sm font-medium"
    );

  const mobileMenuButtonStyles =
    "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white";

  const iconStyles =
    "text-VehicleWhite hover:text-VehicleRed focus:text-VehicleRed duration-300 ease-in-out";

  return (
    <Disclosure as="nav" className="bg-VehicleBlack">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className={mobileMenuButtonStyles}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:flex flex-shrink-0 items-center">
                  <Link
                    onClick={() => setCurrentLink(0)}
                    aria-label="home page"
                    to="/"
                  >
                    <TimeToLeaveIcon className={iconStyles} />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        onClick={() => setCurrentLink(index)}
                        key={item.name}
                        to={item.href}
                        className={linkClassNames(index)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                className="mr-4"
                onClick={() => setCurrentLink(0)}
                aria-label="home page"
                to="/"
              >
                <TimeToLeaveIcon className={iconStyles} />
              </Link>
              {navigation.map((item, index) => (
                <Link
                  onClick={() => setCurrentLink(index)}
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={linkClassNames(index)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
