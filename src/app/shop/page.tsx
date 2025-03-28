import React, { useState, useMemo } from 'react';
import { GetServerSideProps } from 'next';
import { google } from 'googleapis';

// Define interface for Diablo items
interface DiabloItem {
  id: string;
  name: string;
  price: string;
  salePrice?: string;
  description: string;
  characterClass: string;
  category: string;
  imageUrl?: string;
  stock: string;
}

interface ShopPageProps {
  items: DiabloItem[];
}

export default function ShopPage({ items }: ShopPageProps) {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Unique classes and categories from items
  const characterClasses = [...new Set(items.map(item => item.characterClass).filter(Boolean))];
  const categories = [...new Set(items.map(item => item.category).filter(Boolean))];

  // Filtered and sorted items
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      // Search term filter
      (searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())) &&
      
      // Character class filter
      (selectedClass === '' || item.characterClass === selectedClass) &&
      
      // Category filter
      (selectedCategory === '' || item.category === selectedCategory)
    );
  }, [items, searchTerm, selectedClass, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Diablo 2 Item Shop</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search items..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />

        {/* Character Class Filter */}
        <select 
          value={selectedClass} 
          onChange={(e) => setSelectedClass(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All Classes</option>
          {characterClasses.map(charClass => (
            <option key={charClass} value={charClass}>{charClass}</option>
          ))}
        </select>

        {/* Category Filter */}
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
          >
            <figure className="px-10 pt-10">
              <img 
                src={item.imageUrl || '/placeholder-item.png'} 
                alt={item.name}
                className="rounded-xl max-h-48 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-sm line-clamp-2">{item.description}</p>
              <div className="flex justify-between w-full">
                <span className="text-xl font-bold">
                  {item.salePrice || item.price}
                </span>
                <span className="badge badge-primary">
                  {item.characterClass}
                </span>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredItems.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No items found. Try adjusting your search or filters.
        </div>
      )}
    </div>
  );
}

// Server-side data fetching
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Google Sheets API authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    });

    // Create client instance for auth
    const sheets = google.sheets({ version: 'v4', auth });

    // Fetch data from specific sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1wm7ksaYdSnnA2QGgoBkUasUPjl83jq3pJXKKOTptLTg', // Your spreadsheet ID
      range: 'Sheet1!A:Z', // Adjust range as needed
    });

    // Process the rows
    const rows = response.data.values || [];
    const headers = rows[0];
    const items: DiabloItem[] = rows.slice(1).map((row) => {
      // Create an object mapping headers to row values
      const itemData: DiabloItem = {
        id: row[headers.indexOf('ID')] || '',
        name: row[headers.indexOf('Name')] || '',
        price: row[headers.indexOf('Price')] || '',
        salePrice: row[headers.indexOf('Sale Price')] || '',
        description: row[headers.indexOf('Description')] || '',
        characterClass: row[headers.indexOf('Character Class')] || '',
        category: row[headers.indexOf('Categories')] || '',
        imageUrl: row[headers.indexOf('Image URL')] || '',
        stock: row[headers.indexOf('Stock')] || ''
      };
      return itemData;
    });

    return {
      props: { 
        items: items 
      },
    };
  } catch (error) {
    console.error('Error fetching shop items:', error);
    return {
      props: { 
        items: [] 
      },
    };
  }
}