import Validate from '../libraries/Validate';
import SaleSchema from '../models/sale.schema';

// GETTING all DB sales
export async function GET_sales(req, res) {
	try {
		const sales = await SaleSchema.find();
		res.status(200).json({ ok: true, data: sales });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// GETTING a DB sale
export async function GET_sale(req, res) {
	try {
		const { id } = req.params;
		const sale = await SaleSchema.findById(id);
		res.status(200).json({ ok: true, data: sale });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// CREATING a DB sale
export async function POST_sale(req, res) {
	try {
		const body = await Validate(req.body, ['sale']);
		const sale = new SaleSchema(body);
		const _sale = await sale.save();
		res.status(200).json({ ok: true, data: _sale });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// UPDATING a DB sale
export async function PUT_sale(req, res) {
	try {
		const { id } = req.params;
		const body = await Validate(req.body, ['sale']);
		const _sale = await SaleSchema.findOneAndUpdate({ _id: id }, body, {
			new: true,
		});
		res.status(200).json({ ok: true, data: _sale });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// DELETING a DB sale
export async function DEL_sale(req, res) {
	const { id } = req.body;
	SaleSchema.findByIdAndDelete(id, (err, data) => {
		if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
		res.status(200).json({ ok: true, data });
	});
}

