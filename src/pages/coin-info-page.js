import { SidebarLayout } from "../components";
import { useParams } from "react-router-dom";

function CoinInfoPage() {
  const { coinId } = useParams();

  return (
    <SidebarLayout>
      <div>Coin page</div>
      <p>Coin ID: {coinId}</p>
    </SidebarLayout>
  );
}

export default CoinInfoPage;
