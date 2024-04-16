import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Address } from '../../types/address'; 
import { GetAdressDetails } from '../../utils/axios/axios'; 
import Users from '../../model/userModel';
import bcrypt from 'bcrypt';

class CreateUserService {
  public async createUser(request: Request, response: Response) {
    try {
      const hashedPassword = await bcrypt.hash(request.body.password, 10);

      if (request.body.cep) {
        try {
          const address: Address | null = await GetAdressDetails(
            request.body.cep as string,
          );

          if (address) {
            request.body = {
              ...request.body,
              address: address.logradouro,
              complement: address.complemento,
              neighborhood: address.bairro,
              city: address.localidade,
              uf: address.uf,
            };
          }
        } catch (error) {
          console.error('Error fetching address details:', error);
        }
      }

      const newUser = new Users({
        ...request.body,
        password: hashedPassword,
      });

      const savedClient = await newUser.save();

      response.status(StatusCodes.CREATED).json({
        message: 'Client created successfully!',
        savedClient: {
          ...savedClient.toJSON(),
        },
      });
    } catch (error) {
      console.error('Error creating user:', error);
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Oops! Something went wrong. Please try again later.' });
    }
  }
}

export default new CreateUserService();
