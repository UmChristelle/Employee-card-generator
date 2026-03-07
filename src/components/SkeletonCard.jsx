const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse border border-gray-100">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-full bg-gray-200" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/2" />
      </div>
    </div>
    {[...Array(4)].map((_, i) => (
      <div key={i} className="h-3 bg-gray-100 rounded mb-2 w-full" />
    ))}
    <div className="flex gap-2 mt-4">
      <div className="h-8 bg-gray-200 rounded-lg flex-1" />
      <div className="h-8 bg-gray-200 rounded-lg flex-1" />
    </div>
  </div>
);

export default SkeletonCard;