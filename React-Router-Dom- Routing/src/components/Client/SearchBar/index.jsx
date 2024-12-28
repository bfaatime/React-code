import React from 'react';
import { Input } from 'antd';

const SearchBar = ({ onSearch }) => {
  return (
    <Input.Search
      placeholder="Search products"
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: 20 }}
    />
  );
};

export default SearchBar;