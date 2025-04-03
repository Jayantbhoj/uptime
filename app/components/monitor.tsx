"use client";

export default function Monitor() {
  return (
    <div className="p-2 max-w-4xl mx-auto bg-myBlack text-white rounded-lg shadow-lg border border-gray-700">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-bold text-left text-myGrey">Monitors</h1>
        <button className="w-5 h-5 cursor-pointer">
            <img src="/icons8-plus-24.png" alt="" />
        </button>
      </div>
    </div>
  );
}
