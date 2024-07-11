import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore/useCreateOrderStore.ts';

import { AddressSection } from './components/sections/AddressSection';
import { DeliveryMethodSection } from './components/sections/DeliveryMethodSection';
import { PayerSection } from './components/sections/PayerSection';
import { UserSection } from './components/sections/UserSection';

const CreateOrderPage = () => {
  const navigate = useNavigate();

  const { options, senderPoint, payer, receiverPoint, section, sender, receiver } =
    useCreateOrderStore();

  useEffect(() => {
    if (!options || !senderPoint || !receiverPoint || !section) {
      navigate('/');
    }
  }, []);

  console.log(options, senderPoint, receiverPoint, section, sender, receiver, payer);

  return (
    <div>
      {section === 'option' && <DeliveryMethodSection />}
      {section === 'receiver' && <UserSection section='receiver' />}
      {section === 'sender' && <UserSection section='sender' />}
      {section === 'receiverAddress' && <AddressSection section='receiverAddress' />}
      {section === 'senderAddress' && <AddressSection section='senderAddress' />}
      {section === 'payer' && <PayerSection />}
    </div>
  );
};

export default CreateOrderPage;
