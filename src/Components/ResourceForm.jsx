import { useState } from "react";

const ResourceForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    url: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: "", description: "", url: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <button>Add</button>
    </form>
  );
};

export default ResourceForm;