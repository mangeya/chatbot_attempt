// First, create an HTML element for the chatbot window
var chatbotWindow = document.createElement('div');
chatbotWindow.id = 'chatbot-window';
chatbotWindow.style.position = 'fixed';
chatbotWindow.style.right = '20px';
chatbotWindow.style.bottom = '20px';

// Next, create an iframe for the chatbot to run in
var chatbotIframe = document.createElement('iframe');
chatbotIframe.src = 'https://your-api-url.com/chatbot';
chatbotIframe.style.width = '400px';
chatbotIframe.style.height = '500px';

// Append the iframe to the chatbot window
chatbotWindow.appendChild(chatbotIframe);

// Add a button to toggle the chatbot window
var chatbotButton = document.createElement('button');
chatbotButton.textContent = 'Chat with us!';
chatbotButton.style.position = 'fixed';
chatbotButton.style.right = '20px';
chatbotButton.style.bottom = '20px';
chatbotButton.addEventListener('click', function() {
  chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'block' : 'none';
});

// Append the chatbot window and button to the document
document.body.appendChild(chatbotWindow);
document.body.appendChild(chatbotButton);
