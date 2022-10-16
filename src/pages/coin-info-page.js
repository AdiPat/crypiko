import { SidebarLayout } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner, Image, Badge, Table } from "react-bootstrap";
import { CgApi } from "../api/coingecko";
import { parseGenesisDate } from "../utils";

function CoinInfoPage() {
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    CgApi.coinById({ coinId }).then((coinInfo) => {
      setCoinInfo(coinInfo);
    });
  }, []);

  return (
    <SidebarLayout>
      <div className="coin-info-container">
        {isLoading ? (
          <div className="centered-spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : null}
        {!isLoading && (
          <div className="coin-info-header pt-4">
            <Image src={image?.large} width={200} height={200} />
            <div className="coin-info-header-text mx-4">
              <h2>
                {name}{" "}
                <Badge className="symbol-badge" bg="warning">
                  {symbol}
                </Badge>{" "}
              </h2>
              <p>
                <strong>Genesis Date: &nbsp;</strong>
                {genesisDate}
              </p>
              <div dangerouslySetInnerHTML={{ __html: description?.en }}></div>
            </div>
          </div>
        )}
        {!isLoading && (
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
        )}
      </div>
    </SidebarLayout>
  );
}

export default CoinInfoPage;
