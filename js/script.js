// Function to toggle FAQ answers
function toggleAnswer(faqId) {
    const answerElement = document.getElementById(faqId);
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block"; // Show answer
    } else {
        answerElement.style.display = "none"; // Hide answer
    }
}

// Sample FAQs for demonstration
document.addEventListener("DOMContentLoaded", function () {
    // Create sample FAQs dynamically
    const faqContainer = document.getElementById('faqContainer');
    
    const faqs = [
        {
            question: "What is UPSC?",
            answer: "UPSC stands for Union Public Service Commission. It conducts exams for various civil services in India."
        },
        {
            question: "How can I prepare for UPSC?",
            answer: "Regular study, understanding the syllabus, and practicing previous year papers are essential for UPSC preparation."
        },
        {
            question: "What subjects should I focus on?",
            answer: "Focus on General Studies, Current Affairs, and your optional subject."
        }
    ];
    
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <h3 onclick="toggleAnswer('answer${index}')">${faq.question}</h3>
            <p id="answer${index}" style="display:none;">${faq.answer}</p>
        `;
        faqContainer.appendChild(faqItem);
    });
});
