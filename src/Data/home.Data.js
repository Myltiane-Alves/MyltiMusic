export const heroOne = {
	id: 'about',
	inverse: true,
	bigImage: true,
	topLine: {
		text: 'MLMusic',
		extraText: 'Nova',
	},
	headline: 'Nunca pare de ouvir',
	description:
		'Desfrute de conteúdo de áudio onde, quando e como quiser. MlMusic disponível em centenas de dispositivos portáteis',
	buttonLabel: 'Inscreva-se',
	imgStart: 'start',
	img: './images/art2.jpg',
	bottomImg: './images/recording.svg',
	start: 'true',
};

export const heroTwo = {
	id: 'services',

	reverse: true,

	lightBg: false,
	topLine: {
		text: 'Melhor Play List',
		extraText: '',
	},
	headline: 'Batidas que tocam seu coração',
	description:
		'Escolha a sua melhor escolha de música com uma enorme biblioteca Das nossas melhores canções e cantores favoritos',
	buttonLabel: 'Saiba mais',
	linkTo: '/more',
	imgStart: '',
	img: './images/hero.jpg',
	bottomImg: '',
	alt: 'Vault',
	start: 'true',
};

export const heroThree = {
	id: 'products',

	bigImage: true,
	smallSection: true,
	inverse: true,
	topLine: {
		text: 'Inscreva-Se',
		extraText: '',
	},
	headline: 'Seu parceiro musical',
	description:
		'Nós ajudamos você a entender a música do design e impulsionar a transformação de dentro para fora',
	buttonLabel: 'Baixar',
	linkTo: '/download',
	imgStart: '',
	img: './images/music.png',
	bottomImg: '',
	alt: 'Vault',
	start: 'true',
};

export const pricingData = [
	{
		title: 'Individual',
		price: 'R$14,99/ Por Mês',
		numAcc: '1 Pessoas',
		features: ['Ouça música sem anúncios', 'Escute em qualquer lugar - até mesmo off-line', 'Ouça Agora Mesmo'],
	},
	{
		title: 'Casal',
		price: 'R$18,99/  Por Mês',
		numAcc: '2 Pessoas',
		features: [
			'2 contas premium para ouvir músicas de qualquer lugar',
			'Uma playlist Esperando Por vocês',
			'Ouça música sem anúncios, toque off-line e reprodução sob demanda',
		],
	},
	{
		title: 'Família',
		price: 'R$22,99/  Por Mês',
		numAcc: '3 Pessoas',
		features: [
			'3 contas premium para ouvir músicas de qualquer lugar',
			'Uma playlist Esperando Por vocês',
			'Ouça PodCast',
			'Ouça música sem anúncios, toque off-line e reprodução sob demanda',
		],
	},

	{
		title: 'Studante',
		price: 'R$7,99/  Por Mês',
		numAcc: '1 Pessoa',
		features: [
			'Desconto especial para Estudantes',
			'Uma playlist Esperando Por vocês',
			'Ouça música sem anúncios, toque off-line e reprodução sob demanda',
		],
	},
];
