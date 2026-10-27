// import React, { useState } from "react";
// import { RiAuctionFill } from "react-icons/ri";
// import { MdLeaderboard, MdDashboard } from "react-icons/md";
// import { SiGooglesearchconsole } from "react-icons/si";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import { FaFacebook } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
// import { FaFileInvoiceDollar } from "react-icons/fa6";
// import { FaEye } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../store/slices/userSlice";

// import { Link } from "react-router-dom";

// const SideDrawer = () => {
//       const [show, setShow] = useState(false);
    
//       const { isAuthenticated, user } = useSelector((state) => state.user);
    
//       const dispatch = useDispatch();
//       const handleLogout = () => {
//         dispatch(logout());
//       };
    
//       return (
//         <>
//           <div
//             onClick={() => setShow(!show)}
//             className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden"
//           >
//             <GiHamburgerMenu />
//           </div>
//           <div
//             className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
//               show ? "left-0" : "left-[-100%]"
//             } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
//           >
//             <div className="relative">
//               <Link to={"/"}>
//                 <h4 className="text-2xl font-semibold mb-4">
//                   Quick<span className="text-[#D6482b]">Hammer</span>
//                 </h4>
//               </Link>
//               <ul className="flex flex-col gap-3">
//                 <li>
//                   <Link
//                     to={"/auctions"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <RiAuctionFill /> Auctions
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to={"/leaderboard"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <MdLeaderboard /> Leaderboard
//                   </Link>
//                 </li>
//                 {isAuthenticated && user && user.role === "Auctioneer" && (
//                   <>
//                     <li>
//                       <Link
//                         to={"/submit-commission"}
//                         className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                       >
//                         <FaFileInvoiceDollar /> Submit Commission
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to={"/create-auction"}
//                         className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                       >
//                         <IoIosCreate /> Create Auction
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to={"/view-my-auctions"}
//                         className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                       >
//                         <FaEye /> View My Auctions
//                       </Link>
//                     </li>
//                   </>
//                 )}
//                 {isAuthenticated && user && user.role === "Super Admin" && (
//                   <li>
//                     <Link
//                       to={"/dashboard"}
//                       className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                     >
//                       <MdDashboard /> Dashboard
//                     </Link>
//                   </li>
//                 )}
//               </ul>
//               {!isAuthenticated ? (
//                 <>
//                   <div className="my-4 flex gap-2">
//                     <Link
//                       to={"/sign-up"}
//                       className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
//                     >
//                       Sign Up
//                     </Link>
//                     <Link
//                       to={"/login"}
//                       className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
//                     >
//                       Login
//                     </Link>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
//                     <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
//                       Logout
//                     </button>
//                   </div>
//                 </>
//               )}
//               <hr className="mb-4 border-t-[#d6482b]" />
//               <ul className="flex flex-col gap-3">
//                 {isAuthenticated && (
//                   <li>
//                     <Link
//                       to={"/me"}
//                       className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                     >
//                       <FaUserCircle /> Profile
//                     </Link>
//                   </li>
//                 )}
//                 <li>
//                   <Link
//                     to={"/how-it-works-info"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <SiGooglesearchconsole /> How it works
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to={"/about"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <BsFillInfoSquareFill /> About Us
//                   </Link>
//                 </li>
//               </ul>
//               <IoMdCloseCircleOutline
//                 onClick={() => setShow(!show)}
//                 className="absolute top-0 right-4 text-[28px] sm:hidden"
//               />
//             </div>
    
//             <div>
//               <div className="flex gap-2 items-center mb-2">
//                 <Link
//                   to="/"
//                   className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
//                 >
//                   <FaFacebook />
//                 </Link>
//                 <Link
//                   to="/"
//                   className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
//                 >
//                   <RiInstagramFill />
//                 </Link>
//               </div>
//               <Link
//                 to={"/contact"}
//                 className="text-stone-500 font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
//               >
//                 Contact Us
//               </Link>
//               <p className="text-stone-500">&copy; QuickHammer, LLC.</p>
//               <p className="text-stone-500">
//                 Degined By{" "}
//                 <Link
//                   to={"/"}
//                   className="font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
//                 >
//                   Prem Kumar
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </>
//       );
//     };
    

// export default SideDrawer;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../store/slices/userSlice";

// Icons
import { 
  RiAuctionFill, 
  RiInstagramFill, 
  RiCloseLine, 
  RiMenuLine,
  RiLogoutBoxRLine 
} from "react-icons/ri";
import { 
  MdLeaderboard, 
  MdDashboard,
  MdOutlineInfo 
} from "react-icons/md";
import { 
  SiGooglesearchconsole 
} from "react-icons/si";
import { 
  FaUserCircle, 
  FaFileInvoiceDollar,
  FaEye,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPlus
} from "react-icons/fa";

// shadcn components
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";
import { 
  Button 
} from "@/components/ui/button";
import { 
  Avatar, 
  AvatarImage, 
  AvatarFallback 
} from "@/components/ui/avatar";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { 
  Separator 
} from "@/components/ui/separator";
import { 
  Badge 
} from "@/components/ui/badge";

const SideDrawer = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
  };

  // Close drawer on route change for mobile
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user || !user.userName) return "QH";
    return user.userName.split(" ").map(name => name[0]).join("").toUpperCase();
  };

  // Check if route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      title: "Auctions",
      icon: <RiAuctionFill className="w-5 h-5" />,
      path: "/auctions",
      showAlways: true
    },
    {
      title: "Leaderboard",
      icon: <MdLeaderboard className="w-5 h-5" />,
      path: "/leaderboard",
      showAlways: true
    },
    {
      title: "Submit Commission",
      icon: <FaFileInvoiceDollar className="w-5 h-5" />,
      path: "/submit-commission",
      role: "Auctioneer"
    },
    {
      title: "Create Auction",
      icon: <FaPlus className="w-5 h-5" />,
      path: "/create-auction",
      role: "Auctioneer"
    },
    {
      title: "My Auctions",
      icon: <FaEye className="w-5 h-5" />,
      path: "/view-my-auctions",
      role: "Auctioneer"
    },
    {
      title: "Dashboard",
      icon: <MdDashboard className="w-5 h-5" />,
      path: "/dashboard",
      role: "Super Admin"
    },
    {
      title: "How It Works",
      icon: <SiGooglesearchconsole className="w-5 h-5" />,
      path: "/how-it-works-info",
      showAlways: true
    },
    {
      title: "About Us",
      icon: <MdOutlineInfo className="w-5 h-5" />,
      path: "/about",
      showAlways: true
    }
  ];

  // Responsive sidebar content
  const SidebarContent = () => (
    <div className="flex flex-col h-full justify-between py-6">
      {/* Logo and navigation */}
      <div className="space-y-6">
        <div className="px-3 py-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#D6482B] to-[#b8381e] flex items-center justify-center text-white font-bold">
              QH
            </div>
            <span className="text-2xl font-bold">
              Quick<span className="text-[#D6482b]">Hammer</span>
            </span>
          </Link>
        </div>
        {/* <img
                src={user.profileImage?.url}
                alt="/imageHolder.jpg"
                className="w-36 h-36 rounded-full"
              /> */}
        {isAuthenticated && user && (
          <div className="px-3 flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-[#D6482B]">
              {user.profileImage ? (
                <AvatarImage src={user.profileImage?.url} alt={user.userName} />
              ) : (
                <AvatarFallback className="bg-[#fdece8] text-[#D6482B] font-medium">
                  {getUserInitials()}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">{user.userName}</span>
              <Badge variant="outline" className="text-xs bg-[#fdece8] text-[#D6482B] border-[#ffded6]">
                {user.role}
              </Badge>
            </div>
          </div>
        )}

        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            // Check if we should show this menu item
            const shouldShow = 
              item.showAlways || 
              (isAuthenticated && user && item.role === user.role);
              
            if (!shouldShow) return null;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors group ${
                  isActiveRoute(item.path)
                    ? "bg-[#fdece8] text-[#D6482B]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className={isActiveRoute(item.path) ? "text-[#D6482B]" : "text-gray-500 group-hover:text-[#D6482B]"}>
                  {item.icon}
                </span>
                {item.title}
                {item.role && (
                  <span className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 opacity-50"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User actions and footer */}
      <div className="space-y-6">
        {isAuthenticated ? (
          <div className="px-3">
            <div className="flex flex-col gap-3">
              <Link to="/me" className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                <FaUserCircle className="w-5 h-5 text-gray-500" />
                My Profile
              </Link>
              
              <Button 
                variant="destructive" 
                className="bg-[#D6482B] hover:bg-[#b8381e] text-white w-full"
                onClick={handleLogout}
              >
                <RiLogoutBoxRLine className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <div className="px-3 flex flex-col gap-3">
            <Link to="/sign-up">
              <Button className="w-full bg-[#D6482B] hover:bg-[#b8381e] text-white">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full border-[#DECCBE] text-[#D6482B] hover:bg-[#fdece8] hover:text-[#b8381e]">
                Login
              </Button>
            </Link>
          </div>
        )}

        <Separator className="mx-3" />

        <div className="px-6">
          <div className="flex items-center justify-between mb-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
                    <FaFacebook className="h-5 w-5 text-[#D6482B]" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
                    <RiInstagramFill className="h-5 w-5 text-[#D6482B]" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
                    <FaTwitter className="h-5 w-5 text-[#D6482B]" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors">
                    <FaLinkedin className="h-5 w-5 text-[#D6482B]" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex justify-between items-center">
              <Link to="/contact" className="hover:text-[#D6482B] transition-colors">
                Contact Us
              </Link>
              <span>&copy; {new Date().getFullYear()} QuickHammer</span>
            </div>
            <p className="text-center text-gray-400">
              Designed by <Link to="/" className="font-medium hover:text-[#D6482B] transition-colors">Prem Kumar</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 z-30 h-full w-64 border-r border-gray-200 bg-white">
        <SidebarContent />
      </div>

      {/* Mobile trigger button */}
      <div className="lg:hidden fixed right-5 top-5 z-40">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button 
              size="icon" 
              className="bg-[#D6482B] hover:bg-[#b8381e] text-white shadow-lg"
            >
              <RiMenuLine className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 border-r-0 w-full sm:w-80 bg-white">
            <SidebarContent />
            <SheetClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100">
              <RiCloseLine className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      {/* Page content margin for desktop */}
      <div className="lg:pl-64"></div>
    </>
  );
};

export default SideDrawer;