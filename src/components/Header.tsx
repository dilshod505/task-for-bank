const Header = () => {
  return (
    <header className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-red-800 to-orange-500 bg-clip-text text-transparent">
            Product Comparison Widget
          </h1>

          <p className="mt-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Compare smartphone specifications and prices
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium text-slate-700">
            Max 3 Products
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
