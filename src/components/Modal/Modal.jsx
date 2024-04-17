import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import { StarIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Reviews } from '../reviews/Reviews';
import { Feature } from '../feature/Feature';

export const Modal = ({ setOpen, open, vehicle }) => {
  const [openFeature, setOpenFeature] = useState(true);
  const [openReviews, setOpenReviews] = useState(false);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform max-h-[600px] overflow-scroll rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                <div className="flex items-center justify-between">
                  <p>{vehicle.name}</p>
                  <IoMdClose
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className="col-span-4">
                  <div className="mt-2">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 fill-VehicleYellow" />
                      <p>
                        <span>{vehicle.rating}</span>({vehicle.reviews.length}{' '}
                        Reviews)
                      </p>
                      <div className=" ml-3 flex items-center gap-[2px]">
                        <MapPinIcon className="w-4 h-4" />
                        <p className="">{vehicle.location}</p>
                      </div>
                    </div>
                    <p className="text-VehicleBlack-100 text-2xl">{`$${
                      vehicle.price + '.00'
                    } `}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {vehicle.gallery.map((image, index) => {
                      return (
                        <img
                          key={index}
                          src={image}
                          alt=""
                          className="w-full h-full rounded-md"
                        />
                      );
                    })}
                  </div>
                  <p className="text-VehicleBlack my-6 w-full">
                    {vehicle.description}
                  </p>
                </div>
                <div className=" border-b flex items-center ">
                  <button
                    onClick={() => {
                      setOpenFeature(true);
                      setOpenReviews(false);
                    }}
                    className={`pb-6 mr-6 ${
                      openFeature ? 'border-b-4 border-VehicleRed' : ''
                    } `}
                    type="button"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => {
                      setOpenFeature(false);
                      setOpenReviews(true);
                    }}
                    className={`pb-6 ${
                      openReviews ? 'border-b-4 border-VehicleRed' : ''
                    } `}
                    type="button"
                  >
                    Reviews
                  </button>
                </div>
                {openReviews && <Reviews reviews={vehicle.reviews} />}
                {openFeature && <Feature vehicle={vehicle} />}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
