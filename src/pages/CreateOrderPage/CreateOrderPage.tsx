import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore.ts';

import { DeliveryMethodSection } from './components/DeliveryMethodSection';
import { ReceiverSection } from './components/ReceiverSection';

const CreateOrderPage = () => {
  const navigate = useNavigate();

  const { options, senderPoint, receiverPoint, section } = useCreateOrderStore();

  useEffect(() => {
    if (!options || !senderPoint || !receiverPoint || !section) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      {section === 'option' && <DeliveryMethodSection />}
      {section === 'receiver' && <ReceiverSection />}
    </div>
  );
};

export default CreateOrderPage;
