import React, { useMemo, useState } from "react";

export default function FilterBar({ data, onFilter }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all"); 

  // derive categories from data
  const categories = useMemo(() => {
    const set = new Set(data?.map((d) => d.category).filter(Boolean));
    return ["all", ...Array.from(set)];
  }, [data]);

  function applyFilters(s = search, c = category, p = priceRange) {
    let out = data || [];

    if (c !== "all") {
      out = out.filter((x) => x.category === c);
    }

    if (s.trim() !== "") {
      const q = s.trim().toLowerCase();
      out = out.filter((x) => (x.name || "").toLowerCase().includes(q));
    }

    if (p !== "all") {
      out = out.filter((x) => {
        const price = Number(x.price) || 0;
        if (p === "0-20") return price <= 20;
        if (p === "20-50") return price > 20 && price <= 50;
        if (p === "50+") return price > 50;
        return true;
      });
    }

    onFilter(out);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-white p-4 rounded shadow">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          applyFilters(e.target.value, category, priceRange);
        }}
        placeholder="Search by name..."
        className="flex-1 border px-3 py-2 rounded"
      />

      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          applyFilters(search, e.target.value, priceRange);
        }}
        className="border px-3 py-2 rounded"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={priceRange}
        onChange={(e) => {
          setPriceRange(e.target.value);
          applyFilters(search, category, e.target.value);
        }}
        className="border px-3 py-2 rounded"
      >
        <option value="all">All prices</option>
        <option value="0-20">Up to $20</option>
        <option value="20-50">$20 - $50</option>
        <option value="50+">More than $50</option>
      </select>
    </div>
  );
}
