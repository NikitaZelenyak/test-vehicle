import React from "react";
import { VehicleForm } from "components/Form/VehicleForm";
import { StarIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Reviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-12">
      <div>
        <h2 className="sr-only">Customer Reviews</h2>

        <div className=" flex flex-col gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="">
              <div className="flex items-center gap-4 ">
                <p className="h-14 w-14 flex text-2xl font-semibold text-VehicleRed items-center justify-center rounded-full bg-VehicleLightGrey border border-VehicleRed">
                  {review.reviewer_name.charAt(0)}
                </p>
                <div>
                  <h3 className="font-medium text-gray-900">
                    {review.reviewer_name}
                  </h3>
                  <div className="mt-2 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.reviewer_rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-4 w-4 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="prose prose-sm mt-4 max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.comment }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <VehicleForm />
    </div>
  );
};
