// script.js
const courses = new Map([
    [1, {
        courseImage: "Resources/images/Finance Image.jpg",
        instructorImage: "Resources/images/Teacher Face.jpg",
        instructorName: "Jason Watkins",
        category: "Finance",
        title: "Finance Series: Learn to Budget and Calculate your Net Worth.",
        duration: "08 hr 15 min",
        lectures: "29 Lectures",
        price: "Free",
        oldPrice: "$29.75",
        rating: "4.9"
    }],
    [2, {
        courseImage: "Resources/images/Digital Marketing.jpg",
        instructorImage: "Resources/images/Teacher Face.jpg",
        instructorName: "Alex Brown",
        category: "Marketing",
        title: "Digital Marketing Masterclass: SEO, Social Media, and Strategy",
        duration: "10 hr 30 min",
        lectures: "35 Lectures",
        price: "$39.99",
        oldPrice: "$59.99",
        rating: "4.7"
    }],
    [3, {
        courseImage: "Resources/images/Web development.jpg",
        instructorImage: "Resources/images/Teacher Face 2.jpg",
        instructorName: "Cindy Moore",
        category: "Development",
        title: "Full-Stack Web Development: From Zero to Hero",
        duration: "25 hr 45 min",
        lectures: "58 Lectures",
        price: "$49.99",
        oldPrice: "$79.99",
        rating: "4.8"
    }],
    [4, {
        courseImage: "Resources/images/Machine Learning.jpg",
        instructorImage: "Resources/images/Teacher Face.jpg",
        instructorName: "David Smith",
        category: "Data Science",
        title: "Machine Learning Fundamentals with Python",
        duration: "15 hr 00 min",
        lectures: "42 Lectures",
        price: "$59.99",
        oldPrice: "$89.99",
        rating: "4.6"
    }],
    [5, {
        courseImage: "Resources/images/UX&UI design.jpg",
        instructorImage: "Resources/images/Teacher Face 2.jpg",
        instructorName: "Jessica Doe",
        category: "UI/UX Design",
        title: "User Experience Design Principles & Practice",
        duration: "12 hr 20 min",
        lectures: "38 Lectures",
        price: "$44.99",
        oldPrice: "$69.99",
        rating: "4.9"
    }],
    [6, {
        courseImage: "Resources/images/Entreprenuership.jpg",
        instructorImage: "Resources/images/Teacher Face.jpg",
        instructorName: "Brian Miller",
        category: "Business",
        title: "Entrepreneurship & Business Management Basics",
        duration: "09 hr 45 min",
        lectures: "31 Lectures",
        price: "$34.99",
        oldPrice: "$49.99",
        rating: "4.5"
    }]
]);

// Get the container where we'll put the cards
const courseDisplay = document.querySelector(".course-display");
courseDisplay.innerHTML = '';

// Create and append cards
courses.forEach((course) => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    
    card.innerHTML = `
        <img src="${course.courseImage}" alt="Course Image" class="course-image">
        <div class="course-details">
            <div class="instructor">
                <img src="${course.instructorImage}" alt="Instructor" class="instructor-img">
                <div class="instructor-info">
                    <h4>${course.instructorName}</h4>
                    <span class="category">${course.category}</span>
                </div>
            </div>
            <p class="course-title">${course.title}</p>
            <div class="course-meta">
                <span>⏰ ${course.duration}</span>
                <span>📚 ${course.lectures}</span>
            </div>
            <div class="course-footer">
                <span class="price">${course.price} <span class="old-price">${course.oldPrice}</span></span>
                <span class="rating">${course.rating} ⭐</span>
            </div>
        </div>
    `;
    
    courseDisplay.appendChild(card);
});

// // Fix hero image
// document.querySelector(".floating-image").src = "https://via.placeholder.com/600x400?text=Course+Hero+Image";