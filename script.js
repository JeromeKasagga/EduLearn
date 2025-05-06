// Mobile Menu Toggle
document.getElementById('menu-toggle')?.addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    this.innerHTML = menu.classList.contains('hidden') 
        ? '<i class="fas fa-bars"></i>' 
        : '<i class="fas fa-times"></i>';
});

// Course Data
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
        instructorImage: "Resources/images/Teacher Face 2.jpg",
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

// Generate Course Cards
function generateCourses() {
    const courseDisplay = document.getElementById("course-display");
    if (!courseDisplay) return;
    
    courseDisplay.innerHTML = '';
    
    courses.forEach((course) => {
        const card = document.createElement("div");
        card.className = "bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all hover:-translate-y-1";
        
        card.innerHTML = `
            <div class="p-1.5">
                <img src="${course.courseImage}" alt="Course" class="w-full h-52 object-cover rounded-lg">
            </div>
            <div class="p-5">
                <div class="flex items-start gap-3 mb-3">
                    <img src="${course.instructorImage}" alt="Instructor" class="w-10 h-10 rounded-full border-2 border-emerald-500">
                    <div>
                        <h4 class="font-medium text-gray-900">${course.instructorName}</h4>
                        <span class="inline-block bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full mt-1">
                            ${course.category}
                        </span>
                    </div>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-3 line-clamp-2">${course.title}</h3>
                <div class="flex justify-between text-sm text-gray-500 py-3 border-y border-gray-100 mb-4">
                    <span class="flex items-center gap-1"><i class="far fa-clock"></i> ${course.duration}</span>
                    <span class="flex items-center gap-1"><i class="far fa-book-open"></i> ${course.lectures}</span>
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <span class="font-bold text-emerald-600">${course.price}</span>
                        ${course.oldPrice ? `<span class="text-sm text-gray-500 line-through ml-2">${course.oldPrice}</span>` : ''}
                    </div>
                    <span class="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                        ${course.rating} <i class="fas fa-star text-amber-500 text-xs"></i>
                    </span>
                </div>
            </div>
        `;
        
        courseDisplay.appendChild(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    generateCourses();
});