import Spinner from "@/custom-components/Spinner";
import { getAuctionDetail } from "../../store/slices/auctionSlice";
import { placeBid } from "../../store/slices/bidSlice";
import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const AuctionItem = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector(
    (state) => state.auction
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const handleBid = () => {
    const formData = new FormData();
    formData.append("amount", amount);
    dispatch(placeBid(id, formData));
    dispatch(getAuctionDetail(id));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
        <div className="text-[16px] flex flex-wrap gap-2 items-center">
          <Link
            to="/"
            className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
          >
            Home
          </Link>
          <FaGreaterThan className="text-stone-400" />
          <Link
            to={"/auctions"}
            className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
          >
            Auctions
          </Link>
          <FaGreaterThan className="text-stone-400" />
          <p className="text-stone-600">{auctionDetail.title}</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-4 flex-col lg:flex-row">
                <div className="bg-white w-[100%] lg:w-40 lg:h-40 flex justify-center items-center p-5">
                  <img
                    src={auctionDetail.image?.url}
                    alt={auctionDetail.title}
                  />
                </div>
                <div className="flex flex-col justify-around pb-4">
                  <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                    {auctionDetail.title}
                  </h3>
                  <p className="text-xl font-semibold">
                    Condition:{" "}
                    <span className="text-[#D6482B]">
                      {auctionDetail.condition}
                    </span>
                  </p>
                  <p className="text-xl font-semibold">
                    Minimum Bid:{" "}
                    <span className="text-[#D6482B]">
                      Rs.{auctionDetail.startingBid}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-xl w-fit font-bold">
                Auction Item Description
              </p>
              <hr className="my-2 border-t-[1px] border-t-stone-700" />
              {auctionDetail.description &&
                auctionDetail.description.split(". ").map((element, index) => {
                  return (
                    <li key={index} className="text-[18px] my-2">
                      {element}
                    </li>
                  );
                })}
            </div>
            <div className="flex-1">
              <header className="bg-stone-200 py-4 text-[24px] font-semibold px-4">
                BIDS
              </header>
              <div className="bg-white px-4 min-h-fit lg:min-h-[650px]">
                {auctionBidders &&
                new Date(auctionDetail.startTime) < Date.now() &&
                new Date(auctionDetail.endTime) > Date.now() ? (
                  auctionBidders.length > 0 ? (
                    auctionBidders.map((element, index) => {
                      return (
                        <div
                          key={index}
                          className="py-2 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={element.profileImage}
                              alt={element.userName}
                              className="w-12 h-12 rounded-full my-2 hidden md:block"
                            />
                            <p className="text-[18px] font-semibold">
                              {element.userName}
                            </p>
                          </div>
                          {index === 0 ? (
                            <p className="text-[20px] font-semibold text-green-600">
                              1st
                            </p>
                          ) : index === 1 ? (
                            <p className="text-[20px] font-semibold text-blue-600">
                              2nd
                            </p>
                          ) : index === 2 ? (
                            <p className="text-[20px] font-semibold text-yellow-600">
                              3rd
                            </p>
                          ) : (
                            <p className="text-[20px] font-semibold text-gray-600">
                              {index + 1}th
                            </p>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-center text-gray-500 py-4">
                      No bids for this auction
                    </p>
                  )
                ) : Date.now() < new Date(auctionDetail.startTime) ? (
                  <img
                    src="/notStarted.png"
                    alt="not-started"
                    className="w-full max-h-[650px]"
                  />
                ) : (
                  <img
                    src="/auctionEnded.png"
                    alt="ended"
                    className="w-full max-h-[650px]"
                  />
                )}
              </div>

              <div className="bg-[#D6482B] py-4 text-[16px] md:text-[24px] font-semibold px-4 flex items-center justify-between">
                {Date.now() >= new Date(auctionDetail.startTime) &&
                Date.now() <= new Date(auctionDetail.endTime) ? (
                  <>
                    <div className="flex gap-3 flex-col sm:flex-row sm:items-center">
                      <p className="text-white">Place Bid</p>
                      <input
                        type="number"
                        className="w-32 focus:outline-none md:text-[20px] p-1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <button
                      className="p-4 text-white bg-black rounded-full transition-all duration-300 hover:bg-[#222]"
                      onClick={handleBid}
                    >
                      <RiAuctionFill />
                    </button>
                  </>
                ) : new Date(auctionDetail.startTime) > Date.now() ? (
                  <p className="text-white font-semibold text-xl">
                    Auction has not started yet!
                  </p>
                ) : (
                  <p className="text-white font-semibold text-xl">
                    Auction has ended!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AuctionItem;

// import { useEffect, useState } from "react";
// import { 
//   ChevronRight, 
//   Timer, 
//   Gavel, 
//   Award, 
//   Package, 
//   Info, 
//   AlertCircle
// } from "lucide-react";

// // Import shadcn components
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { 
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Skeleton } from "@/components/ui/skeleton";

// // This is a demo component that shows how the UI would look
// // In a real implementation, you would use your actual Redux and React Router setup
// const AuctionItem = () => {
//   // For demo purposes - in your real app, these would come from your hooks/state management
//   const id = "123";
//   const dispatch = (action) => console.log("Dispatched:", action);
//   const navigateTo = (path) => console.log("Navigate to:", path);
  
//   const [loading, setLoading] = useState(false);
//   const [amount, setAmount] = useState(0);
//   const [isAuthenticated, setIsAuthenticated] = useState(true);
  
//   const [auctionDetail, setAuctionDetail] = useState({
//     title: "Vintage Mechanical Watch",
//     startingBid: 5000,
//     condition: "Excellent",
//     description: "This is a rare vintage watch from the 1960s. The movement is in perfect working condition. The case shows minor signs of wear consistent with age.",
//     image: { url: "/api/placeholder/400/400" },
//     startTime: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
//     endTime: new Date(Date.now() + 86400000).toISOString() // 1 day from now
//   });
  
//   const [auctionBidders, setAuctionBidders] = useState([
//     { userName: "JohnDoe", profileImage: "/api/placeholder/40/40" },
//     { userName: "AuctionPro", profileImage: "/api/placeholder/40/40" },
//     { userName: "CollectorExpert", profileImage: "/api/placeholder/40/40" }
//   ]);

//   // In your real component, replace this with your actual implementation
//   const handleBid = () => {
//     const formData = new FormData();
//     formData.append("amount", amount);
    
//     // These would be your actual Redux actions
//     console.log(`Placing bid of ${amount} on item ${id}`);
//     // dispatch(placeBid(id, formData));
//     // dispatch(getAuctionDetail(id));
//   };

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
    
//     if (id) {
//       // dispatch(getAuctionDetail(id));
//       console.log("Fetching auction details for ID:", id);
//     }
//   }, [isAuthenticated]);
  
//   const isAuctionActive = Date.now() >= new Date(auctionDetail.startTime) && 
//                            Date.now() <= new Date(auctionDetail.endTime);
  
//   const isAuctionNotStarted = Date.now() < new Date(auctionDetail.startTime);
  
//   const getRankBadge = (index) => {
//     switch(index) {
//       case 0: return <Badge className="bg-green-500">1st</Badge>;
//       case 1: return <Badge className="bg-blue-500">2nd</Badge>;
//       case 2: return <Badge className="bg-amber-500">3rd</Badge>;
//       default: return <Badge variant="outline">{index + 1}th</Badge>;
//     }
//   };

//   return (
//     <section className="w-full ml-0 m-0 h-fit px-4 md:px-6 pt-20 lg:pl-[320px] flex flex-col bg-gray-50 min-h-screen pb-16">
//       <div className="max-w-7xl mx-auto w-full">
//         {/* Breadcrumb Navigation */}
//         <div className="text-base flex flex-wrap gap-2 items-center mb-6">
//           <a href="/" className="font-medium text-gray-600 hover:text-orange-600 transition-colors">
//             Home
//           </a>
//           <ChevronRight className="h-4 w-4 text-gray-400" />
//           <a href="/auctions" className="font-medium text-gray-600 hover:text-orange-600 transition-colors">
//             Auctions
//           </a>
//           <ChevronRight className="h-4 w-4 text-gray-400" />
//           <span className="text-gray-400">{auctionDetail.title}</span>
//         </div>

//         {loading ? (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <Skeleton className="h-96 w-full rounded-xl mb-6" />
//               <Skeleton className="h-8 w-3/4 mb-2" />
//               <Skeleton className="h-4 w-full mb-2" />
//               <Skeleton className="h-4 w-5/6" />
//             </div>
//             <div>
//               <Skeleton className="h-12 w-full mb-4" />
//               <Skeleton className="h-96 w-full rounded-xl" />
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Main Content - Left Side */}
//             <div className="lg:col-span-2">
//               {/* Product Info Card */}
//               <Card className="bg-white shadow-md border-0 overflow-hidden mb-8">
//                 <div className="flex flex-col lg:flex-row">
//                   {/* Product Image */}
//                   <div className="lg:w-1/3 p-6 bg-white flex items-center justify-center border-r border-gray-100">
//                     <div className="relative aspect-square w-full max-h-80 flex items-center justify-center bg-white rounded-lg overflow-hidden">
//                       {auctionDetail.image?.url ? (
//                         <img
//                           src={auctionDetail.image?.url}
//                           alt={auctionDetail.title}
//                           className="object-contain max-h-full max-w-full"
//                         />
//                       ) : (
//                         <Package className="h-20 w-20 text-gray-300" />
//                       )}
                      
//                       {/* Status Badge */}
//                       {isAuctionActive && (
//                         <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">
//                           Active
//                         </Badge>
//                       )}
                      
//                       {isAuctionNotStarted && (
//                         <Badge className="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600">
//                           Coming Soon
//                         </Badge>
//                       )}
                      
//                       {!isAuctionActive && !isAuctionNotStarted && (
//                         <Badge className="absolute top-2 right-2 bg-gray-500 hover:bg-gray-600">
//                           Ended
//                         </Badge>
//                       )}
//                     </div>
//                   </div>
                  
//                   {/* Product Details */}
//                   <div className="lg:w-2/3 p-6">
//                     <div className="flex flex-col h-full justify-between">
//                       <div>
//                         <TooltipProvider>
//                           <Tooltip>
//                             <TooltipTrigger asChild>
//                               <Badge className="mb-3 bg-orange-100 text-orange-800 hover:bg-orange-200 border border-orange-200">
//                                 Auction #{id}
//                               </Badge>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                               <p>Auction ID</p>
//                             </TooltipContent>
//                           </Tooltip>
//                         </TooltipProvider>
                      
//                         <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                           {auctionDetail.title}
//                         </CardTitle>
                      
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                           {/* Condition */}
//                           <div className="flex items-center gap-2">
//                             <Badge variant="outline" className="bg-gray-50 text-gray-700 gap-1 py-1.5 px-3">
//                               <Info className="h-4 w-4" />
//                               <span>Condition:</span>
//                             </Badge>
//                             <span className="font-medium text-orange-600">{auctionDetail.condition}</span>
//                           </div>
                          
//                           {/* Minimum Bid */}
//                           <div className="flex items-center gap-2">
//                             <Badge variant="outline" className="bg-gray-50 text-gray-700 gap-1 py-1.5 px-3">
//                               <Gavel className="h-4 w-4" />
//                               <span>Min Bid:</span>
//                             </Badge>
//                             <span className="font-medium text-orange-600">Rs.{auctionDetail.startingBid}</span>
//                           </div>
                          
//                           {/* Status */}
//                           {isAuctionActive && (
//                             <div className="flex items-center gap-2">
//                               <Badge variant="outline" className="bg-gray-50 text-gray-700 gap-1 py-1.5 px-3">
//                                 <Timer className="h-4 w-4" />
//                                 <span>Status:</span>
//                               </Badge>
//                               <span className="font-medium text-green-600">Bidding Open</span>
//                             </div>
//                           )}
                          
//                           {isAuctionNotStarted && (
//                             <div className="flex items-center gap-2">
//                               <Badge variant="outline" className="bg-gray-50 text-gray-700 gap-1 py-1.5 px-3">
//                                 <Timer className="h-4 w-4" />
//                                 <span>Status:</span>
//                               </Badge>
//                               <span className="font-medium text-amber-600">Starts Soon</span>
//                             </div>
//                           )}
                          
//                           {!isAuctionActive && !isAuctionNotStarted && (
//                             <div className="flex items-center gap-2">
//                               <Badge variant="outline" className="bg-gray-50 text-gray-700 gap-1 py-1.5 px-3">
//                                 <Timer className="h-4 w-4" />
//                                 <span>Status:</span>
//                               </Badge>
//                               <span className="font-medium text-gray-600">Auction Ended</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
                      
//                       {/* Bid Form */}
//                       {isAuctionActive && (
//                         <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
//                           <div className="flex-1">
//                             <Input
//                               type="number"
//                               value={amount}
//                               onChange={(e) => setAmount(e.target.value)}
//                               placeholder="Enter your bid amount"
//                               className="text-lg"
//                               min={auctionDetail.startingBid}
//                             />
//                           </div>
//                           <Button 
//                             onClick={handleBid}
//                             className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 h-auto"
//                           >
//                             <Gavel className="h-5 w-5 mr-2" /> Place Bid
//                           </Button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </Card>
              
//               {/* Description Card */}
//               <Card className="bg-white shadow-md border-0">
//                 <CardHeader className="border-b border-gray-100">
//                   <CardTitle className="flex items-center gap-2">
//                     <Info className="h-5 w-5 text-orange-600" />
//                     Item Description
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   {auctionDetail.description ? (
//                     <ul className="space-y-3">
//                       {auctionDetail.description.split(". ").map((element, index) => (
//                         element && (
//                           <li key={index} className="flex items-start gap-2 text-gray-700">
//                             <span className="inline-flex mt-1 h-2 w-2 rounded-full bg-orange-600 shrink-0"></span>
//                             <span>{element}</span>
//                           </li>
//                         )
//                       ))}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-500 italic">No description provided</p>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
            
//             {/* Bidding Activity - Right Side */}
//             <div>
//               <Card className="bg-white shadow-md border-0 sticky top-24">
//                 <CardHeader className="border-b border-gray-100 bg-gray-50">
//                   <CardTitle className="flex items-center gap-2">
//                     <Award className="h-5 w-5 text-orange-600" />
//                     Bidding Activity
//                   </CardTitle>
//                 </CardHeader>
                
//                 <CardContent className="p-0 min-h-[300px] max-h-[600px] overflow-auto">
//                   {isAuctionActive ? (
//                     auctionBidders && auctionBidders.length > 0 ? (
//                       <div className="divide-y divide-gray-100">
//                         {auctionBidders.map((bidder, index) => (
//                           <div 
//                             key={index} 
//                             className={`p-4 flex items-center justify-between ${
//                               index === 0 ? "bg-green-50" : 
//                               index === 1 ? "bg-blue-50" : 
//                               index === 2 ? "bg-amber-50" : "bg-white"
//                             } transition-colors hover:bg-gray-50`}
//                           >
//                             <div className="flex items-center gap-3">
//                               <Avatar className="h-10 w-10 border border-gray-200">
//                                 <AvatarImage src={bidder.profileImage} alt={bidder.userName} />
//                                 <AvatarFallback>{bidder.userName.charAt(0)}</AvatarFallback>
//                               </Avatar>
//                               <div>
//                                 <p className="font-medium text-gray-900">{bidder.userName}</p>
//                               </div>
//                             </div>
//                             {getRankBadge(index)}
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
//                         <AlertCircle className="h-12 w-12 text-gray-300 mb-4" />
//                         <p className="text-gray-500 mb-2">No bids yet</p>
//                         <p className="text-sm text-gray-400">Be the first to place a bid on this item!</p>
//                       </div>
//                     )
//                   ) : isAuctionNotStarted ? (
//                     <div className="p-4 flex flex-col items-center justify-center text-center">
//                       <img
//                         src="/notStarted.png"
//                         alt="not-started"
//                         className="w-full max-h-[400px] object-contain my-6"
//                       />
//                       <Badge variant="outline" className="mt-4 text-amber-600 border-amber-300">
//                         Auction starts soon
//                       </Badge>
//                     </div>
//                   ) : (
//                     <div className="p-4 flex flex-col items-center justify-center text-center">
//                       <img
//                         src="/auctionEnded.png"
//                         alt="ended"
//                         className="w-full max-h-[400px] object-contain my-6"
//                       />
//                       <Badge variant="outline" className="mt-4 text-gray-600 border-gray-300">
//                         Auction has ended
//                       </Badge>
//                     </div>
//                   )}
//                 </CardContent>
                
//                 <CardFooter className="bg-gray-50 border-t border-gray-100 p-4">
//                   {isAuctionActive ? (
//                     <p className="text-sm text-green-600 font-medium flex items-center">
//                       <Timer className="h-4 w-4 mr-2" />
//                       Bidding is currently open
//                     </p>
//                   ) : isAuctionNotStarted ? (
//                     <p className="text-sm text-amber-600 font-medium flex items-center">
//                       <Timer className="h-4 w-4 mr-2" />
//                       Auction has not started yet
//                     </p>
//                   ) : (
//                     <p className="text-sm text-gray-600 font-medium flex items-center">
//                       <Timer className="h-4 w-4 mr-2" />
//                       Auction has ended
//                     </p>
//                   )}
//                 </CardFooter>
//               </Card>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AuctionItem;