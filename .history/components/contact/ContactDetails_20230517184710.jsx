import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import Map from "@/components/Map";

const contacts = [
  {
    id: 1,
    name: "Elijah House, 3 Abbey Street, after NYSC Bus Stop, Along Kubwa Express Way. Bwari District, Abuja, Nigeria.",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "enquiries@cstemp.org",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "+234 909 2664 712",
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact details
        </h2>
        <ul className="font-general-regular mb-26">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
        <Map />
      </div>
    </div>
  );
};

export default ContactDetails;
