import type { Address } from '@appTypes/address.ts';
import type { User } from '@appTypes/user.ts';
import type { Section } from '@store/hooks/useCreateOrderStore';

interface OrderDataItem {
  title: string;
  redirectTo: Section;
  body: { title: string; description: string }[];
}

interface UserItem extends OrderDataItem {
  user: User;
}

interface AddressItem extends OrderDataItem {
  address: Address;
}

const createUserBody = (user: User) => [
  {
    title: 'ФИО',
    description: `${user?.firstname} ${user?.lastname} ${user?.middlename ?? ''}`
  },
  {
    title: 'Телефон',
    description: `${user?.phone}`
  }
];

const createAddressBody = (address: Address) => [
  {
    title: 'Адрес',
    description: `ул. ${address?.street} д. ${address?.house}, кв. ${address?.apartment}`
  },
  {
    title: 'Заметки',
    description: address?.comment ?? 'Нет данных'
  }
];

export const getOrderDetailsItems = (
  receiver: User,
  sender: User,
  senderAddress: Address,
  receiverAddress: Address
) => {
  const users: UserItem[] = [
    { user: receiver, title: 'Получатель', redirectTo: 'receiver', body: createUserBody(receiver) },
    { user: sender, title: 'Отправитель', redirectTo: 'sender', body: createUserBody(sender) }
  ];

  const address: AddressItem[] = [
    {
      address: senderAddress,
      title: 'Куда доставить',
      redirectTo: 'senderAddress',
      body: createAddressBody(senderAddress)
    },
    {
      address: receiverAddress,
      title: 'Откуда забрать',
      redirectTo: 'receiverAddress',
      body: createAddressBody(receiverAddress)
    }
  ];

  return [...users, ...address];
};
