import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import {
  Video,
  FileText,
  Link as LinkIcon,
  Star,
  Search,
} from "lucide-react";

const ResourceLibrary = () => {
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  useEffect(() => {
    setResources([
      { id: 1, title: "Complete Guide to Umrah Rituals - HD Video Series", description: "Comprehensive 3-hour video series covering all aspect of Umrah from Ihram to copletion,with English subtitles and Arabic audio...", category: "General", type: "Video", featured: true },
      { id: 2, title: "Authentic Duas for Tawaf - Complete Collection", description: "Beautifully formatted PDF with 50+ authentic supplications to recite during Tawaf, with Arabic text tranitlitration,and English translation...", category: "Tawaf", type: "PDF", featured: true },
      { id: 3, title: "Hajj vs Umrah Comparison Guide", description: "Detailed article explaining differences, similarities, and unique aspects of both pilgrimages with historical contex...", category: "General", type: "Link", featured: false },
      { id: 4, title: "Sa'i Between Safa and Marwah-Visual Guide", description: "Interactive video showing the exact path,proper etiquette, and historical significance of walking between the two hills...", category: "Safa", type: "Video", featured: false },
      { id: 5, title: "Ihram Rules and Restrictions Manual", description: "Comprehensiv 40 page guide covering all aspects of Ihram including what to wear, and how to maintain purity..", category: "Miqat", type: "PDF", featured: false },

      { id: 6, title: "Day of Arafat:the pinnacle of Hajj-Scholar Commentary", description: "In-depth article by renowned Islamic scholars explaining the spiritual significance and practical guidence for the most important day of Hajj.", category: "Arafat", type: "Link", featured: true },
      { id: 7, title: "Makkah and Madinah: Sacred Sites Tour", description: "Virtual tour of the most important Islamic sities in the holy sites with historical commentary spiritual significance...", category: "General", type: "Video", featured: false },
      { id: 8, title: "Pilgrimage Preparation Checklist", description: "Essential checklist covering documents, health requirements,packing list,and spiritual preparation for your journey...", category: "General", type: "PDF", featured: false },
      { id: 9, title: "Duas for Travel and Protection", description: "Collection of authentic Supplications for safe travel,protection during journey and trrival at sacred places...", category: "General", type: "PDF", featured: false },
      { id: 10, title: "History of Kaaba and Masjid Al-Haram", description: "Detailed historical account of the construction and expantion of Islam'sholiest mosque through thecenturies...", category: "Tawaf", type: "Link", featured: false },
      { id: 11, title: "Zamzam Water:Blassings and Benefits", description: "Educational video about the miraclous well of Zamzam, its history, and the proper etiquette for drinking...", category: "Safa", type: "Video", featured: false },
      { id: 12, title: "Hajj Rituals Day by Day Schedule", description: "Detailed timeline and schecdule for each day of Hajj with spesific timing, locations, and required actions...", category: "Arafat", type: "PDF", featured: true },
    ]);
  }, []);

  // FILTER LOGIC

  const filtered = resources.filter((r) => {
    const matchesSearch = r.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || r.category === category;

    const matchesType =
      type === "All" || r.type === type;

    return matchesSearch && matchesCategory && matchesType;
  });

  const featured = filtered.filter((r) => r.featured);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 space-y-8">

        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-semibold">Resource Library</h1>
          <p className="text-gray-500">
            Access authentic Islamic resources for your spiritual journey
          </p>
        </div>

        {/*  FILTER BAR */}

        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">

          {/* SEARCH */}

          <div className="flex items-center gap-2 flex-1 border border-gray-200 rounded-lg px-3 py-2">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full outline-none text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* CATEGORY */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600"
          >
            <option value="All">All Categories</option>
            <option value="General">General</option>
            <option value="Tawaf">Tawaf</option>
            <option value="Arafat">Arafat</option>
            <option value="Miqat">Miqat</option>
            <option value="Safa">Safa</option>
          </select>

          {/* TYPE */}

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600"
          >
            <option value="All">All Types</option>
            <option value="Video">Video</option>
            <option value="PDF">PDF</option>
            <option value="Link">Link</option>
          </select>

        </div>

        {/* FEATURED */}

        <div>
          <h2 className="font-semibold mb-4">Featured Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((r) => (
              <div key={r.id} className="bg-white p-5 rounded-2xl border shadow-sm">

                <div className="flex gap-2 text-xs mb-3 items-center">
                  {r.type === "Video" && <Badge icon={<Video size={14} />} text="Video" color="red" />}
                  {r.type === "PDF" && <Badge icon={<FileText size={14} />} text="PDF" color="blue" />}
                  {r.type === "Link" && <Badge icon={<LinkIcon size={14} />} text="Link" color="green" />}
                  <Badge icon={<Star size={14} />} text="Featured" color="yellow" />
                </div>

                <h3 className="font-semibold mb-1">{r.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{r.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {r.category}
                  </span>
                  <span className="text-blue-600 text-sm cursor-pointer">
                    View ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ALL */}
        
        <div>
          <h2 className="font-semibold mb-4">
            All Resources ({filtered.length})
          </h2>

          <div className="space-y-4">
            {filtered.map((r) => (
              <div key={r.id} className="bg-white p-5 rounded-2xl border flex justify-between items-center">

                <div>
                  <div className="flex gap-2 text-xs mb-2 items-center">
                    {r.type === "Video" && <Badge icon={<Video size={14} />} text="Video" color="red" />}
                    {r.type === "PDF" && <Badge icon={<FileText size={14} />} text="PDF" color="blue" />}
                    {r.type === "Link" && <Badge icon={<LinkIcon size={14} />} text="Link" color="green" />}
                    <span className="bg-gray-100 px-2 py-1 rounded">{r.category}</span>
                    {r.featured && <Badge icon={<Star size={14} />} text="Featured" color="yellow" />}
                  </div>

                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-sm text-gray-500">{r.description}</p>
                </div>

                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
                  Access ↗
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResourceLibrary;

function Badge({ icon, text, color }) {
  const styles = {
    red: "bg-red-100 text-red-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`flex items-center gap-1 px-2 py-1 rounded-full ${styles[color]}`}>
      {icon}
      {text}
    </span>
  );
}