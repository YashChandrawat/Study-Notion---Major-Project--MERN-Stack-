import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoMdClose,
  IoMdContact,
  IoMdHome,
  IoMdLogIn,
  IoMdLogOut,
} from "react-icons/io";
import { GrCatalog } from "react-icons/gr";
import { SiAboutdotme, SiCoursera } from "react-icons/si";
import { SiGnuprivacyguard } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/authAPI";
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/Logo/Logo-Full-Dark.png";
import { GoHubot } from "react-icons/go";

export function SideDrawer() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Button onClick={openDrawer}>
        <FaBars size={24} />
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="text-black z-20 ">
        <div className="mb-2 flex items-center   justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            <img src={logo} alt="Logo" className="w-[150px]" />
          </Typography>
          <button>
            <IoMdClose onClick={closeDrawer} />
          </button>
        </div>
        <List>
          <ListItem
            className="flex gap-4 items-center"
            onClick={() => setOpen(!open)}
          >
            <IoMdHome size={24} />
            <Link to={"/"}>Home</Link>
          </ListItem>
          <ListItem
            className="flex gap-4 items-center"
            onClick={() => setOpen(!open)}
          >
            <GrCatalog size={24} />
            <Link to={"/category-catalog"}>Catalog</Link>
          </ListItem>
          <ListItem
            className="flex gap-4 items-center"
            onClick={() => setOpen(!open)}
          >
            <SiAboutdotme size={24} />
            <Link to={"/about"}>About</Link>
          </ListItem>
          <ListItem
            className="flex gap-4 items-center"
            onClick={() => setOpen(!open)}
          >
            <IoMdContact size={24} />
            <Link to={"/contact"}>Contact</Link>
          </ListItem>
          <ListItem
            className="flex gap-4 items-center"
            onClick={() => setOpen(!open)}
          >
            <GoHubot size={24} />
            <a href="https://pdf-reader-major.onrender.com/">Analyse PDF</a>
          </ListItem>
          {user ? (
            <>
              <ListItem
                className="flex gap-4 items-center"
                onClick={() => setOpen(!open)}
              >
                <IoCartOutline size={24} />
                <Link to={"/dashboard/cart"}>Cart</Link>
              </ListItem>
              <ListItem
                className="flex gap-4 items-center"
                onClick={() => setOpen(!open)}
              >
                <SiCoursera size={24} />
                <Link to={"/dashboard/enrolled-courses"}>Enrolled Courses</Link>
              </ListItem>
              <ListItem
                className="flex gap-4 items-center"
                onClick={() => {
                  dispatch(logout(navigate));
                  setOpen(!open);
                }}
              >
                <IoMdLogOut size={24} />
                <Link to={"/login"}>LogOut</Link>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem
                className="flex gap-4 items-center"
                onClick={() => setOpen(!open)}
              >
                <IoMdLogIn size={24} />
                <Link to={"/login"}>Login</Link>
              </ListItem>
              <ListItem
                className="flex gap-4 items-center"
                onClick={() => setOpen(!open)}
              >
                <SiGnuprivacyguard size={24} />
                <Link to={"/contact"}>Sign Up</Link>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
