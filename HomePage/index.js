function handleCategoryClick(category) {
  console.log(`user has clicked on ${category} category`);
    var url = `../ProductListingPage/productListing.html?category=${category}`
    window.location.href = url;
}




