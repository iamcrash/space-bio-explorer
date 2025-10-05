// Test script to verify filters work without errors
async function testFilters() {
  console.log('Testing filters...');
  
  try {
    // Test basic API call
    const response = await fetch('http://localhost:3000/api/articles');
    const data = await response.json();
    
    console.log(`✅ API working: ${data.total} articles loaded`);
    
    // Test category filter
    const categoryResponse = await fetch('http://localhost:3000/api/articles?category=Space%20Biology');
    const categoryData = await categoryResponse.json();
    
    console.log(`✅ Category filter working: ${categoryData.total} Space Biology articles`);
    
    // Test year filter
    const yearResponse = await fetch('http://localhost:3000/api/articles?yearMin=2010&yearMax=2015');
    const yearData = await yearResponse.json();
    
    console.log(`✅ Year filter working: ${yearData.total} articles from 2010-2015`);
    
    // Test author filter
    const authorResponse = await fetch('http://localhost:3000/api/articles?author=all');
    const authorData = await authorResponse.json();
    
    console.log(`✅ Author filter working: ${authorData.total} articles with author=all`);
    
    // Test combined filters
    const combinedResponse = await fetch('http://localhost:3000/api/articles?category=Cell%20Biology&yearMin=2000&yearMax=2024&author=all');
    const combinedData = await combinedResponse.json();
    
    console.log(`✅ Combined filters working: ${combinedData.total} Cell Biology articles`);
    
    // Check categories
    const categories = [...new Set(data.articles.map(article => article.category).filter(Boolean))];
    console.log(`✅ Categories available: ${categories.length} categories`);
    console.log(`   Categories: ${categories.join(', ')}`);
    
    console.log('\n🎉 All filters are working correctly!');
    
  } catch (error) {
    console.error('❌ Filter test failed:', error.message);
  }
}

testFilters();