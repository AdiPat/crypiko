import { Spinner, Card, Badge, Button } from "react-bootstrap";

function CoinsListCard({ coin }) {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    price_change_24h,
  } = coin;

  return (
    <li className="coins-list-item">
      <Card style={{ width: "300px", height: "500px" }}>
        <Card.Img className="p-3" variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {name} <Badge bg="warning">{symbol}</Badge>
          </Card.Title>
          <Card.Text>
            <div className="coins-list-info-block">
              <h6 className="coins-list-info-text">
                Current Price: <span>${current_price}</span>
              </h6>
              <h6 className="coins-list-info-text">
                Market Cap Rank: <span>{market_cap_rank}</span>
              </h6>
              <Button className="my-4" variant="primary">
                Know More
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </li>
  );
}

export default CoinsListCard;
