export default function AccesoriosList({ items, loading, error }) {
  if (loading) {
    return <p className="text-center py-8">Loading accessories...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 py-8">Error: {error}</p>;
  }

  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500 py-8">No accessories found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((acc) => (
        <div
          key={acc.id}
          className="bg-white shadow rounded p-4 flex flex-col items-center"
        >
          <img
            src={acc.image}
            alt={acc.name}
            className="w-40 h-40 object-cover rounded"
          />

          <h2 className="text-lg font-bold mt-3">{acc.name}</h2>
          <p className="text-pink-600 font-semibold">${acc.price}</p>
        </div>
      ))}
    </div>
  );
}
