import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const SaleSchema = new Schema({
  sale: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  total: { type: String },
  details: { type: String },
  timestamp: { type: Fecha },
});
SaleSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Sale', SaleSchema);
