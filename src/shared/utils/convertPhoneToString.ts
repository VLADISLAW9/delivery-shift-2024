export const convertPhoneToString = (phone: string) => {
  return phone.replace('+', '').replace(/ /g, '');
};
