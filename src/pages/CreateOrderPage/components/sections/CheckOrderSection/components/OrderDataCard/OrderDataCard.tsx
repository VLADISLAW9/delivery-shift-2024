import PencilIcon from '@icons/pencil.svg';
import type { Section } from '@store/hooks/useCreateOrderStore';
import { useCreateOrderStore } from '@store/hooks/useCreateOrderStore';
import { Button } from '@ui/Button';
import { Card } from '@ui/Card';
import { Typography } from '@ui/Typography';

import cls from './OrderDataCard.module.scss';

export interface OrderDataCard {
  header: {
    title: string;
    redirectTo: Section;
  };
  body: {
    title: string;
    description: string;
  }[];
}

export const OrderDataCard = ({ header, body }: OrderDataCard) => {
  const { setSection } = useCreateOrderStore();

  return (
    <Card className={cls.order_data_card} component='li'>
      <div className={cls.header}>
        <Typography variant='typography16_medium'>{header.title}</Typography>
        <Button onClick={() => setSection(header.redirectTo)} variant='clear'>
          <PencilIcon />
        </Button>
      </div>
      <div className={cls.body}>
        {body.map(({ title, description }) => (
          <div className={cls.body_item}>
            <Typography className={cls.body_title} variant='typography12_regular'>
              {title}
            </Typography>
            <Typography variant='typography16_medium'>{description}</Typography>
          </div>
        ))}
      </div>
    </Card>
  );
};
