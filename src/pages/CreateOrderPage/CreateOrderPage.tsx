import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore.ts';

import { DeliveryMethodSection } from './components/DeliveryMethodSection';
import { FormSection } from './components/FormSection';

const CreateOrderPage = () => {
  const navigate = useNavigate();

  const { options, senderPoint, receiverPoint, section, sender, receiver } = useCreateOrderStore();

  useEffect(() => {
    if (!options || !senderPoint || !receiverPoint || !section) {
      navigate('/');
    }
  }, []);

  console.log(options, senderPoint, receiverPoint, section, sender, receiver);

  return (
    <div>
      {section === 'option' && <DeliveryMethodSection />}
      {section === 'receiver' && <FormSection section='receiver' />}
      {section === 'sender' && <FormSection section='sender' />}
      {section === 'receiverAddress' && <FormSection section='receiverAddress' />}
      {section === 'senderAddress' && <FormSection section='senderAddress' />}
    </div>
  );
};

export default CreateOrderPage;
