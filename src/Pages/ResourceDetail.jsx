import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const ResourceDetail = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/resources`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(r => r.id === Number(id));
        setResource(found);
      });
  }, [id]);

  if (!resource) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-2">
        {resource.title}
      </h1>

      <p className="text-gray-500 mb-4">
        {resource.description}
      </p>

      <span className="text-sm bg-gray-100 px-2 py-1 rounded">
        {resource.category}
      </span>

      <div className="mt-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Open Resource
        </button>
      </div>
    </div>
  );
};

export default ResourceDetail;