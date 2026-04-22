import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

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
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/api/resources`)
      .then((res) => res.json())
      .then((data) => {
        setResources(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...new Set(resources.map((r) => r.category))];
  const types = ["All", ...new Set(resources.map((r) => r.type))];

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

  if (loading) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8 space-y-8">

      <div>
        <h1 className="text-3xl font-semibold">Resource Library</h1>
        <p className="text-gray-500">
          Access authentic Islamic resources for your spiritual journey
        </p>
      </div>

      <div className="bg-white border rounded-xl p-4 flex items-center gap-3">
        <div className="flex items-center gap-2 flex-1 border rounded-lg px-3 py-2">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <h2 className="font-semibold mb-4">Featured Resources</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((r) => (
            <div
              key={r.id}
              onClick={() => navigate(`/resources/${r.id}`)}
              className="bg-white p-5 rounded-2xl border shadow-sm cursor-pointer hover:shadow-md"
            >
              <div className="flex gap-2 text-xs mb-3 items-center">
                {r.type === "Video" && <Badge icon={<Video size={14} />} text="Video" color="red" />}
                {r.type === "PDF" && <Badge icon={<FileText size={14} />} text="PDF" color="blue" />}
                {r.type === "Link" && <Badge icon={<LinkIcon size={14} />} text="Link" color="green" />}
                <Badge icon={<Star size={14} />} text="Featured" color="yellow" />
              </div>

              <h3 className="font-semibold mb-1">{r.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{r.description}</p>

              <div className="flex justify-between">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {r.category}
                </span>
                <span className="text-blue-600 text-sm">
                  View ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-4">
          All Resources ({filtered.length})
        </h2>

        {filtered.length === 0 && (
          <p className="text-gray-500">No results found</p>
        )}

        <div className="space-y-4">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-white p-5 rounded-2xl border flex justify-between items-center"
            >
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

              <button
                onClick={() => navigate(`/resources/${r.id}`)}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm"
              >
                Access ↗
              </button>
            </div>
          ))}
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