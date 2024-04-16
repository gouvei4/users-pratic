import mongoose, { Schema, Document } from 'mongoose';
import { Users } from '../types/users';
import { CustomerAddress } from 'src/types/users.addres';

const userSchema: Schema<CustomerAddress> = new Schema<CustomerAddress>({
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    birthday: {type: Date, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cep: {type: String, required: true},
    number: {type: String, required: true},
    address: { type: String, default: 'Empty' },
    complement: { type: String, default: 'Empty' },
    neighborhood: { type: String, default: 'Empty' },
    city: { type: String, default: 'Empty' },
    uf: { type: String, default: 'Empty' },
});

const Users = mongoose.model('Users', userSchema);

export default Users;