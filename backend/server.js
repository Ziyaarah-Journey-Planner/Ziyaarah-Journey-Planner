const express = require("express");
const cors = require("cors");
const { status } = require("server/reply");

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
   let totalTasks = 0;
  let completedTasks = 0;
  
  rituals.forEach(stage => {
    totalTasks += stage.tasks.length;
    completedTasks += stage.tasks.filter(t => t.completed).length;
  });

  // Calculate overall progress percentage
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  res.json({
    
   stats: {
      activeJourneys: trips.length,
      progress: progressPercent,
      completedTasks: completedTasks,
      totalTasks: totalTasks,
    },
    currentJourney: trips.length > 0 ? {
      title: trips[0].title,
      type: trips[0].type + " Pilgrimage",
      startDate: trips[0].startDate,
      endDate: trips[0].endDate,
      progress: progressPercent
    } : null,
    journeyStages: rituals.map(r => ({
      name: r.stage,
      status: r.tasks.every(t => t.completed) ? "Completed" : "In Progress",
      tasksCompleted: r.tasks.filter(t => t.completed).length,
      totalTasks: r.tasks.length

  }))
  });
});



let trips = [
  { id: 1, destination: "Makkah", days: 5 },
  { id: 2, destination: "Madinah", days: 3 },
  { id: 3, title: "UmrahSpring 2026", type: "Umrah", startDate: "2026-03-15", endDate: "2026-03-20", progress: 20, status: "Active", stages: ["Ihram", "Tawaf", "Sa'i", "Halq"] },
  { id: 4, title: "Hajj2026", type: "Hajj", startDate: "2026-07-01", endDate: "2026-07-10", progress: 0, status: "Planned", stages: ["Ihram", "Tawaf", "Sa'i", "Arafat", "Muzdalifah", "Ramy al-Jamarat"] },
];


app.get("/api/trips", (req, res) => {
  res.json(trips);
});

app.post("/api/trips", (req, res) => {
  const { destination, days , progress, status } = req.body;

  if (!destination || !days ) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newTrip = {
    id: Date.now(),
    destination,
    days,
   
    progress: 0,
    status: "Planned",
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

app.put("/api/rituals/:id", (req, res) => {
  const [stageId, taskId] = req.params.id.split("/");
  const stage = rituals.find(s => s.id === parseInt(stageId));
  if (stage) {
    const task = stage.tasks.find(t => t.id === parseInt(taskId));
    if (task) {
      task.completed = !task.completed;
      return res.json(task);
    } else {
      return res.status(404).json({ error: "Task not found" });
    }
  } else {
    return res.status(404).json({ error: "Stage not found" });
  }
});



app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});