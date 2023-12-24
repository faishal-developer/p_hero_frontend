import { Button, Card, Input, Select, Tag } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { ImPrinter } from "react-icons/im";
import { CiCalendar } from "react-icons/ci";
import { FaCcVisa, FaTruckLoading } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import TextArea from "antd/es/input/TextArea";

const data = [
  {
    orderId: 2535,
    Product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="blue">Pending</Tag>,
  },
  {
    orderId: 2535,
    Product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="yellow">Shipment</Tag>,
  },
  {
    orderId: 2535,
    Product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="green">Delivery</Tag>,
  },
  {
    orderId: 2535,
    Product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="red">Canceled</Tag>,
  },
];

const thead = [
  "Shop Id",
  "Product Name",
  "Price",
  "Date",
  "Quantity",
  "Status",
];

const OrderDetail = () => {
  return (
    <Card
      title="Order Detail"
      extra={
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Select
            placeholder="Status"
            allowClear
            options={[
              { value: "ordered", label: "Ordered" },
              { value: "rejected", label: "Ordered" },
            ]}
            style={{ width: 200 }}
          />
          <ButtonGroup>
            <Button type="primary">Save</Button>
            <Button type="dashed">
              <ImPrinter />
            </Button>
          </ButtonGroup>
        </div>
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CiCalendar />
            <h4>Wed, Aug 13, 2022, 4.45 PM</h4>
          </div>
          <p>Order Id : 0014514</p>
        </div>
        <div
          style={{
            textAlign: "left",
            backgroundColor: "#f1f1f1",
            padding: 20,
            borderRadius: 8,
          }}
        >
          <h4>Payment Info</h4>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FaCcVisa />
            Master Card 21502151051
          </div>
          <p>Business Name : LLC To PSA</p>
          <p>Phone : +880 14 58 1871115</p>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr  1fr",
          marginTop: 40,
          gap: 20,
        }}
      >
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: 10,
              width: 50,
              height: 50,
              borderRadius: "50%",
              fontSize: 30,
              display: "grid",
              placeItems: "center",
            }}
          >
            <BsFillPersonFill />
          </div>
          <div>
            <h3>Customer</h3>
            <p>John De</p>
            <p>Johnde@email.com</p>
            <p>+880 14524 57412</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: 10,
              width: 50,
              height: 50,
              borderRadius: "50%",
              fontSize: 30,
              display: "grid",
              placeItems: "center",
            }}
          >
            <FaTruckLoading />
          </div>
          <div>
            <h3>Order Info</h3>
            <p>Shipping: Fargo express</p>
            <p>Pay method: card</p>
            <p>Status: new</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: 10,
              width: 50,
              height: 50,
              borderRadius: "50%",
              fontSize: 30,
              display: "grid",
              placeItems: "center",
            }}
          >
            <HiLocationMarker />
          </div>
          <div>
            <h3>Deliver to</h3>
            <p>City: Tashkent, Uzbekistan</p>
            <p>Block A, House 123, Floor 2</p>
            <p>Po Box 10000</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
          marginTop: 40,
          width: "100%",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <table style={{ width: "100%" }}>
            <tbody>
              <tr style={{ textAlign: "left" }}>
                {thead.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item.orderId}</td>
                  <td>{item.Product}</td>
                  <td>{item.unit}</td>
                  <td>{item.date}</td>
                  <td>{item.cost}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ width: "30%" }}>
          <TextArea
            style={{ width: "100%", marginBottom: 20 }}
            rows={4}
            placeholder="maxLength is 6"
            maxLength={6}
          />
          <Button>Save Note</Button>
        </div>
      </div>
    </Card>
  );
};

export default OrderDetail;
