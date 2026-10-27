// import React from "react";

// const About = () => {
//   const values = [
//     {
//       id: 1,
//       title: "Integrity",
//       description:
//         "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
//     },
//     {
//       id: 2,
//       title: "Innovation",
//       description:
//         "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
//     },
//     {
//       id: 3,
//       title: "Community",
//       description:
//         "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
//     },
//     {
//       id: 4,
//       title: "Customer Focus",
//       description:
//         "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
//     },
//   ];

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-7 flex flex-col min-h-screen py-4 justify-center">
//         <div>
//           <h1
//             className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
//           >
//             About Us
//           </h1>
//           <p className="text-xl text-stone-600">
//             Welcome to QucikHammmer, the ultimate destination for online auctions
//             and bidding excitement. Founded in 2025, we are dedicated to
//             providing a dynamic and user-friendly platform for buyers and
//             sellers to connect, explore, and transact in a secure and seamless
//             environment.
//           </p>
//         </div>
//         <div>
//           <h3
//             className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Our Mission
//           </h3>
//           <p className="text-xl text-stone-600">
//             At QucikHammmer, our mission is to revolutionize the way people buy and
//             sell items online. We strive to create an engaging and trustworthy
//             marketplace that empowers individuals and businesses to discover
//             unique products, make informed decisions, and enjoy the thrill of
//             competitive bidding.
//           </p>
//         </div>
//         <div>
//           <h3
//             className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Our Values
//           </h3>
//           <ul className="list-inside">
//             {values.map((element) => {
//               return (
//                 <li className="text-xl text-stone-600 mb-2" key={element.id}>
//                   <span className="text-black font-bold">{element.title}</span>:{" "}
//                   {element.description}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <div>
//           <h3
//             className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Our Story
//           </h3>
//           <p className="text-xl text-stone-600">
//             Founded by Prem Kumar, QucikHammer was born out of a passion for
//             connecting people with unique and valuable items. With years of
//             experience in the auction industry, our team is committed to
//             creating a platform that offers an unparalleled auction experience
//             for users worldwide.
//           </p>
//         </div>
//         <div>
//           <h3
//             className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
//           >
//             Join Us
//           </h3>
//           <p className="text-xl text-stone-600">
//             Whether you're looking to buy, sell, or simply explore, QucikHammer
//             invites you to join our growing community of auction enthusiasts.
//             Discover new opportunities, uncover hidden gems, and experience the
//             thrill of winning your next great find.
//           </p>
//         </div>
//         <div>
//           <p className="text-[#d6482b] text-xl font-bold mb-3">
//             Thank you for choosing QuickHammer. We look forward to being a part of
//             your auction journey!
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;
import React from "react";
import { 
  Heart, 
  Zap, 
  Users, 
  Headphones, 
  ChevronDown, 
  Clock, 
  Award, 
  Check
} from "lucide-react";

import { 
  Card, 
  CardContent,
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
      icon: <Check className="h-8 w-8 text-orange-600" />,
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
      icon: <Zap className="h-8 w-8 text-orange-600" />,
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
      icon: <Users className="h-8 w-8 text-orange-600" />,
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
      icon: <Headphones className="h-8 w-8 text-orange-600" />,
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Founded",
      description: "QucikHammer was established by Prem Kumar with a vision to revolutionize online auctions."
    },
    {
      year: "2025",
      title: "Platform Launch",
      description: "Our initial platform launched with core auction functionality and attracted our first 1,000 users."
    },
    {
      year: "2025",
      title: "Mobile App",
      description: "We expanded our accessibility with dedicated iOS and Android mobile applications."
    },
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "5,000+", label: "Auctions Completed" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full ml-0 px-4 pt-24 lg:pl-[320px] pb-16 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 px-4 py-1 mb-4">
              Our Story
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-orange-600 mb-6">
              About Us
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
              Welcome to QucikHammer, the ultimate destination for online auctions
              and bidding excitement. Founded in 2025, we are dedicated to
              providing a dynamic and user-friendly platform for buyers and
              sellers to connect, explore, and transact in a secure and seamless
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 lg:pl-[320px]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At QucikHammer, our mission is to revolutionize the way people buy and
                sell items online. We strive to create an engaging and trustworthy
                marketplace that empowers individuals and businesses to discover
                unique products, make informed decisions, and enjoy the thrill of
                competitive bidding.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 h-auto text-lg">
                Join Our Community
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-full bg-orange-100 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4"></div>
              <div className="aspect-video rounded-lg bg-white shadow-lg p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Award className="h-16 w-16 text-orange-600 mx-auto" />
                  <h3 className="text-2xl font-semibold text-gray-900">Excellence in Every Auction</h3>
                  <p className="text-gray-600">Our commitment to quality and service makes us the trusted choice for buyers and sellers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 lg:pl-[320px] bg-orange-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 lg:pl-[320px] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 mb-4">
              What We Stand For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at QucikHammer, from platform development to customer interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.id} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    {value.icon}
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 lg:pl-[320px] bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Founded by Prem Kumar, QucikHammer was born out of a passion for
              connecting people with unique and valuable items. With years of
              experience in the auction industry, our team is committed to
              creating a platform that offers an unparalleled auction experience
              for users worldwide.
            </p>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:w-0.5 before:bg-orange-200 before:h-full">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-orange-50 bg-orange-600 text-white z-10 md:mx-auto md:relative md:left-0">
                  <Clock className="w-4 h-4" />
                </div>
                <Card className={`w-[calc(100%-4rem)] md:w-[45%] border-none shadow-md ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <CardHeader>
                    <Badge className="w-fit bg-orange-100 text-orange-700 mb-2">{item.year}</Badge>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 lg:pl-[320px] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Whether you're looking to buy, sell, or simply explore, QucikHammer
              invites you to join our growing community of auction enthusiasts.
              Discover new opportunities, uncover hidden gems, and experience the
              thrill of winning your next great find.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                Create an Account
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-orange-700 text-lg px-8 py-6 h-auto">
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-12 px-4 lg:pl-[320px] bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-semibold text-orange-600">
            Thank you for choosing QuickHammer. We look forward to being a part of
            your auction journey!
          </p>
          <Separator className="my-8 bg-orange-200 max-w-md mx-auto" />
          <p className="text-gray-600">© 2025 QucikHammer. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default About;