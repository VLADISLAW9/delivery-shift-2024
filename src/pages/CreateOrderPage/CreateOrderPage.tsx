import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore.ts';

import { DeliveryMethodSection } from './components/DeliveryMethodSection';
import { FormSection } from './components/FormSection';

const CreateOrderPage = () => {
  const navigate = useNavigate();

  const { options, senderPoint, receiverPoint, section, sender, receiver } = useCreateOrderStore();

  console.log('sender', sender);
  console.log('receiver', receiver);

  useEffect(() => {
    if (!options || !senderPoint || !receiverPoint || !section) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      {section === 'option' && <DeliveryMethodSection />}
      {section === 'receiver' && <FormSection type='user' role='receiver' />}
      {section === 'sender' && <FormSection type='user' role='sender' />}
      {section === 'receiverAddress' && <FormSection type='address' role='receiver' />}
      {section === 'senderAddress' && <FormSection type='address' role='sender' />}
    </div>
  );
};

export default CreateOrderPage;
