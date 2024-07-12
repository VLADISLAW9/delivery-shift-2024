import { Navigate, useLocation } from 'react-router-dom';
import { CheckOrderSection } from '@pages/CreateOrderPage/components/sections/CheckOrderSection';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore/useCreateOrderStore.ts';

import { AddressSection } from './components/sections/AddressSection';
import { DeliveryMethodSection } from './components/sections/DeliveryMethodSection';
import { PayerSection } from './components/sections/PayerSection';
import { UserSection } from './components/sections/UserSection';

const CreateOrderPage = () => {
  const location = useLocation();

  const { options, senderPoint, payer, receiverPoint, section } = useCreateOrderStore();

  if (!options || !senderPoint || !receiverPoint || !section) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return (
    <div>
      {section === 'option' && <DeliveryMethodSection />}
      {section === 'receiver' && <UserSection section='receiver' />}
      {section === 'sender' && <UserSection section='sender' />}
      {section === 'receiverAddress' && <AddressSection section='receiverAddress' />}
      {section === 'senderAddress' && <AddressSection section='senderAddress' />}
      {section === 'payer' && <PayerSection />}
      {section === 'checkOrder' && <CheckOrderSection />}
    </div>
  );
};

export default CreateOrderPage;
