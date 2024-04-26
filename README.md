# Camper Rental Application

Welcome to the Camper Rental Application, designed to offer camper rental services in Ukraine. This application comprises three main pages: Home, Catalog, and Favorites. Additionally, it includes a modal window for displaying advertisement details and a form for booking a camper.

## Features Implemented

### Advertisement Card

The application features an advertisement card layout, providing users with essential information about camper rental advertisements.

### Pagination

On the catalog page, advertisements are paginated, displaying four advertisements per page initially. Users can load more advertisements by clicking the "Load more" button.

### Favorites

Users can add advertisements to their favorites list by clicking on a heart-shaped button. The button's color changes accordingly to indicate whether the advertisement is added to favorites or not.

### Persistence

User actions, such as adding or removing advertisements from favorites, persist even after page refresh, ensuring a seamless user experience.

### Modal Window

Detailed information about a camper advertisement is displayed in a modal window when users click the "Show more" button. The modal closes when the close button ("x"), backdrop, or the "Esc" key is pressed.

### Form

The modal window includes a form for booking a camper. It consists of fields for name, email, booking date, and comment. Mandatory fields are validated before submission to ensure data integrity.

### Price Format

Rental prices are displayed in a formatted manner with commas (e.g., 8,000) for better readability.

### Backend Integration

The application utilizes a personal backend created using the MockAPI service. The backend contains a resource named adverts with various fields, ensuring a robust data management system.

### Routing with React Router

Routing is implemented using React Router with the following routes:

- `/`: Home page
- `/catalog`: Catalog page
- `/favorites`: Favorites page

Users are redirected to the home page if they navigate to a non-existent route, ensuring smooth navigation.

## Conclusion

By implementing the specified features and ensuring a user-friendly interface, the Camper Rental Application aims to provide users with a seamless experience in browsing and booking campers for rent. This enhances overall user satisfaction and engagement, making camper rental services more accessible and convenient.