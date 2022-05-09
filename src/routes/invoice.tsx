import {
  useParams,
  useNavigate,
  useLocation
} from 'react-router-dom';
import {
  getInvoice,
  deleteInvoice
} from '../data';

export const Invoice = () => {
  const params = useParams();
  const invoice = getInvoice(Number(params.invoiceId));
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {invoice && (
      <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>{invoice.name}: {invoice.number}</p>
        <p>Due Date: {invoice.due}</p>
        <div className="actions">
          <button
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate(`/invoices${location.search}`);
            }}
          >Delete</button>
        </div>
      </main>
      )}
    </>
  );
};
