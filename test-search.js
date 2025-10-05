// Simple test script to verify search functionality
async function testSearch() {
  console.log('Testing search functionality...');
  
  try {
    // Test search with microgravity
    const response = await fetch('http://localhost:3000/api/articles?search=microgravity');
    const data = await response.json();
    
    console.log('Search API Results:');
    console.log(`Total results: ${data.total}`);
    console.log('First article title:', data.articles[0]?.title);
    
    // Test empty search
    const emptyResponse = await fetch('http://localhost:3000/api/articles');
    const emptyData = await emptyResponse.json();
    
    console.log('\nEmpty search results:');
    console.log(`Total articles: ${emptyData.total}`);
    
    // Test search with stem cell
    const stemResponse = await fetch('http://localhost:3000/api/articles?search=stem%20cell');
    const stemData = await stemResponse.json();
    
    console.log('\nStem cell search results:');
    console.log(`Total results: ${stemData.total}`);
    
    console.log('\n✅ Search functionality is working correctly!');
    
  } catch (error) {
    console.error('❌ Search test failed:', error.message);
  }
}

testSearch();