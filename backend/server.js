const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 API is running");
});



const resources = [
  { id: 1, title: "Complete Guide to Umrah Rituals - HD Video Series", description: "Comprehensive 3-hour video series covering all aspect of Umrah...", category: "General", type: "Video", featured: true },
  { id: 2, title: "Authentic Duas for Tawaf - Complete Collection", description: "Beautifully formatted PDF with 50+ authentic supplications...", category: "Tawaf", type: "PDF", featured: true },
  { id: 3, title: "Hajj vs Umrah Comparison Guide", description: "Detailed article explaining differences and similarities...", category: "General", type: "Link", featured: false },
  { id: 4, title: "Sa'i Between Safa and Marwah - Visual Guide", description: "Interactive video showing the exact path...", category: "Safa", type: "Video", featured: false },
  { id: 5, title: "Ihram Rules and Restrictions Manual", description: "Comprehensive guide covering all aspects of Ihram...", category: "Miqat", type: "PDF", featured: false },
  { id: 6, title: "Day of Arafat - Scholar Commentary", description: "In-depth article explaining the spiritual significance...", category: "Arafat", type: "Link", featured: true },
];

app.get("/api/resources", (req, res) => {
  res.json(resources);
});


app.get("/api/dashboard", (req, res) => {
  res.json({
    totalResources: resources.length,
    featured: resources.filter(r => r.featured).length,
    categories: [...new Set(resources.map(r => r.category))],
  });
});



let trips = [
  { id: 1, destination: "Makkah", days: 5 },
  { id: 2, destination: "Madinah", days: 3 },
];


app.get("/api/trips", (req, res) => {
  res.json(trips);
});

app.post("/api/trips", (req, res) => {
  const { destination, days } = req.body;

  if (!destination || !days) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newTrip = {
    id: Date.now(),
    destination,
    days,
  };

  trips.push(newTrip);
  res.json(newTrip);
});


app.delete("/api/trips/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = trips.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Trip not found" });
  }

  trips.splice(index, 1);

  res.json({ message: "Trip deleted" });
});



let rituals = [
  { id: 1, name: "Ihram", completed: true },
  { id: 2, name: "Tawaf", completed: false },
];


app.get("/api/rituals", (req, res) => {
  res.json(rituals);
});

app.put("/api/rituals/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const ritual = rituals.find(r => r.id === id);

  if (!ritual) {
    return res.status(404).json({ error: "Ritual not found" });
  }

  ritual.completed = !ritual.completed;

  res.json(ritual);
});



app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});