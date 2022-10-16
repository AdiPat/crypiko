import { SidebarLayout } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner, Image, Badge, Table } from "react-bootstrap";
import { CgApi } from "../api/coingecko";
import { parseGenesisDate } from "../utils";

function CoinInfoPage() {
  const [coinInfo, setCoinInfo] = useState(null);
  const { coinId } = useParams();

  const {
    id,
    symbol,
    name,
    description,
    image,
    genesis_date,
    market_data: marketData,
  } = coinInfo ?? {};

  const genesisDate = parseGenesisDate(genesis_date);

  useEffect(() => {
    CgApi.coinById({ coinId }).then((coinInfo) => {
      setCoinInfo(coinInfo);
    });
  }, []);

  return (
    <SidebarLayout>
      <div className="coin-info-container">
        <div className="coin-info-header pt-4">
          <Image src={image?.large} width={200} height={200} />
          <div className="coin-info-header-text mx-4">
            <h2>
              {name} <Badge className="symbol-badge">{symbol}</Badge>{" "}
            </h2>
            <p>
              <strong>Genesis Date: &nbsp;</strong>
              {genesisDate}
            </p>
            <div dangerouslySetInnerHTML={{ __html: description?.en }}></div>
          </div>
        </div>
        <div className="coin-info-stats">
          <Table bordered hover>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Current Price</td>
                <td>${marketData?.current_price?.usd}</td>
              </tr>
              <tr>
                <td>Market Cap</td>
                <td>${marketData?.market_cap?.usd}</td>
              </tr>
              <tr>
                <td>Total Volume</td>
                <td>{marketData?.total_volume?.usd}</td>
              </tr>
              <tr>
                <td>24H High</td>
                <td>${marketData?.high_24h?.usd}</td>
              </tr>
              <tr>
                <td>24H Low</td>
                <td>${marketData?.low_24h?.usd}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </SidebarLayout>
  );
}

export default CoinInfoPage;
