import axios from 'axios';
import { Address } from '../../types/address';

export const GetAdressDetails = async (
  cep: string,
): Promise<Address | null> => {
  const apiUrl = `https://viacep.com.br/ws/${cep}/json`;

  try {
    const response = await axios.get(apiUrl);
    const adressDetails: Address = response.data;
    return adressDetails;
  } catch (err: any) {
    console.error(err);
    return null;
  }
};