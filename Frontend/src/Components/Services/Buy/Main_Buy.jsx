import React, { Component } from "react";
import properties from "../../data/properties";
import HomeCard from "../../HomeCard";
import "./Main_Buy.css";

class Main_Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOption: "default",
      searchTerm: "",
    };
  }

  handleSortChange = (e) => {
    this.setState({ sortOption: e.target.value });
  };

  resetFilters = () => {
    this.setState({
      searchTerm: "",
      sortOption: "default",
    });
  };

  render() {
    // Filter only buy category properties
    const buyListings = properties.filter((item) => item.category === "buy");

    // Apply search filter
    const filteredListings = buyListings
      .filter(
        (item) =>
          item.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
          item.location.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (this.state.sortOption) {
          case "price-low-high":
            return a.price - b.price;
          case "price-high-low":
            return b.price - a.price;
          case "newest":
            return new Date(b.dateAdded) - new Date(a.dateAdded);
          case "rating":
            return b.rating - a.rating;
          default:
            return 0;
        }
      });

    return (
      <div className="buy-properties-page">
        <div className="buy-hero">
          <h1>Find Your Dream Home</h1>
          <p>Browse our exclusive selection of properties for sale</p>
        </div>

        {/* <div className="filters-container">

          <div className="sort-filter">
            <label>Sort by:</label>
            <select value={this.state.sortOption} onChange={this.handleSortChange}>
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest Listings</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div> */}

        <div className="properties-grid">
          {filteredListings.length > 0 ? (
            filteredListings.map((item) => <HomeCard key={item.id} {...item} />)
          ) : (
            <div className="no-results">
              <p>No properties match your search criteria.</p>
              <button onClick={this.resetFilters}>Reset Filters</button>
            </div>
          )}
        </div>

        {filteredListings.length > 0 && (
          <div className="results-count">
            Showing {filteredListings.length} of {buyListings.length} properties
          </div>
        )}
      </div>
    );
  }
}

export default Main_Buy;
