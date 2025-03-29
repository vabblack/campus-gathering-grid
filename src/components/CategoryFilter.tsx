
import React from 'react';
import { EventCategory } from '@/types';

interface CategoryFilterProps {
  selectedCategory: EventCategory;
  onCategoryChange: (category: EventCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const categories: EventCategory[] = [
    'All', 'Academic', 'Social', 'Cultural', 'Sports', 'Career', 'Workshop', 'Concert'
  ];

  return (
    <div className="flex flex-wrap justify-center mb-8">
      <div className="bg-white rounded-lg shadow-md p-2 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
