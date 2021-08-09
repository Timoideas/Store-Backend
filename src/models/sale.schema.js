import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const SaleSchema = new Schema({
	sale: { type: String },
});
SaleSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Sale', SaleSchema);

