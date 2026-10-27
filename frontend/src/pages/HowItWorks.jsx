// import React from "react";
// import {
//   FaUser,
//   FaGavel,
//   FaEnvelope,
//   FaDollarSign,
//   FaFileInvoice,
//   FaRedo,
// } from "react-icons/fa";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <FaUser />,
//       title: "User Registration",
//       description:
//         "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
//     },
//     {
//       icon: <FaGavel />,
//       title: "Role Selection",
//       description:
//         'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
//     },
//     {
//       icon: <FaEnvelope />,
//       title: "Winning Bid Notification",
//       description:
//         "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
//     },
//     {
//       icon: <FaDollarSign />,
//       title: "Commission Payment",
//       description:
//         "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
//     },
//     {
//       icon: <FaFileInvoice />,
//       title: "Proof of Payment",
//       description:
//         "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
//     },
//     {
//       icon: <FaRedo />,
//       title: "Reposting Items",
//       description:
//         "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
//     },
//   ];

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
//         <h1
//           className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//         >
//           Discover How QucikHammer Operates
//         </h1>
//         <div className="flex flex-col gap-4 my-5">
//           {steps.map((element, index) => {
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-md p-2 lg:p-5 flex flex-col gap-2 group hover:bg-black transition-all duration-300"
//               >
//                 <div className="bg-black text-white p-3 text-xl rounded-full w-fit group-hover:bg-[#d6482b] transition-all duration-300">
//                   {element.icon}
//                 </div>
//                 <h3
//                   className={`text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//                 >
//                   {element.title}
//                 </h3>
//                 <p className="text-xl text-stone-700 group-hover:text-[#fff] transition-all duration-300">
//                   {element.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// };

// export default HowItWorks;

import React from "react";
import { useState } from "react";
import { 
  User, 
  Gavel, 
  Mail, 
  DollarSign, 
  FileText, 
  RotateCw,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const steps = [
    {
      icon: <User className="h-6 w-6" />,
      title: "User Registration",
      description:
        "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
    },
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Role Selection",
      description:
        'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Winning Bid Notification",
      description:
        "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Commission Payment",
      description:
        "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Proof of Payment",
      description:
        "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
    },
    {
      icon: <RotateCw className="h-6 w-6" />,
      title: "Reposting Items",
      description:
        "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-4 md:px-6 lg:px-8 lg:pl-[320px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-3 py-1 text-sm bg-orange-100 text-orange-800 hover:bg-orange-200">
            Platform Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 tracking-tight">
            How QuickHammer Works
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your complete guide to buying and selling items through our auction platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-2 transition-all duration-300 ${
                hoveredIndex === index 
                  ? "border-orange-500 shadow-lg shadow-orange-100" 
                  : "border-gray-100"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`p-3 rounded-full ${
                  hoveredIndex === index 
                    ? "bg-orange-600 text-white" 
                    : "bg-orange-100 text-orange-600"
                } transition-colors duration-300`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <Badge className="mb-1 px-2 py-0.5 bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Step {index + 1}
                  </Badge>
                  <CardTitle className="text-xl md:text-2xl font-semibold">
                    {step.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {step.description}
                </CardDescription>
                <div className={`flex justify-end mt-4 ${hoveredIndex === index ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
                  <Badge className="bg-orange-600 hover:bg-orange-700 flex items-center cursor-pointer">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-6 bg-orange-50 rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Ready to get started?</h3>
          <p className="text-gray-600 mb-6">Join thousands of users already buying and selling on our platform</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
              Register Now
            </button>
            <button className="px-6 py-3 bg-white text-orange-600 border border-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors">
              Browse Auctions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;