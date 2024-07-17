import PaymentCard from "../../components/App/PaymentCard/PaymentCard";
import css from "./PaymentsList.module.css";

export default function PaymentList({ payments }) {
  return (
    <ul className={css.list}>
      {payments.map((payment) => (
        <li key={payment.id}>
          <PaymentCard payment={payment} />
        </li>
      ))}
    </ul>
  );
}
