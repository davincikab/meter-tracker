// import faker from 'faker';

const userMeters = [
    {
        "serialNumber": "SRRR",
        "id": "IDDDDD",
        "meterName": "MNNNN",
        "macAddress": "MACCCC",
        "groupName": "TestGroup",
        "locationName": "TestLocation",
        "lat":3.0419323464180278,
        "lng":101.49973647896333,
        "meterTag": "Tagggg"
    },
    {
        "serialNumber": "88888888888",
        "id": "1",
        "meterName": "Mikro",
        "macAddress": "12:WW:42:GH:35",
        "groupName": "Apple SF",
        "locationName": null,
        "lat":3.1919323464180278,
        "lng":101.62973647896333,
        "meterTag": "Aircond 1"
    },
    {
        "serialNumber": "1989652",
        "id": null,
        "meterName": "Level 3",
        "macAddress": null,
        "groupName": "TestGroup",
        "locationName": "TestLocation",
        "lat":3.149323464180278,
        "lng":101.68973647896333,
        "meterTag": "Level 3"
    },
    {
        "serialNumber": "540640008245",
        "id": "testid",
        "meterName": "Level 2",
        "macAddress": null,
        "groupName": "TestGroup",
        "locationName": "TestLocation",
        "lat":3.1419323464180278,
        "lng":101.69973647896333,
        "meterTag": "Level 2"
    }
];

const cellTower = [
    {
      "Cell Tower Name": "SA0001",
      "Latt": "3.071594",
      "Long": 101.510468,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0002",
      "Latt": "3.06456",
      "Long": 101.512715,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0003",
      "Latt": "3.059108",
      "Long": 101.519394,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0004",
      "Latt": "3.053056",
      "Long": 101.530167,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0005",
      "Latt": "3.05502",
      "Long": 101.542465,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0006",
      "Latt": "3.065872",
      "Long": 101.542413,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0007",
      "Latt": "3.072464",
      "Long": 101.543198,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0008",
      "Latt": "3.083082",
      "Long": 101.542623,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0009",
      "Latt": "3.081215",
      "Long": 101.553709,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0010",
      "Latt": "3.064498901",
      "Long": 101.5610504,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0011",
      "Latt": "3.082067",
      "Long": 101.570258,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SA0012",
      "Latt": "3.092622",
      "Long": 101.580875,
      "District": "Shah Alam"
    },
    {
      "Cell Tower Name": "SB0001",
      "Latt": "3.075124",
      "Long": 101.582951,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0002",
      "Latt": "3.070117",
      "Long": 101.58115,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0003",
      "Latt": "3.063994",
      "Long": 101.596013,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0004",
      "Latt": "3.056431",
      "Long": 101.591434,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0005",
      "Latt": "3.054534",
      "Long": 101.582418,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0006",
      "Latt": "3.049253",
      "Long": 101.593824,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0007",
      "Latt": "3.048964",
      "Long": 101.601219,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0008",
      "Latt": "3.059255",
      "Long": 101.602749,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0009",
      "Latt": "3.065721",
      "Long": 101.599251,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0010",
      "Latt": "3.074428",
      "Long": 101.594955,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0011",
      "Latt": "3.074799",
      "Long": 101.600876,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0012",
      "Latt": "3.066924",
      "Long": 101.604197,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0013",
      "Latt": "3.074111938",
      "Long": 101.606369,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "SB0014",
      "Latt": "3.079605",
      "Long": 101.597443,
      "District": "Subang Jaya"
    },
    {
      "Cell Tower Name": "PJ0001",
      "Latt": "3.086929",
      "Long": 101.594925,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0002",
      "Latt": "3.086222",
      "Long": 101.605308,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0003",
      "Latt": "3.084565",
      "Long": 101.608331,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0004",
      "Latt": "3.082352",
      "Long": 101.615067,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0005",
      "Latt": "3.081163",
      "Long": 101.619507,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0006",
      "Latt": "3.075555",
      "Long": 101.619919,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0007",
      "Latt": "3.072021",
      "Long": 101.617468,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0008",
      "Latt": "3.087935",
      "Long": 101.616954,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0009",
      "Latt": "3.089365",
      "Long": 101.624128,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0010",
      "Latt": "3.096084595",
      "Long": 101.6201019,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0011",
      "Latt": "3.097579",
      "Long": 101.615587,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0012",
      "Latt": "3.100642",
      "Long": 101.628325,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0013",
      "Latt": "3.090591431",
      "Long": 101.6324615,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0014",
      "Latt": "3.088429",
      "Long": 101.637228,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0015",
      "Latt": "3.084457",
      "Long": 101.637131,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0016",
      "Latt": "3.079545",
      "Long": 101.634193,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0017",
      "Latt": "3.076858521",
      "Long": 101.6283417,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0018",
      "Latt": "3.074351",
      "Long": 101.63485,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0019",
      "Latt": "3.08921814",
      "Long": 101.6338348,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0020",
      "Latt": "3.092651",
      "Long": 101.628342,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "PJ0021",
      "Latt": "3.099928",
      "Long": 101.631912,
      "District": "Petaling Jaya"
    },
    {
      "Cell Tower Name": "KJ0001",
      "Latt": "3.104954",
      "Long": 101.594316,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0002",
      "Latt": "3.105698",
      "Long": 101.592178,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0003",
      "Latt": "3.105985",
      "Long": 101.59967,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0004",
      "Latt": "3.104324",
      "Long": 101.597443,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0005",
      "Latt": "3.10864",
      "Long": 101.604603,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0006",
      "Latt": "3.105697632",
      "Long": 101.6077423,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0007",
      "Latt": "3.113099",
      "Long": 101.601756,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0008",
      "Latt": "3.114968",
      "Long": 101.595446,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0009",
      "Latt": "3.11946",
      "Long": 101.599414,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0010",
      "Latt": "3.119430542",
      "Long": 101.6049957,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0011",
      "Latt": "3.12585",
      "Long": 101.604736,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0012",
      "Latt": "3.123201",
      "Long": 101.58972,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0013",
      "Latt": "3.126296997",
      "Long": 101.5857697,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0014",
      "Latt": "3.126542",
      "Long": 101.59602,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0015",
      "Latt": "3.127929",
      "Long": 101.601501,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0016",
      "Latt": "3.130302",
      "Long": 101.598244,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "KJ0017",
      "Latt": "3.119430542",
      "Long": 101.6118622,
      "District": "Kelana Jaya"
    },
    {
      "Cell Tower Name": "AD0001",
      "Latt": "3.098999",
      "Long": 101.584765,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0002",
      "Latt": "3.100204468",
      "Long": 101.5898895,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0003",
      "Latt": "3.104538",
      "Long": 101.586258,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0004",
      "Latt": "3.107070923",
      "Long": 101.5802765,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0005",
      "Latt": "3.111421",
      "Long": 101.584083,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0006",
      "Latt": "3.111190796",
      "Long": 101.5871429,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0007",
      "Latt": "3.112564087",
      "Long": 101.5898895,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0008",
      "Latt": "3.116846",
      "Long": 101.583992,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0009",
      "Latt": "3.120803833",
      "Long": 101.5885162,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0010",
      "Latt": "3.122177",
      "Long": 101.580551,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0011",
      "Latt": "3.118116",
      "Long": 101.576128,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0012",
      "Latt": "3.115523",
      "Long": 101.572757,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0013",
      "Latt": "3.115311",
      "Long": 101.567819,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0014",
      "Latt": "3.11446",
      "Long": 101.564903,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0015",
      "Latt": "3.115233",
      "Long": 101.580826,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "AD0016",
      "Latt": "3.121262",
      "Long": 101.58165,
      "District": "Ara Damansara"
    },
    {
      "Cell Tower Name": "PC0001",
      "Latt": "3.068593",
      "Long": 101.639862,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0002",
      "Latt": "3.0658721923828",
      "Long": 101.6379547,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0003",
      "Latt": "3.065021",
      "Long": 101.641059,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0004",
      "Latt": "3.06312561",
      "Long": 101.6448212,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0005",
      "Latt": "3.060875",
      "Long": 101.642165,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0006",
      "Latt": "3.060107",
      "Long": 101.644375,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0007",
      "Latt": "3.059005737",
      "Long": 101.6379547,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0008",
      "Latt": "3.0616",
      "Long": 101.633835,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0009",
      "Latt": "3.058246",
      "Long": 101.633033,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0010",
      "Latt": "3.04561",
      "Long": 101.618629,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0011",
      "Latt": "3.043442",
      "Long": 101.62056,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0012",
      "Latt": "3.042526245",
      "Long": 101.6242218,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0013",
      "Latt": "3.039397",
      "Long": 101.624988,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0014",
      "Latt": "3.037657",
      "Long": 101.618479,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0015",
      "Latt": "3.038406",
      "Long": 101.613922,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0016",
      "Latt": "3.044415",
      "Long": 101.627106,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0017",
      "Latt": "3.03154",
      "Long": 101.622849,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0018",
      "Latt": "3.032449",
      "Long": 101.615281,
      "District": "Puchong"
    },
    {
      "Cell Tower Name": "PC0019",
      "Latt": "3.034973",
      "Long": 101.613579,
      "District": "Puchong"
    }
];


// modal data
const statusData = {
  'detected activity':[
    {
      "Cell Tower Name": "PC0019",
      "Latt": "3.034973",
      "Long": 101.613579,
      "District": "Puchong",
      "Status":'Door opened today at 10PM',
      "danger":true
    },
    {
      "Cell Tower Name": "PC0014",
      "Latt": "3.037657",
      "Long": 101.618479,
      "District": "Puchong",
      "Status":'Motion detected today at 12:30PM',
      "danger":true
    },
    {
      "Cell Tower Name": "SA0012",
      "Latt": "3.092622",
      "Long": 101.580875,
      "District": "Shah Alam",
      "Status":'Motion detected today at 12:30PM with approval'
    }
  ],
  'illegal installation':[
    {
      "Cell Tower Name": "SB0011",
      "Latt": "3.074799",
      "Long": 101.600876,
      "District": "Subang Jaya",
      "Status":"additional antenna detected (monitoring)"
    },
    {
      "Cell Tower Name": "KJ0001",
      "Latt": "3.104954",
      "Long": 101.594316,
      "District": "Kelana Jaya",
      "Status":"Warning! additional energy usage detected",
      "warning":true
    },
    {
      "Cell Tower Name": "SB0012",
      "Latt": "3.066924",
      "Long": 101.604197,
      "District": "Subang Jaya",
      "Status":"additional antenna detected",
      "danger":true
    },
    {
      "Cell Tower Name": "PC0004",
      "Latt": "3.06312561",
      "Long": 101.6448212,
      "District": "Puchong",
      "Status":"additional antenna detected",
      "danger":true
    },
  ],
  'abnormal energy':[
    {
      "Cell Tower Name": "SA0012",
      "Latt": "3.092622",
      "Long": 101.580875,
      "District": "Shah Alam",
      "Status":'Increase in KWh usage per 30 minutes',
      "danger":true
    },
    {
      "Cell Tower Name": "PJ0003",
      "Latt": "3.084565",
      "Long": 101.608331,
      "District": "Petaling Jaya",
      "Status":'Under voltage detected at 210V',
      "danger":true
    },
    {
      "Cell Tower Name": "PJ0004",
      "Latt": "3.082352",
      "Long": 101.615067,
      "District": "Petaling Jaya",
      "Status":'Power factor below 0.75 rating',
      "danger":true
    },
  ],
  'structural activity':[
    {
      "Cell Tower Name": "AD0009",
      "Latt": "3.120803833",
      "Long": 101.5885162,
      "District": "Ara Damansara",
      "Status":"Critical! Tower tilting at 5°. Wind speed at 30kts ",
      "danger":true
    },
    {
      "Cell Tower Name": "PC0005",
      "Latt": "3.060875",
      "Long": 101.642165,
      "District": "Puchong",
      "Status":"Warning! Tower tilting at 2°. Wind speed at 10kts",
      "warning":true
    },
  ]
};

const cctvData = [
  {"Id":1,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//1a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//1b.jpeg","Camera":"CCTV1"},
  {"Id":2,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//2a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//2b.jpeg","Camera":"CCTV1"},
  {"Id":3,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//3a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//3b.jpeg","Camera":"CCTV1"},
  {"Id":4,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//4a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//4b.jpeg","Camera":"CCTV1"},
  {"Id":5,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//5a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//5b.jpeg","Camera":"CCTV1"},
  {"Id":6,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//6a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//6b.jpeg","Camera":"CCTV1"},{"Id":7,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//7a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//7b.jpeg","Camera":"CCTV1"},
  {"Id":8,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//8a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//8b.jpeg","Camera":"CCTV1"},
  {"Id":9,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//9a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//9b.jpeg","Camera":"CCTV1"},
  {"Id":10,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//10a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//10b.jpeg","Camera":"CCTV1"},{"Id":11,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//11a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//11b.jpeg","Camera":"CCTV1"},{"Id":12,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//12a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//12b.jpeg","Camera":"CCTV1"},{"Id":13,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//13a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//13b.jpeg","Camera":"CCTV1"},
  {"Id":14,"Before":"https://towersrtd.000webhostapp.com/CCTV1/Before//14a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV1/After//14b.jpeg","Camera":"CCTV1"},{"Id":1,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//1a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//1b.jpeg","Camera":"CCTV2"},{"Id":2,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//2a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//2b.jpeg","Camera":"CCTV2"},{"Id":3,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//3a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//3b.jpeg","Camera":"CCTV2"},{"Id":4,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//4a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//4b.jpeg","Camera":"CCTV2"},{"Id":5,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//5a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//5b.jpeg","Camera":"CCTV2"},{"Id":6,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//6a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//6b.jpeg","Camera":"CCTV2"},{"Id":7,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//7a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//7b.jpeg","Camera":"CCTV2"},{"Id":8,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//8a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//8b.jpeg","Camera":"CCTV2"},{"Id":9,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//9a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//9b.jpeg","Camera":"CCTV2"},{"Id":10,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//10a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//10b.jpeg","Camera":"CCTV2"},
  {"Id":11,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//11a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//11b.jpeg","Camera":"CCTV2"},{"Id":12,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//12a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//12b.jpeg","Camera":"CCTV2"},{"Id":13,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//13a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//13b.jpeg","Camera":"CCTV2"},{"Id":14,"Before":"https://towersrtd.000webhostapp.com/CCTV2/Before//14a.jpeg","After":"https://towersrtd.000webhostapp.com/CCTV2/After//14b.jpeg","Camera":"CCTV2"}];

const graphData = {
  titltAngle:[1, 1.2, 3, 0.5, 1, 1.4, 2, 3.2, 2.4, 1, 1.5, 0.5, 2, 2.4, 2.2, 1],
  generator:[
    {Status:"On	", "Fuel Level": 80},
    {Status:"Off", "Fuel Level": 	90},
    {Status:"On	", "Fuel Level": 100},
    {Status:"Off", "Fuel Level": 	40},
    {Status:"On	", "Fuel Level": 45},
    {Status:"Off", "Fuel Level": 	50},
    {Status:"On	", "Fuel Level": 55},
    {Status:"Off", "Fuel Level": 	60},
    {Status:"On	", "Fuel Level": 65},
    {Status:"Off", "Fuel Level": 	70},
    {Status:"On	", "Fuel Level": 75},
    {Status:"Off", "Fuel Level": 	80},
    {Status:"On	", "Fuel Level": 85},
    {Status:"Off", "Fuel Level": 	90},
    {Status:"On ", "Fuel Level": 	95},
    {Status:"Off", "Fuel Level": 	100},
  ],
  temperature:[36, 37, 33, 28, 31, 41, 34, 27, 32, 45, 33, 37, 34, 28, 32, 31],
  door:[
    {Status:"Close"	, "Lock/Unlock":"Unlock" },
    {Status:"Open", "Lock/Unlock":"Unlock" },
    {Status:"Close"	, "Lock/Unlock":"Lock" },
    {Status:"Open", "Lock/Unlock":"Unlock" },
    {Status:"Close"	, "Lock/Unlock":"Lock" },
    {Status:"Close"	, "Lock/Unlock":"Lock" },
    {Status:"Close"	, "Lock/Unlock":"Lock" },
    {Status:"Open", "Lock/Unlock":"Unlock" },
    {Status:"Close"	, "Lock/Unlock":"Lock" },
    {Status:"Close"	, "Lock/Unlock":"Lock" },
    {Status:"Close"	, "Lock/Unlock":"Unlock" },
    {Status:"Open", "Lock/Unlock":"Unlock" },
    {Status:"Close"	, "Lock/Unlock":"Lock" },
    {Status:"Close"	, "Lock/Unlock":"Lock" },
    {Status:"Open", "Lock/Unlock":"Unlock" },
    {Status:"Open", "Lock/Unlock":"Unlock" },
  ],
  wind:[7,4,10,5,7,5,8,12,7,6,3,9,10,8,7,5]
};

export { userMeters, cellTower, statusData, graphData, cctvData };