import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import {
  FaRegListAlt,
  FaBitcoin,
  FaSearch,
  FaRegGem,
  FaAngleRight,
  FaMoneyBillWave,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SidebarLayout({ children }) {
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => () => navigate(path);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <h4 style={{ marginRight: "1rem" }}>Cryptiko</h4>
          <FaMoneyBillWave color="orange" size={30} />
        </div>
        <Menu>
          <MenuItem
            icon={<FaHome color="black" />}
            suffix={<FaAngleRight color="black" />}
            onClick={handleMenuItemClick("/")}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<FaSearch color="black" />}
            suffix={<FaAngleRight color="black" />}
            onClick={handleMenuItemClick("/search")}
          >
            Search
          </MenuItem>
          <MenuItem
            icon={<FaBitcoin color="black" />}
            suffix={<FaAngleRight color="black" />}
            onClick={handleMenuItemClick("/coins")}
          >
            Coins
          </MenuItem>
          <MenuItem
            icon={<FaRegListAlt color="black" />}
            suffix={<FaAngleRight color="black" />}
          >
            Portfolio
          </MenuItem>
          <MenuItem
            icon={<FaRegGem color="black" />}
            suffix={<FaAngleRight color="black" />}
          >
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="sidebar-container">{children}</div>
    </div>
  );
}

export default SidebarLayout;
