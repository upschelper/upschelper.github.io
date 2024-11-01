<?php
// Telegram Bot Token
$botToken = "8070474283:AAEM1A-rRr7QcqPyopuNgDbB2IeB6LcJzN8";
$chatId = "5943119285";

// Collect form data
$name = htmlspecialchars(strip_tags($_POST['name']));
$email = htmlspecialchars(strip_tags($_POST['email']));
$message = htmlspecialchars(strip_tags($_POST['message']));

// Create the message to send
$text = "Name: $name\nEmail: $email\nMessage: $message";

// Send the message to Telegram
$sendMessage = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($text);

// Make the API request
$response = file_get_contents($sendMessage);

// Check the response
if ($response) {
    // Redirect to a success page or display a success message
    echo "Message sent successfully!";
} else {
    // Handle the error
    echo "Failed to send message.";
}
?>
