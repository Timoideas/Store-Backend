import Validate from '../libraries/Validate';
import UserSchema from '../models/user.schema';

// GETTING all DB users
export async function GET_users(req, res) {
	try {
		const users = await UserSchema.find();
		res.status(200).json({ ok: true, data: users });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// GETTING a DB user
export async function GET_user(req, res) {
	try {
		const { id } = req.params;
		const user = await UserSchema.findById(id);
		res.status(200).json({ ok: true, data: user });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// CREATING a DB user
export async function POST_user(req, res) {
	try {
		const body = await Validate(req.body, ['user']);
		const user = new UserSchema(body);
		const _user = await user.save();
		res.status(200).json({ ok: true, data: _user });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// UPDATING a DB user
export async function PUT_user(req, res) {
	try {
		const { id } = req.params;
		const body = await Validate(req.body, ['user']);
		const _user = await UserSchema.findOneAndUpdate({ _id: id }, body, {
			new: true,
		});
		res.status(200).json({ ok: true, data: _user });
	} catch ({ message }) {
		res.status(200).json({ ok: false, message });
	}
}

// DELETING a DB user
export async function DEL_user(req, res) {
	const { id } = req.body;
	UserSchema.findByIdAndDelete(id, (err, data) => {
		if (err || !data) return res.status(200).json({ ok: false, incorrect: id });
		res.status(200).json({ ok: true, data });
	});
}

