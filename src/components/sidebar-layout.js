import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import {
  FaRegListAlt,
  FaBitcoin,
  FaSearch,
  FaRegGem,
  FaAngleRight,
  FaMoneyBillWave,
} from "react-icons/fa";

function SidebarLayout({ children }) {
  const { collapseSidebar } = useProSidebar();

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
          }}
        >
          <h4 style={{ marginRight: "1rem" }}>Cryptiko</h4>
          <FaMoneyBillWave color="orange" size={30} />
        </div>
        <Menu>
          <MenuItem
            icon={<FaSearch color="black" />}
            suffix={<FaAngleRight color="black" />}
          >
            Search
          </MenuItem>
          <MenuItem
            icon={<FaBitcoin color="black" />}
            suffix={<FaAngleRight color="black" />}
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
      <div>{children}</div>
    </div>
  );
}

export default SidebarLayout;
