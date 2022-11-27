const data = [
	{
		slug: 'start',
		messages: [
			'Hey, nice to meet you. Welcome to my personal website.',
			'How can I help you?',
		],
		answers: [
			{ label: 'Tell me a little about yourself.', link: '/chat/bio' },
			{ label: 'Show me your projects!', link: '/chat/portfolio' },
			{ label: 'How can I contact you?', link: '/chat/contact' },
			{ label: 'Show me your Certificated', link: '/certificates' },
		],
	},
	{
		slug: 'bio',
		messages: [
			"My name is Bharat and I'm from Rajasthan, India and I'm 19 years old.",
			"I've been designing and developing stuff for the web and mobile",
			'I am working for a small startup and doing freelancing, love exploring and playing with technology',
		],
		answers: [
			{ label: 'What technologies are you using?', link: '/chat/tech' },
			{ label: "Let me see some of your work.", link: '/chat/portfolio' },
		],
	},
	{
		slug: 'tech',
		messages: [
			"I love building with React, Flutter, Node/Express right now",
			"but I don't believe in bounding myself with any tech stack",
			'I can easily learn and adapt any new technology',
		],
		answers: [
			{ label: 'Cool, show me some projects', link: '/chat/portfolio' },
		],
	},
	{
		slug: 'contact',
		messages: [
			'You can contact me on Github and LinkedIn, the links are in the left corner of this page.',
			// 'Or just simply hit me up at magnus@westhofen.me ...',
		],
		answers: [
			{
				label: "Okay! Let's start again.",
				link: '/chat/start/completed',
			},
		],
	},
	{
		slug: 'portfolio',
		messages: ['Wait a second, let me get my projects ...'],
	},
];

export default data;
