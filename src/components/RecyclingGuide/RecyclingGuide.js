import React, { useState, useEffect } from 'react';
import { Search, Info, Trash2 } from 'lucide-react';

const recyclingItems = [
  { name: "Paper", description: "Recycle paper by placing it in the blue bin. Ensure it's clean and dry." },
  { name: "Plastic", description: "Only recycle plastics labeled 1 and 2. Rinse containers before recycling." },
  { name: "Glass", description: "Recycle glass bottles and jars. Rinse them and remove lids before recycling." },
  { name: "Electronics", description: "Proper recycling ensures hazardous materials are disposed of safely." },
  { name: "Batteries", description: "Contain valuable metals and pose environmental risks if not disposed correctly." },
  { name: "Light Bulbs", description: "Fluorescent bulbs contain mercury and require special handling." },
  { name: "Pharmaceuticals", description: "Should not be flushed; proper disposal methods may vary by location." },
  { name: "Textiles", description: "Can be recycled into new clothing, insulation, or other products." },
  { name: "Food Waste", description: "Can be composted to create nutrient-rich soil and reduce landfill waste." },
  { name: "Construction Materials", description: "Materials like wood, concrete, and metal can be recycled or reused." },
];

const mockNews = [
  { id: 1, title: "New Recycling Plant Opens in City Center", summary: "State-of-the-art facility aims to increase recycling rates by 30%." },
  { id: 2, title: "Study Shows Increase in Plastic Recycling", summary: "Recent efforts have led to a 15% increase in plastic recycling nationwide." },
  { id: 3, title: "Local Schools Launch Recycling Program", summary: "Initiative teaches students about the importance of waste reduction." },
  { id: 4, title: "Government Introduces New Recycling Incentives", summary: "Tax breaks offered to businesses that meet recycling targets." },
  { id: 5, title: "Innovative Recycling Technology Developed", summary: "New process could revolutionize how we recycle complex materials." },
];

const RecyclingGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [news, setNews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  useEffect(() => {
    setNews(mockNews);
  }, []);

  const filteredItems = recyclingItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">♻️ EcoGuide</h1>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search materials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <main className="flex-grow space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">General Recycling</h2>
            <p className="mb-4">
              Recycling is a crucial practice for environmental sustainability. It involves processing waste materials into new materials and products, reducing the need for raw materials from the Earth. By recycling, we conserve natural resources, reduce pollution, and minimize the amount of waste sent to landfills.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Specialized Recycling Requirements and Benefits</h2>
            <p className="mb-4">
              While general recycling guidelines often apply to common items like paper, plastic, glass, and metal, specific materials may have specialized recycling requirements. Explore the items below to learn more about their unique considerations and benefits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Recyclable Materials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setSelectedItem(item)}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <aside className="md:w-1/3 space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Latest Recycling News</h2>
          {news.map((article) => (
            <div key={article.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.summary}</p>
            </div>
          ))}
        </aside>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-center space-x-4">
          <button
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => openModal("About EcoGuide", "EcoGuide is your comprehensive resource for recycling information. Our mission is to promote environmental sustainability through education and easy access to recycling guidelines.")}
          >
            <Info className="h-5 w-5" />
          </button>
          <button
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => openModal("Waste Disposal Guidelines", "Proper waste disposal is crucial for environmental protection. Always separate recyclables from general waste, and dispose of hazardous materials at designated collection points.")}
          >
            <Trash2 className="h-5 w-5" />
          </button>
          <button
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setSearchTerm('')}
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </footer>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">{selectedItem.name}</h2>
            <p className="mb-4">{selectedItem.description}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setSelectedItem(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">{modalContent.title}</h2>
            <p className="mb-4">{modalContent.content}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecyclingGuide;