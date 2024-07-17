import { useEffect, useMemo, useState } from "react";
import { getPayments } from "../../paymentsApi";
import PaymentList from "../PaymentList/PaymentList";
import { useLocation, useSearchParams } from "react-router-dom";
import OwnerFilter from "../../components/OwnerFilter/OwnerFilter";

export default function PaymentPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ownerFilter = searchParams.get("owner") ?? "";

  const changeOwnerFilter = (newOwner) => {
    searchParams.set("owner", newOwner);
    setSearchParams(searchParams);
  };

  const [payments, setPayments] = useState([]);
  //loading
  //error
  // const [ownerFilter, setOwnerFilter] = useState("");

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    async function fetchPayments() {
      try {
        const data = await getPayments();
        setPayments(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPayments();
  }, []);

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) =>
      payment.cardOwner.toLowerCase().includes(ownerFilter.toLowerCase())
    );
  }, [payments, ownerFilter]);
  return (
    <div>
      <OwnerFilter value={ownerFilter} onFilter={changeOwnerFilter} />
      {payments.length > 0 && <PaymentList payments={filteredPayments} />}
    </div>
  );
}
