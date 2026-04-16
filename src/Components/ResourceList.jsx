const ResourceList = ({ resources }) => {
  if (resources.length === 0) {
    return <p className="text-gray-500">No resources yet.</p>;
  }

  return (
    <div className="space-y-4">
      {resources.map((r) => (
        <div key={r.id} className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">{r.title}</h3>
          <p className="text-sm text-gray-600">{r.description}</p>

          <a
            href={r.url}
            target="_blank"
            className="text-yellow-600 text-sm"
          >
            Visit →
          </a>

          {r.category && (
            <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded">
              {r.category}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResourceList;