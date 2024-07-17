import { Route, Routes } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../../../pages/HomePage/HomePage"));
const PaymentPage = lazy(() =>
  import("../../../pages/PaymentPage/PaymentPage")
);
const PaymentDetailPage = lazy(() =>
  import("../../../pages/PaymentDetailPage/PaymentDetailPage")
);

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Navigation />

      <Suspense fallback={<div>Loading page .....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div>About page</div>} />
          <Route path="/payments" element={<PaymentPage />} />
          <Route path="/payments/:paymentId" element={<PaymentDetailPage />} />
          {/* <Route path="bank" element={<div></div>} />
          <Route path="receipt" element={<div></div>} />
        </Route>
        <Route path="*" element={<div></div>} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}
