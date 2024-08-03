export default function DeliveryNotification() {
  return (
    <>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Notifications
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          We&apos;ll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>

        <div className="mt-10 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              By Email
            </legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-900"
                  >
                   Packaged
                  </label>
                  <p className="text-gray-500">
                    Get notified when your item is been packaged and ready for shipping.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="candidates"
                    className="font-medium text-gray-900"
                  >
                    Shipped
                  </label>
                  <p className="text-gray-500">
                    Get notified when your item is shipped.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Delivered
                  </label>
                  <p className="text-gray-500">
                    Get notified when your item is been shipped.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}
