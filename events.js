/* The schedule lives in one place so every event page stays up to date. */
const weddingEvents = [
  {
    id: "outbound-train",
    day: "27 Dec",
    date: "Sunday, 27 December 2026",
    time: "7:10 AM",
    title: "The journey begins",
    venue: "Secunderabad Jn Railway Station",
    category: "journey",
    summary: "We set off together for Bhopal",
    details: [],
    passengers: [
      { name: "Sudhakar Kosigi Shroff", transport: "Train 22691", departureDate: "26 Dec 2026", departureTime: "20:00", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "A5", seat: "43", berth: "L" },
      { name: "Chandrika Sudhakar", transport: "Train 22691", departureDate: "26 Dec 2026", departureTime: "20:00", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "A5", seat: "45", berth: "L" },
      { name: "Arati Shroff", transport: "Train 22691", departureDate: "26 Dec 2026", departureTime: "20:00", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "A5", seat: "44", berth: "U" },
      { name: "Pradyumna Deshmukh", transport: "Train 22691", departureDate: "26 Dec 2026", departureTime: "20:00", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "A5", seat: "46", berth: "U" },
      { name: "Vijayalaxmi K S", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "44", berth: "L" },
      { name: "Balaji Rao K", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "41", berth: "L" },
      { name: "Venugopal Kosigi Shroff", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "36", berth: "L" },
      { name: "Nalini Kosigi Shroff", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "33", berth: "L" },
      { name: "Raghunath Kosigi Shroff", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "34", berth: "M" },
      { name: "Rohit Kosigi Shroff", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "40", berth: "SU" },
      { name: "Ritika Kosigi Shroff", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "37", berth: "M" },
      { name: "Abhiram K S", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "43", berth: "U" },
      { name: "Neeraja K S", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "46", berth: "U" },
      { name: "Sasikala Srivatsa", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "42", berth: "M" },
      { name: "Srivatsa Harohali", transport: "Train 22691", departureDate: "27 Dec 2026", departureTime: "07:10", arrivalDate: "27 Dec 2026", arrivalTime: "20:55", coach: "B8", seat: "45", berth: "M" },
      { name: "Shreyas Kosigi Shroff", transport: "Train 20424", departureDate: "27 Dec 2026", departureTime: "11:20", arrivalDate: "27 Dec 2026", arrivalTime: "21:50", coach: "A1", seat: "16", berth: "U" },
      { name: "Swetha Shreyas", transport: "Train 20424", departureDate: "27 Dec 2026", departureTime: "11:20", arrivalDate: "27 Dec 2026", arrivalTime: "21:50", coach: "A1", seat: "15", berth: "L" },
      { name: "Viaansh", transport: "Train 20424", departureDate: "27 Dec 2026", departureTime: "11:20", arrivalDate: "27 Dec 2026", arrivalTime: "21:50", coach: "A1", seat: "14", berth: "U" },
      { name: "Vidhwath", transport: "Train 20424", departureDate: "27 Dec 2026", departureTime: "11:20", arrivalDate: "27 Dec 2026", arrivalTime: "21:50", coach: "A1" },
      { name: "Ammamma", transport: "IndiGo 6E-6062", departureDate: "27 Dec 2026", departureTime: "15:25", arrivalDate: "27 Dec 2026", arrivalTime: "16:45", seat: "16E" },
      { name: "Jayasree Neela", transport: "IndiGo 6E-6062", departureDate: "27 Dec 2026", departureTime: "15:25", arrivalDate: "27 Dec 2026", arrivalTime: "16:45", seat: "16D" },
      { name: "Sudhindranath Neela", transport: "IndiGo 6E-6062", departureDate: "27 Dec 2026", departureTime: "15:25", arrivalDate: "27 Dec 2026", arrivalTime: "16:45", seat: "16F" },
      { name: "Jayasree - MIL", transport: "IndiGo 6E-6062", departureDate: "27 Dec 2026", departureTime: "15:25", arrivalDate: "27 Dec 2026", arrivalTime: "16:45", seat: "16C" },
      { name: "Anand kakka", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Saroja kakki", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Giridhar", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Dr Monitha", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Dr Kapil", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Dr. Ankita", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Lakshmi", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Ananth", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Keerthi", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Madhu", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Sudhakar", transport: "IndiGo 6E-6062", departureDate: "28 Dec 2026", departureTime: "15:25", arrivalDate: "28 Dec 2026", arrivalTime: "16:45" },
      { name: "Venkata Subba Rao", transport: "Train 12707", departureDate: "28 Dec 2026", departureTime: "16:30", arrivalDate: "29 Dec 2026", arrivalTime: "08:15", coach: "B2", seat: "63", berth: "SL" },
      { name: "Venkateshachar", transport: "Train 12707", departureDate: "28 Dec 2026", departureTime: "16:30", arrivalDate: "29 Dec 2026", arrivalTime: "08:15", coach: "B2", seat: "64", berth: "SU" },
      { name: "Dr. Sailaja Desai", transport: "IndiGo 6E-5172", departureDate: "29 Dec 2026", departureTime: "07:10", arrivalDate: "29 Dec 2026", arrivalTime: "08:40" }
    ],
    map: "https://maps.app.goo.gl/dSaFnCo6ekKPRaWr9",
    mapLabel: "Open Secunderabad Jn map"
  },
  {
    id: "bhopal-arrival",
    day: "27 Dec",
    date: "Sunday, 27 December 2026",
    time: "8:55 PM",
    title: "Welcome to Bhopal",
    venue: "Bhopal Jn Railway Station",
    category: "journey",
    summary: "Train 22691 reaches Bhopal Jn at 8:55 PM, followed by Train 20424 at 9:50 PM. Rooms will be ready for check-in from 9:00 PM",
    details: [],
    map: "https://maps.app.goo.gl/MjPHqGioGqBx4mKu5",
    mapLabel: "Open Bhopal Jn map"
  },
  {
    id: "check-in",
    day: "27 Dec",
    date: "Sunday, 27 December 2026",
    time: "9:00 PM onwards",
    title: "Rooms check-in",
    venue: "Fortune Resort & Gardens, Bhopal",
    category: "welcome",
    summary: "Settle in, freshen up, and get ready for three wonderful days together",
    details: [
      "<strong>Resort Name:</strong> Fortune Resort & Gardens",
      "<strong>Address:</strong> Bairagarh Kalan, Bairagarh, Bhopal – 462030, Madhya Pradesh",
      "<strong>Room allocation:</strong> Rooms 201–220 on the 2nd floor and 301–320 on the 3rd floor. Guest-wise allocation and provisional check-in/check-out timings are listed below."
    ],
    roomAllocations: [
      {
            "floor": "2nd Floor",
            "roomNo": 201,
            "guest": "Pavan & family",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 202,
            "guest": "Parlour & Anchor",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 203,
            "guest": "Sricharan & family",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 204,
            "guest": "Kapil & family",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 205,
            "guest": "Yasaswi & Monitha",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 206,
            "guest": "Sailu & Sudhakar",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 207,
            "guest": "Neeraja & Abhiram",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 208,
            "guest": "Raja & family",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 209,
            "guest": "",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 210,
            "guest": "Shreya & Mother",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 211,
            "guest": "Shreya's mausi & Krishna",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 212,
            "guest": "Krishna's male friends",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 213,
            "guest": "Krishna's female friends",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 214,
            "guest": "Nandini, Nandini, Rasagna",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 215,
            "guest": "Sarath, Yougesh, Sai",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 216,
            "guest": "Sanjay Kushwaha, Amit Hedge",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 217,
            "guest": "Nakul, Harsh, Ritik",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 218,
            "guest": "Vaidehi, Shanmukha, Ridhima",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 219,
            "guest": "",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "2nd Floor",
            "roomNo": 220,
            "guest": "Nishanth, Krishnarjun, Pavan P, Praveen",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 301,
            "guest": "Sudhindranath Neela",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 302,
            "guest": "Ananth & Madhu Kosigi",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 303,
            "guest": "Achars - Venkata Subba Rao & Venkateshachar",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 304,
            "guest": "Srivatsa & Sasikala",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 305,
            "guest": "Arati & Sreehari",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 306,
            "guest": "Sudhakar & Chandrika",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 307,
            "guest": "Vijayakka & Balaji Rao",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 308,
            "guest": "Ammamma & caretaker",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 309,
            "guest": "Rohit",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 310,
            "guest": "Raghunath & Ritika",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 311,
            "guest": "Venugopal & Nalini",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 312,
            "guest": "Photographers crew",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 313,
            "guest": "Anand Kakka & Saroj Kakki",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 314,
            "guest": "Renuka & Venkat",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 315,
            "guest": "Shreyas & Swetha",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 316,
            "guest": "Jayasree & MIL",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 317,
            "guest": "Sudhir & Jayasri",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 318,
            "guest": "Madhu & Sudhakar",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 319,
            "guest": "Lakshmi, Ananth & Keerthi",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      },
      {
            "floor": "3rd Floor",
            "roomNo": 320,
            "guest": "Sunder Koppale & Madhu",
            "checkInDate": "27 Dec 2026",
            "checkInTime": "21:00",
            "checkOutDate": "30 Dec 2026",
            "checkOutTime": "16:00"
      }
],
    map: "https://maps.app.goo.gl/9rPVQdmpCpWCATGD6",
    mapLabel: "Open Fortune Resort & Gardens map"
  },
  {
    id: "breakfast-28",
    day: "28 Dec",
    date: "Monday, 28 December 2026",
    time: "8:30 AM",
    title: "Breakfast",
    venue: "Banquet hall dining area",
    category: "dining",
    summary: "A relaxed breakfast before the festivities begin",
    details: [
      "<strong>Dress code:</strong> Casual Dress",
      "<strong>Please arrive on time so the day can begin together</strong>"
    ],
  },
  {
    id: "haldi-carnival",
    day: "28 Dec",
    date: "Monday, 28 December 2026",
    time: "10:00 AM",
    title: "Haldi Carnival",
    venue: "Pool side",
    category: "haldi",
    summary: "Sunshine, laughter, and a joyful splash of haldi by the pool",
    details: [
      "<strong>Event theme:</strong> Light blue, Pastel pink, Lemon yellow, Lavender",
      "<strong>Dress code:</strong> PASTEL PINK - Soft, elegant, and dreamy! Let's paint the Haldi celebrations in beautiful shades of pastel pink! 🩷",
      "<strong>Event/ Program details:</strong> To be announced"
    ],
  },
  {
    id: "lunch-28",
    day: "28 Dec",
    date: "Monday, 28 December 2026",
    time: "1:00 PM",
    title: "Lunch",
    venue: "Banquet hall dining area",
    category: "dining",
    summary: "A delicious break between the day's celebrations",
    details: [
      "<strong>Dress code:</strong> Casual Dress",
      "<strong>Please arrive on time</strong>"
    ],
  },
  {
    id: "mehendi",
    day: "28 Dec",
    date: "Monday, 28 December 2026",
    time: "3:00 PM",
    title: "Mehendi Ceremony",
    venue: "Banquet hall",
    category: "mehendi",
    summary: "An afternoon of intricate henna, music, and warm conversations",
    details: [
      "<strong>Event theme:</strong> Multicolour",
      "<strong>Dress code:</strong> OLIVE GREEN - Let's bring some earthy elegance and festive vibes with gorgeous olive green outfits! 💚",
      "<strong>Event/ Program details:</strong> To be announced"
    ],
  },
  {
    id: "sangeet",
    day: "28 Dec",
    date: "Monday, 28 December 2026",
    time: "7:00 PM",
    title: "Sangeet followed by Dinner",
    venue: "Banquet hall",
    category: "sangeet",
    summary: "An evening of music, dance, celebration, and dinner under glittering lights",
    details: [
      "<strong>Dinner will be served during the Sangeet function</strong>",
      "<strong>Event theme:</strong> Dark coloured",
      "<strong>Dress code:</strong> DARK COLOURS & SHIMMER - Time to shine on the dance floor! 💃🪩 Think rich, dark colours, glitter, sequins, shimmer, and all things glamorous! 🌟",
      "<strong>Event/ Performance details:</strong> To be announced"
    ],
  },
  {
    id: "breakfast-29",
    day: "29 Dec",
    date: "Tuesday, 29 December 2026",
    time: "8:30 AM",
    title: "Breakfast",
    venue: "Banquet hall dining area",
    category: "dining",
    summary: "Begin the second day of celebrations over breakfast",
    details: [
      "<strong>Dress code:</strong> Casual dress",
      "<strong>Please arrive on time</strong>"
    ],
  },
  {
    id: "varapooja",
    day: "29 Dec",
    date: "Tuesday, 29 December 2026",
    time: "10:30 AM",
    title: "Edurukolu/ Varapooja / Phal Daan",
    venue: "Banquet hall",
    category: "pooja",
    summary: "A meaningful ceremony bringing both families together",
    details: [
      "<strong>Event theme:</strong> Regular theme",
      "<strong>Dress code:</strong> OFFICE DRESS",
      "<strong>Event/ Program details:</strong> To be announced"
    ],
  },
  {
    id: "lunch-29",
    day: "29 Dec",
    date: "Tuesday, 29 December 2026",
    time: "1:00 PM",
    title: "Lunch",
    venue: "Banquet hall dining area",
    category: "dining",
    summary: "Let's enjoy a delicious afternoon before the evening celebrations begin",
    details: [
      "<strong>Dress code:</strong> Casual dress",
      "<strong>Please arrive on time</strong>"
    ],
  },
  {
    id: "baraat",
    day: "29 Dec",
    date: "Tuesday, 29 December 2026",
    time: "5:00 PM",
    title: "Baraat Procession",
    venue: "Main entrance of the resort",
    category: "baraat",
    summary: "The celebration unfolds in a vibrant symphony of music, colour, laughter, and unforgettable moments",
    details: [
      "<strong>Event theme:</strong> Bright coloured",
      "<strong>Dress code:</strong> NORTH INDIAN TRADITIONAL - Let's bring out the royal desi vibes with stunning lehengas, sherwanis, sarees, anarkalis, and other traditional North Indian outfits! ❤️",
      "<strong>Event/ Program details:</strong> To be announced"
    ],
  },
  {
    id: "reception",
    day: "29 Dec",
    date: "Tuesday, 29 December 2026",
    time: "7:00 PM",
    title: "Reception followed by Dinner",
    venue: "Open sky lawn",
    category: "reception",
    summary: "An open-air evening celebrating the togetherness of Rohit and Shreya, followed by a delightful dinner",
    details: [
      "<strong>Dinner will be served during the reception function</strong>",
      "<strong>Event theme:</strong> Bright coloured",
      "<strong>Dress code:</strong> NORTH INDIAN TRADITIONAL - Let's bring out the royal desi vibes with stunning lehengas, sherwanis, sarees, anarkalis, and other traditional North Indian outfits! ❤️",
      "<strong>Event/ Program details:</strong> To be announced"
    ],
  },
  {
    id: "kashi-yatra",
    day: "30 Dec",
    date: "Wednesday, 30 December 2026",
    time: "6:00 AM",
    title: "Kashi Yatra & Gauri Pooja",
    venue: "Marriage banquet hall",
    category: "pooja",
    summary: "The wedding day begins with cherished rituals and blessings",
    details: [
      "<strong>Event theme:</strong> Traditional theme",
      "<strong>Dress code:</strong> Traditional South Indian",
      "<strong>Event/ Program details:</strong> To be announced",
      "<strong>Please arrive a few minutes early for the rituals</strong>"
    ],
  },
  {
    id: "muhurtam",
    day: "30 Dec",
    date: "Wednesday, 30 December 2026",
    time: "7:55 AM",
    title: "Sumuhurtam",
    venue: "Marriage banquet hall",
    category: "muhurtam",
    summary: "The auspicious moment when Rohit and Shreya begin their new chapter together",
    details: [
      "<strong>Muhurtam:</strong> 7:55 AM IST",
      "<strong>Dress code:</strong> SOUTH INDIAN TRADITIONAL - Let's embrace the beauty of South Indian traditions with elegant silk sarees, traditional dhotis, veshtis, and other classic South Indian attire! 🧡",
      "<strong>Event/ Program details:</strong> To be announced",
      "<strong>Please be seated before the ceremony begins</strong>"
    ],
  },
  {
    id: "breakfast-30",
    day: "30 Dec",
    date: "Wednesday, 30 December 2026",
    time: "8:30 AM",
    title: "Breakfast",
    venue: "Banquet hall dining area",
    category: "dining",
    summary: "Take a moment to relax and enjoy a delightful breakfast before the celebrations continue",
    details: [
      "<strong>Dress code:</strong> continuing from the previous event",
      "<strong>Please arrive on time</strong>"
    ],
  },
  {
    id: "homam",
    day: "30 Dec",
    date: "Wednesday, 30 December 2026",
    time: "9:00 AM",
    title: "Homam & Lakshmi Pooja",
    venue: "Banquet hall",
    category: "pooja",
    summary: "A beautiful morning where sacred traditions, heartfelt blessings, and the promise of forever come together",
    details: [
      "<strong>Event theme:</strong> Traditional theme",
      "<strong>Dress code:</strong> South Indian Traditional",
      "<strong>Event/ Program details:</strong> To be announced"
    ],
  },
  {
    id: "lunch-30",
    day: "30 Dec",
    date: "Wednesday, 30 December 2026",
    time: "1:00 PM",
    title: "Lunch",
    venue: "Banquet hall dining area",
    category: "dining",
    summary: "A delightful farewell meal before check-out and the journey home",
    details: [
      "<strong>Dress code:</strong> Casual dress",
      "<strong>Please arrive on time</strong>"
    ],
  },
  {
    id: "checkout",
    day: "30 Dec",
    date: "Wednesday, 30 December 2026",
    time: "4:00 PM",
    title: "Rooms check-out",
    venue: "Heading back home",
    category: "welcome",
    summary: "Please complete room check-out before the return journey",
    details: [
      "<strong>Check-out time:</strong> 4:00 PM",
      "<strong>Luggage coordination:</strong> To be announced"
    ],
  },
  {
    id: "return-train",
    day: "30 Dec",
    date: "Wednesday, 30 December 2026",
    time: "9:00 PM",
    title: "Journey home",
    venue: "Bhopal Jn Railway Station",
    category: "journey",
    summary: "We board Train 12589 for the journey back to Charlapalli/ Cherlapally",
    details: [],
    passengers: [
      // Existing eight passengers on Train 12589
      { name: "Sudhakar K S", transport: "Train 12589", departureDate: "30 Dec 2026", departureTime: "21:00", arrivalDate: "31 Dec 2026", arrivalTime: "13:30", coach: "A1", seat: "1", berth: "L" },
      { name: "Chandrika Sudhakar", transport: "Train 12589", departureDate: "30 Dec 2026", departureTime: "21:00", arrivalDate: "31 Dec 2026", arrivalTime: "13:30", coach: "A1", seat: "3", berth: "L" },
      { name: "Vijayalaxmi K S", transport: "Train 12589", departureDate: "30 Dec 2026", departureTime: "21:00", arrivalDate: "31 Dec 2026", arrivalTime: "13:30", coach: "A2", seat: "21", berth: "L" },
      { name: "Balaji Rao K", transport: "Train 12589", departureDate: "30 Dec 2026", departureTime: "21:00", arrivalDate: "31 Dec 2026", arrivalTime: "13:30", coach: "A2", seat: "24", berth: "SU" },
      { name: "Venugopal Kosigi Shroff", transport: "Train 12589", departureDate: "30 Dec 2026", departureTime: "21:00", arrivalDate: "31 Dec 2026", arrivalTime: "13:30", coach: "A2", seat: "27", berth: "L" },
      { name: "Nalini Kosigi Shroff", transport: "Train 12589", departureDate: "30 Dec 2026", departureTime: "21:00", arrivalDate: "31 Dec 2026", arrivalTime: "13:30", coach: "A2", seat: "29", berth: "SL" },
      { name: "Raghunath Kosigi Shroff", transport: "Train 12589", departureDate: "30 Dec 2026", departureTime: "21:00", arrivalDate: "31 Dec 2026", arrivalTime: "13:30", coach: "A2", seat: "22", berth: "U" },
      { name: "Ritika Kosigi Shroff", transport: "Train 12589", departureDate: "30 Dec 2026", departureTime: "21:00", arrivalDate: "31 Dec 2026", arrivalTime: "13:30", coach: "A2", seat: "28", berth: "U" },

      // Train 12648
      { name: "Sasikala Srivatsa", transport: "Train 12648", departureDate: "30 Dec 2026", departureTime: "17:05", arrivalDate: "31 Dec 2026", arrivalTime: "08:20", coach: "A1", seat: "51", berth: "SL" },
      { name: "Srivatsa Harohali", transport: "Train 12648", departureDate: "30 Dec 2026", departureTime: "17:05", arrivalDate: "31 Dec 2026", arrivalTime: "08:20", coach: "A1", seat: "47", berth: "SL" },
      { name: "Abhiram K S", transport: "Train 12648", departureDate: "30 Dec 2026", departureTime: "17:05", arrivalDate: "31 Dec 2026", arrivalTime: "08:20", coach: "A1", seat: "48", berth: "SU" },
      { name: "Neeraja K S", transport: "Train 12648", departureDate: "30 Dec 2026", departureTime: "17:05", arrivalDate: "31 Dec 2026", arrivalTime: "08:20", coach: "A1", seat: "42", berth: "SU" },
      { name: "Venkata Subba Rao", transport: "Train 12648", departureDate: "30 Dec 2026", departureTime: "17:05", arrivalDate: "31 Dec 2026", arrivalTime: "08:20", coach: "A1", seat: "44", berth: "UB" },
      { name: "Venkateshachar", transport: "Train 12648", departureDate: "30 Dec 2026", departureTime: "17:05", arrivalDate: "31 Dec 2026", arrivalTime: "08:20", coach: "A1", seat: "52", berth: "SU" },

      // IndiGo 6E-6063
      { name: "Ammamma", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50", seat: "3D" },
      { name: "Jayasree - MIL", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50", seat: "3C" },
      { name: "Sudhindranath Neela", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50", seat: "3E" },
      { name: "Jayasree Neela", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50", seat: "3F" },
      { name: "Anand kakka", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Saroja kakki", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Giridhar", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Dr Monitha", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Dr Kapil", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Dr. Ankita", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Lakshmi", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Ananth", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Keerthi", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Madhu", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Sudhakar", transport: "IndiGo 6E-6063", departureDate: "30 Dec 2026", departureTime: "17:25", arrivalDate: "30 Dec 2026", arrivalTime: "18:50" },
      { name: "Dr. Sailaja Desai", transport: "IndiGo", departureDate: "30 Dec 2026", departureTime: "", arrivalDate: "30 Dec 2026", arrivalTime: "" },

      // IndiGo 6E-6466
      { name: "Arati Shroff", transport: "IndiGo 6E-6466", departureDate: "30 Dec 2026", departureTime: "20:50", arrivalDate: "30 Dec 2026", arrivalTime: "22:45" },
      { name: "Pradyumna Deshmukh", transport: "IndiGo 6E-6466", departureDate: "30 Dec 2026", departureTime: "20:50", arrivalDate: "30 Dec 2026", arrivalTime: "22:45" },

      // Train 12615
      { name: "Shreyas Kosigi Shroff", transport: "Train 12615", departureDate: "30 Dec 2026", departureTime: "18:45", arrivalDate: "31 Dec 2026", arrivalTime: "04:40", coach: "A2", seat: "4", berth: "UB" },
      { name: "Swetha Shreyas", transport: "Train 12615", departureDate: "30 Dec 2026", departureTime: "18:45", arrivalDate: "31 Dec 2026", arrivalTime: "04:40", coach: "A2", seat: "3", berth: "LB" },
      { name: "Viaansh", transport: "Train 12615", departureDate: "30 Dec 2026", departureTime: "18:45", arrivalDate: "31 Dec 2026", arrivalTime: "04:40", coach: "A2", seat: "2", berth: "UB" },
      { name: "Vidhwath", transport: "Train 12615", departureDate: "30 Dec 2026", departureTime: "18:45", arrivalDate: "31 Dec 2026", arrivalTime: "04:40", coach: "A2", seat: "", berth: "" }
    ],
    map: "https://maps.app.goo.gl/MjPHqGioGqBx4mKu5",
    mapLabel: "Open Bhopal Jn map"
  },
  {
    id: "Charlapalli/ Cherlapally - arrival",
    day: "31 Dec",
    date: "Thursday, 31 December 2026",
    time: "1:30 PM",
    title: "Until we meet again",
    venue: "Charlapalli/ Cherlapally Railway Station",
    category: "journey",
    summary: "Train 12589 arrives at Charlapalli/ Cherlapally, marking the perfect conclusion to our wedding celebrations",
    details: [
      "<strong>Arrival station:</strong> Charlapalli/ Cherlapally Railway Station",
      "<strong>Arrival time:</strong> 1:30 PM",
      "<strong>Thank you for being part of our celebrations</strong>"
    ],
    map: "https://maps.app.goo.gl/GBfrULoSmMxC1pWL6",
    mapLabel: "Open Charlapalli/ Cherlapally station map"
  }
];

const eventThemes = {
  journey: { label: "Train journey", symbol: "🚆" },
  welcome: { label: "A warm welcome", symbol: "⌂" },
  dining: { label: "Food & fellowship", symbol: "🍽" },
  haldi: { label: "Sunlit celebration", symbol: "☀" },
  mehendi: { label: "Henna & harmony", symbol: "❋" },
  sangeet: { label: "Music & dance", symbol: "♫" },
  pooja: { label: "Sacred ritual", symbol: "◌" },
  baraat: { label: "Joy in motion", symbol: "✹" },
  reception: { label: "An evening together", symbol: "✧" },
  muhurtam: { label: "The auspicious hour", symbol: "❈" }
};
