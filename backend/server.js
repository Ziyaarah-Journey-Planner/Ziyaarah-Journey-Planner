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



let trips = [
  {
    id: 1,
    destination: "Makkah",
    days: 5,
    startDate: "2026-03-15",
    progress: 20,
    status: "Active",
  },
  {
    id: 2,
    destination: "Madinah",
    days: 3,
    startDate: "2026-03-20",
    progress: 0,
    status: "Planned",
  },
  {
    id: 3,
    title: "UmrahSpring 2026",
    type: "Umrah",
    startDate: "2026-03-15",
    endDate: "2026-03-20",
    progress: 20,
    status: "Active",
    stages: ["Ihram", "Tawaf", "Sa'i", "Halq"]
  },
  {
    id: 4,
    title: "Hajj2026",
    type: "Hajj",
    startDate: "2026-07-01",
    endDate: "2026-07-10",
    progress: 0,
    status: "Planned",
    stages: ["Ihram", "Tawaf", "Sa'i", "Arafat", "Muzdalifah", "Ramy al-Jamarat"]
  }
];

app.get("/api/trips", (req, res) => {
  res.json(trips);
});


app.post("/api/trips", (req, res) => {
  const { destination, days, startDate } = req.body;

  if (!destination || !days || !startDate) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newTrip = {
    id: Date.now(),
    destination,
    days: Number(days),
    startDate,
    progress: 0,
    status: "Planned",
  };

  trips.push(newTrip);
  res.json(newTrip);
});

app.delete("/api/trips/:id", (req, res) => {
  const id = parseInt(req.params.id);

  trips = trips.filter(t => t.id !== id);

  res.json({ message: "Trip deleted" });
});



let rituals = [
  { 
    id: 1, stage: "Travel & Arrival", 
    tasks: [
      { id: 101, name: "Pack Ihram clothing", type: "Mandatory", completed: true },
      { id: 102, name: "Obtain necessary documents", type: "Mandatory", completed: false },
      { id: 103, name: "Make travel dua", type: "Sunnah", completed: false },
      { id: 104, name: "Pack prayer mat and Quran", type: "Preparation", completed: true },
    ]
  },
  { 
    id: 2, stage: "Miqat", 
    tasks: [
      { id: 201, name: "Perform Ghusl", type: "Sunnah", completed: false },
      { id: 202, name: "Wear Ihram clothing", type: "Mandatory", completed: false },
    ]
  }
];

app.get("/api/rituals", (req, res) => {
  res.json(rituals);
});

app.put("/api/rituals/:stageId/:taskId", (req, res) => {
  const stageId = parseInt(req.params.stageId);
  const taskId = parseInt(req.params.taskId);

  const stage = rituals.find(s => s.id === stageId);
  if (!stage) return res.status(404).json({ error: "Stage not found" });

  const task = stage.tasks.find(t => t.id === taskId);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.completed = !task.completed;

  res.json(task);
});



app.get("/api/dashboard", (req, res) => {
  let totalTasks = 0;
  let completedTasks = 0;

  rituals.forEach(stage => {
    totalTasks += stage.tasks.length;
    completedTasks += stage.tasks.filter(t => t.completed).length;
  });

  const progressPercent = totalTasks > 0
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  res.json({
    stats: {
      activeJourneys: trips.length,
      progress: progressPercent,
      completedTasks,
      totalTasks,
    },
    currentJourney: trips[0] || null,
    journeyStages: rituals.map(r => ({
      name: r.stage,
      status: r.tasks.every(t => t.completed) ? "Completed" : "In Progress",
      tasksCompleted: r.tasks.filter(t => t.completed).length,
      totalTasks: r.tasks.length
    }))
  });
});



app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});