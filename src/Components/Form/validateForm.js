export default function validateForm({ name, email, password, confirmPass }) {
	if (!name.trim()) {
		return 'Nome Obrigatório';
	}

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email Obrigatório';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email Obrigatório ';
	}
	if (!password) {
		return 'Senha Obrigatória';
	} else if (password.length < 6) {
		return 'A senha deve ter 6 caracteres ou mais';
	}

	if (!confirmPass) {
		return 'Confirme sua Senha';
	} else if (confirmPass !== password) {
		return 'Senha Errada';
	}
	return null;
}
