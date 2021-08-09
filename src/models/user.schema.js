import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const UserSchema = new Schema({
  username: { type: String },
  name: { type: String },
  telefono: { type: String },
  password: { type: String },
  correo: { type: String },
  // compras: { type: String },
});
UserSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('User', UserSchema);
