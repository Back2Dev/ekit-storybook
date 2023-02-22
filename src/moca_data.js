const listData = [
    { id: 1, Workshop: 'Newport Beach, CA', Date: '11-13 Jan 2023', Participants: '21', Progress: '100%', Type: 'Archived' },
    { id: 2, Workshop: 'Acme Inc', Date: '15-17 Feb 2023', Participants: '33', Progress: '80%', Type: 'In-house' },
    { id: 3, Workshop: 'Newport Beach, CA', Date: '23-24 Feb 2023', Participants: '30', Progress: '50%', Type: '2.5' },
    { id: 4, Workshop: 'Big Co.', Date: '25-27 Feb 2023', Participants: '40', Progress: '30%', Type: 'In-house' },
    { id: 5, Workshop: 'Newport Beach, CA', Date: '28-30 Mar 2023', Participants: '50', Progress: '10%', Type: '2.5' },
    { id: 6, Workshop: 'Small Corp', Date: '31-02 Apr 2023', Participants: '60', Progress: '0%', Type: 'In-house' },
];

const wsData = [
    {
        id: 1,
        avatar: "1",
        name: "John Smith",
        consultant: "Anette Medna",
        company: "Acme Inc.",
        role: "CEO",
        "p-progress": 0.42,
        "b-progress": 0.95,
        "peers": 0.33,
    },
    {
        id: 2,
        avatar: "2",
        name: "Jane Doe",
        consultant: "Anette Medna",
        company: "Acme Inc.",
        role: "CEO",
        "p-progress": 0.65,
        "b-progress": 0.25,
        "peers": 0.68,
    },
    {
        id: 3,
        avatar: "3",
        name: "Fmily Davis",
        consultant: "Thomas Hanks",
        company: "XYZ Inc.",
        role: "COO",
        "p-progress": 0.70,
        "b-progress": 0.5,
        "peers": 0.9,
    },
]

export { listData, wsData };