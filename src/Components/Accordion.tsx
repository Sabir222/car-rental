import { Accordion } from "flowbite-react";

export default function DefaultAccordion() {
  return (
    <div className="px-6 pb-10 max-w-[1400px] mx-auto">
      <Accordion className="bg-white">
        <Accordion.Panel className="">
          <Accordion.Title className="text-blue-700 bg-white">
            Why Choose Us for Car Rentals?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Superior selection, transparent pricing, convenient locations, and
              24/7 customer support.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-blue-700 bg-white">
            What Do Frequent Customers Get?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Exclusive offers, discounts, priority reservations, and reward
              points.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-blue-700 bg-white">
            How do I make a car rental reservation?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Making a car rental reservation with us is quick and easy! You can
              visit our website and use our user-friendly online booking system.
              Simply select your pickup and drop-off locations, choose the dates
              and times that suit you best, and browse through our wide
              selection of available vehicles. Once you've found the perfect car
              for your trip, just follow the prompts to complete your
              reservation securely. If you need any assistance, our friendly
              customer support team is always ready to help!
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
