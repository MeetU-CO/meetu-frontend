import OfferFormTemplate from "../../templates/OfferForm/OfferForm";

interface IOfferForm {}

const OfferForm = ({}: IOfferForm) => {
  return (
    <div className="offerForm">
      <OfferFormTemplate />
    </div>
  );
};

export default OfferForm;
