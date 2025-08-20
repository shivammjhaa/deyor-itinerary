import React, { useState, useEffect } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    "/images/spiti.jpg",
    "/images/ladakh.jpg",
    "/images/bali.jpg",
    "/images/vietnam.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: `url(${heroImages[heroIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="text-5xl font-bold z-10">Find Your Next Adventure</h1>
        <p className="mt-3 text-lg z-10">Curated journeys, memories for life</p>
        <div className="z-10 mt-6 bg-white p-4 rounded-xl shadow-lg flex gap-3">
          <input
            placeholder="Destination"
            className="px-3 py-2 border rounded w-40"
          />
          <select className="px-3 py-2 border rounded w-32">
            <option>Duration</option>
            <option>3-5 days</option>
            <option>1 week</option>
          </select>
          <select className="px-3 py-2 border rounded w-32">
            <option>Budget</option>
            <option>₹20k - ₹40k</option>
            <option>₹40k+</option>
          </select>
          <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Find Trips
          </button>
        </div>
      </section>

      {/* Trip Cards */}
      <section className="max-w-6xl mx-auto py-12 grid md:grid-cols-3 gap-6">
        {[
          { title: "Spiti Adventure", price: "₹28,000", img: "/images/spiti.jpg" },
          { title: "Ladakh Roadtrip", price: "₹35,000", img: "/images/ladakh.jpg" },
          { title: "Bali Getaway", price: "₹42,000", img: "/images/bali.jpg" },
        ].map((trip, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
          >
            <img src={trip.img} alt={trip.title} className="h-52 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{trip.title}</h3>
              <p className="text-red-600 font-bold mt-1">{trip.price}</p>
              <div className="flex justify-between mt-3 text-sm text-gray-500">
                <span>⭐ 4.8 (120)</span>
                <span>Only 3 left</span>
              </div>
              <button
                onClick={() =>
                  document.getElementById("itinerary").scrollIntoView({ behavior: "smooth" })
                }
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Explore Adventure
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Itinerary Section */}
      <section
        id="itinerary"
        className="max-w-4xl mx-auto py-12 px-4 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Trip Itinerary</h2>
        <div className="flex justify-center gap-6 border-b mb-6">
          {["overview", "plan", "inclusions", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab ? "border-b-4 border-blue-600 font-semibold" : "text-gray-500"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {activeTab === "overview" && <p>Overview of the journey with key highlights.</p>}
        {activeTab === "plan" && (
          <ul className="list-disc pl-5">
            <li>Day 1: Arrival</li>
            <li>Day 2: Sightseeing</li>
            <li>Day 3: Adventure trek</li>
          </ul>
        )}
        {activeTab === "inclusions" && <p>Includes stay, meals, transport.</p>}
        {activeTab === "reviews" && <p>⭐ "Amazing trip!" - Traveler A</p>}
      </section>

      {/* Floating PDF Button */}
      <button
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-700"
      >
        📥 Download PDF
      </button>
    </div>
  );
}