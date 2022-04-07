/* global require console process Promise module */

const express = require('express'),
  app = express();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getTail() {
  let c = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  return `N${getRandomInt(9999)}${c[getRandomInt(c.length - 1)]}`;
}

function getAirline() {
  const airlines = [
    'SWA',
    'AAL',
    'BAW',
    'DAL',
    'UAE',
    'KLM',
    'DLH',
    'ASA',
    'UAL',
    'FDX',
    'PXM',
    'SKW',
    'JBU',
    'ACA',
    'QXE',
    'NKS',
    'VIR',
    'LXJ',
    'QFA',
  ];
  return airlines[getRandomInt(airlines.length - 1)];
}

function getTime() {
  return '01:23';
}

function getFlight() {
  return getRandomInt(2000);
}

function getHeading() {
  return getRandomInt(359)
    .toString()
    .padStart(3, '0');
}

function getGate() {
  const t = ['A', 'B', 'C'][getRandomInt(2)];
  const g = getRandomInt(30);
  return `${t}${g}`;
}

function getCity() {
  const cities = [
    'Atlanta',
    'Baltimore',
    'Charleston',
    'Durban',
    'Edinburgh',
    'Frankfurt',
    'Galveston',
    'Havana',
    'Iowa City',
    'Jakarta',
    'Karachi',
    'Los Angeles',
    'Mexico City',
    'Nairobi',
    'Ontario',
    'Pittsburgh',
    'Quebec City',
    'Roanoake',
    'San Diego',
    'Tallahassee'
  ];
  return cities[getRandomInt(20)];
}

function getTime() {
  let hrs = getRandomInt(23)
    .toString()
    .padStart(2, '0');
  let mins = getRandomInt(59)
    .toString()
    .padStart(2, '0');
  return `${hrs}${mins}`;
}

// ========================================================================
// API

app.use('/api/arrivals', (req, res) => {
  let r = {

    data: [
      // REPLACE STARTS HERE //
      {
        airline: "AAA",
        flight: 5,
        city: "Team ORIX",
        gate: "---",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAB",
        flight: 1,
        city: "Sai Kung Sung Tsun Catholic School (Secondary Section)",
        gate: "NT8",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAC",
        flight: 2,
        city: "St Paul's College",
        gate: "HK1",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAD",
        flight: 1,
        city: "Cognitio College (Kowloon)",
        gate: "KL3",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAE",
        flight: 1,
        city: "CCC Tam Lee Lai Fun Memorial Secondary School",
        gate: "NT3",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAF",
        flight: 1,
        city: "True Light Middle School of Hong Kong ",
        gate: "HK2",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "AAG",
        flight: 1,
        city: "SKH Lam Woo Memorial Secondary School",
        gate: "NT1",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAH",
        flight: 1,
        city: "BISHOP HALL JUBILEE SCHOOL",
        gate: "KL3",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAI",
        flight: 1,
        city: "HKUGA College",
        gate: "HK4",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAJ",
        flight: 1,
        city: "Lok Sin Tong Yu Kan Hing Secondary School",
        gate: "KL4",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "AAK",
        flight: 1,
        city: "LST Wong Chung Ming Secondary School",
        gate: "KL4",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "AAL",
        flight: 1,
        city: "West Island School",
        gate: "INT",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAM",
        flight: 2,
        city: "WONG SHIU CHI SECONDARY SCHOOL",
        gate: "NT6",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAN",
        flight: 1,
        city: "Tai Kwong Hilary College",
        gate: "NT6",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAO",
        flight: 1,
        city: "PHC Wing Kwong College",
        gate: "KL4",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAP",
        flight: 1,
        city: "Ying Wa College",
        gate: "KL2",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAQ",
        flight: 1,
        city: "Concordia Lutheran School",
        gate: "KL2",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "AAR",
        flight: 1,
        city: "HK Teachers' Association Lee Heng Kwei Secondary School",
        gate: "NT6",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAS",
        flight: 1,
        city: "TWGHs Kap Yan Directors' College",
        gate: "NT5",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAT",
        flight: 1,
        city: "United Christian College (Kowloon East)",
        gate: "KL5",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAU",
        flight: 1,
        city: "Queen's College Old Boys' Association Secoondary School",
        gate: "HK1",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAV",
        flight: 1,
        city: "CCC Kei Yuen College",
        gate: "NT4",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAW",
        flight: 1,
        city: "Man Kwan Pak Kau College",
        gate: "NT4",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAX",
        flight: 1,
        city: "St Stephen's College",
        gate: "HK4",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "AAY",
        flight: 2,
        city: "HKWMA Chu Shek Lun Secondary School",
        gate: "KL1",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "AAZ",
        flight: 1,
        city: "Korean International School",
        gate: "INT",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "ABA",
        flight: 1,
        city: "Tsuen Wan Public Ho Chuen Yiu Memorial College",
        gate: "NT2",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "ABB",
        flight: 1,
        city: "Chinese YMCA Secondary School",
        gate: "NT4",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "ABC",
        flight: 1,
        city: "NT Heung Yee Kuk Yuen Long District Secondary School",
        gate: "NT4",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "ABD",
        flight: 1,
        city: "SKH TANG SHIU KIN SECONDARY SCHOOL",
        gate: "HK1",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "ABE",
        flight: 3,
        city: "TWGHs Lee Ching Dea Memorial College",
        gate: "HK2",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "ABF",
        flight: 1,
        city: "Creative Secondary School",
        gate: "INT",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "ABG",
        flight: 1,
        city: "Fanling Kau Yan College",
        gate: "NT5",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "ABH",
        flight: 1,
        city: "TWGHs Wong Fut Nam College",
        gate: "KL3",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "ABI",
        flight: 2,
        city: "United Christian College",
        gate: "KL2",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "ABJ",
        flight: 1,
        city: "HKCWC FUNG YIU KING MEMORIAL SECONDARY SCHOOL",
        gate: "NT7",
        status: "B",
        remarks: "GATE OPEN"
},
{
        airline: "ABK",
        flight: 1,
        city: "Lee Kau Yan Memorial School",
        gate: "KL4",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "ABL",
        flight: 3,
        city: "G T (Ellen Yeung) College (Secondary Section)",
        gate: "NT8",
        status: "A",
        remarks: "BOARDING"
},
{
        airline: "ABM",
        flight: 1,
        city: "YMCA of Hong Kong Christian College",
        gate: "NT9",
        status: "A",
        remarks: "BOARDING"
}
      // REPLACE ENDS HERE //
    ]
  };

  // for (let i = 0; i < 18; i++) {
  //   // Create the data for a row.
  //   let data = {
  //     airline: getAirline(),
  //     flight: getFlight(),
  //     city: getCity(),
  //     gate: getGate(),
  //     scheduled: getTime()
  //   };

  //   // Let's add an occasional delayed flight.
  //   data.status = getRandomInt(10) > 7 ? 'B' : 'A';
  //   if (data.status === 'B') {
  //     data.remarks = `Delayed ${getRandomInt(50)}M`;
  //   }

  //   // Add the row the the response.
  //   r.data.push(data);
  // }

  res.json(r);
});

// ========================================================================
// STATIC FILES
app.use('/', express.static('public'));

// ========================================================================
// WEB SERVER
const port = process.env.PORT || 3000;
app.listen(port);
console.log('split flap started on port ' + port);
