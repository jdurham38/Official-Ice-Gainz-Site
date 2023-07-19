import React, { useState } from "react";

const userData = [
  {
    title: "Ice Cream... Healthy!?",
    content: "Ice cream can be great for you!",
    category: "nutrional information",
    date: "June 8, 2023",
    link: "blog-personal-nyc", // Add the link for the blog page
  },
  {
    title: "Build The Body",
    content: "Get the body of your dreams",
    category: "fitness information",
    date: "June 8, 2023",
    link: "https://example.com/apple-blog", // Add the link for the blog page
  },
  {
    title: "Mental Health is Just as Important",
    content: "Be sure to take care of you mentally",
    category: "mental health",
    date: "June 5, 2023",
    link: "https://example.com/tile3-blog", // Add the link for the blog page
  },
  // Add more blog posts with title, content, category, date, and link properties
];

const Blogs = () => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredData, setFilteredData] = useState(userData);

  const handleTileClick = (tileId) => {
    setSelectedTile(tileId === selectedTile ? null : tileId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value, selectedCategories);
  };

  const handleCategoryChange = (category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
    filterData(searchTerm, newSelectedCategories);
  };

  const filterData = (searchTerm, categories) => {
    if (categories.length === 0 && searchTerm === "") {
      setFilteredData(userData);
    } else {
      const filteredResults = userData.filter((tile) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const lowerCaseCategory = tile.category.toLowerCase();

        return (
          (categories.length === 0 || categories.includes(lowerCaseCategory)) &&
          (tile.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            tile.content.toLowerCase().includes(lowerCaseSearchTerm) ||
            tile.date.toLowerCase().includes(lowerCaseSearchTerm))
        );
      });

      setFilteredData(filteredResults);
    }
  };

  
  const categoryColors = {
    "nutrional information": "#FCE7F3",
    "fitness information": "#FCEAC1",
    "mental health": "#CAF3FC",
  };

  return (
    <div>
      <section
        style={{
          backgroundColor: "#B4E6FE",
          padding: "50px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "16px",
            color: "#000000",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            fontFamily: "FrozenFont, Arial, sans-serif",
            letterSpacing: "1px",
            borderRadius: "20px",
            padding: "10px 20px",
          }}
        >
          BLOGS
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ margin: "10px" }}
          />
          <label style={{ margin: "10px" }}>
            <input
              type="checkbox"
              checked={selectedCategories.includes("nutrional information")}
              onChange={() => handleCategoryChange("nutrional information")}
            />
            Nutrion
          </label>
          <label style={{ margin: "10px" }}>
            <input
              type="checkbox"
              checked={selectedCategories.includes("fitness information")}
              onChange={() => handleCategoryChange("fitness information")}
            />
            Fitness
          </label>
          <label style={{ margin: "10px" }}>
            <input
              type="checkbox"
              checked={selectedCategories.includes("mental health")}
              onChange={() => handleCategoryChange("mental health")}
            />
            Mental Health
          </label>
        </div>
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "20px", padding: "20px" }}>
        {filteredData.map((blog, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: categoryColors[blog.category],
              border: selectedTile === index ? "2px solid #000" : "none",
            }}
            onClick={() => handleTileClick(index)}
          >
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>{blog.date}</p>
            <a href={blog.link}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;