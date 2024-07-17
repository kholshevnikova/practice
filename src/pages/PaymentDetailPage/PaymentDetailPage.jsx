import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { getPaymentById } from "../../paymentsApi";
import { useEffect, useRef, useState } from "react";

export default function PaymentDetailPage() {
  const location = useLocation();

  const backLinkRef = useRef(location.state ?? "/payments");

  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    async function fetchPaymenst() {
      try {
        const data = await getPaymentById(paymentId);
        setPayment(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPaymenst();
  }, [paymentId]);

  return (
    <div>
      <h2>Payment id : {paymentId}</h2>
      <Link to={backLinkRef.current}>Back</Link>
      {payment && <p>{payment.cardOwner}</p>}
      <ul>
        <li>
          <NavLink to="bank">BANK INFO</NavLink>
        </li>
        <li>
          <NavLink to="receipt">RECEIPT INFO</NavLink>
        </li>
      </ul>
    </div>
  );
}
