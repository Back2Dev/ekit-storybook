const participantData = [
	{
		_id: 1,
		avatar: "1",
		name: "John Smith",
		consultant: "Anette Medna",
		company: "Acme Inc.",
		role: "CEO",
		last_updated: "2021-08-25T00:00:00.000Z",
		progress: "80%",
		phone: "1234567890",
		email: "john@smith.com",
		forms: [
			{
				_id: "f_q10a",
				f_name: "Q10A - Key Personel List",
				f_slug: "Q10A",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "f_q10a form",
			},
			{
				_id: "f_q1",
				f_name: "Q1 - Participant's Questionnaire",
				f_slug: "Q1",
				complete: false,
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: false,
				url: "f_q1 form",

			},
			{
				_id: "f_q2",
				f_name: "Q2 - Participant's Questionnaire",
				f_slug: "Q2",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "f_q2 form",
			},
			{
				_id: "f_q3",
				f_name: "Q3 - Participant's Questionnaire",
				f_slug: "Q3",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "f_q3 form",
			},
			{
				_id: "f_q4",
				f_name: "Q4 - Participant's Questionnaire",
				f_slug: "Q4",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: false,
				url: "f_q4 form",
			},
			{
				_id: "f_q5",
				f_name: "Q5 - Participant's Questionnaire",
				f_slug: "Q5",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "f_q5 form",
			},
			{
				_id: "f_q6",
				f_name: "Q6 - Participant's Questionnaire",
				f_slug: "Q6",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "f_q6 form",
			}
		],
		peer_forms: [
			{
				_id: "p1",
				p_name: "Ethan Chen",
				f_name: "Q10 - Key Personel Questionmaire",
				f_slug: "Q10",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "pf_10 form",
			},
			{
				_id: "p2",
				p_name: "Jasmine Patel",
				f_name: "Q10 - Key Personel Questionmaire",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "pf_10 form",
			},
			{
				_id: "p3",
				p_name: "Will James",
				f_name: "Q10 - Key Personel Questionmaire",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "pf_10 form",
			}
		],
		boss_forms: [
			{
				_id: "b1",
				b_name: "Ethan Chen",
				f_name: "Q10 - Key Personel Questionmaire",
				f_slug: "Q10",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "b_10 form",
			},
			{
				_id: "b2",
				b_name: "Jasmine Patel",
				f_name: "Q10 - Key Personel Questionmaire",
				last_update: "2021-04-19T17:00:00.000Z",
				due_date: "2021-04-19T17:00:00.000Z",
				complete: true,
				url: "b_10 form",
			}
		]
	}
]


const listData = [
	{ id: 1, Workshop: 'Newport Beach, CA', Date: '11-13 Jan 2023', Participants: '21', Progress: 1, Type: 'Archived' },
	{ id: 2, Workshop: 'Acme Inc', Date: '15-17 Feb 2023', Participants: '33', Progress: 0.8, Type: 'In-house' },
	{ id: 3, Workshop: 'Newport Beach, CA', Date: '23-24 Feb 2023', Participants: '30', Progress: 0.5, Type: '2.5' },
	{ id: 4, Workshop: 'Big Co.', Date: '25-27 Feb 2023', Participants: '40', Progress: 0.3, Type: 'In-house' },
	{ id: 5, Workshop: 'Newport Beach, CA', Date: '28-30 Mar 2023', Participants: '50', Progress: 0.1, Type: '2.5' },
	{ id: 6, Workshop: 'Small Corp', Date: '31-02 Apr 2023', Participants: '60', Progress: 0, Type: 'In-house' },
];

const wsData = [
	{
		id: 1,
		avatar: "1",
		name: "John Smith",
		consultant: "Anette Medna",
		company: "Acme Inc.",
		role: "CEO",
		"pProgress": 0.42,
		"bProgress": 0.95,
		"peers": 0.33,
	},
	{
		id: 2,
		avatar: "2",
		name: "Jane Doe",
		consultant: "Anette Medna",
		company: "Acme Inc.",
		role: "CEO",
		"pProgress": 0.65,
		"bProgress": 0.25,
		"peers": 0.68,
	},
	{
		id: 3,
		avatar: "3",
		name: "Fmily Davis",
		consultant: "Thomas Hanks",
		company: "XYZ Inc.",
		role: "COO",
		"pProgress": 0.70,
		"bProgress": 0.5,
		"peers": 0.9,
	},
]

export { listData, wsData, participantData };