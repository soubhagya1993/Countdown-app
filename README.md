Countdown Hub
A minimalist desktop countdown timer application built with Electron, HTML, CSS, and JavaScript. Keep track of important events, deadlines, and milestones with a clean and simple interface.

!

Features
Clean Desktop Interface: A two-column layout with an event list on the left and a live countdown on the right.

Persistent Storage: All your countdown events are saved to localStorage, so they will be there even after you close and reopen the application.

Event Management: Easily add new events with a name and a specific date and time.

Intuitive UI: Click on any event in the sidebar to view its countdown. Delete an event with a simple click.

Getting Started
To run this application on your local machine, you'll need to have Node.js and npm installed.

Prerequisites
Node.js (LTS version recommended)

npm (comes with Node.js)

Installation
Clone the repository:

git clone [your-repository-url]
cd countdown-hub

Install the dependencies:

npm install

Run the application:

npm start

The app window should appear, and you can begin adding your countdowns.

Project Structure
main.js: The main process file for Electron. It creates the application window and handles basic app lifecycle events.

index.html: The renderer process file. It contains all the HTML, CSS, and JavaScript for the user interface and application logic.

package.json: Manages the project's metadata and dependencies, including Electron.

Customization
You can easily customize the application's appearance and functionality by editing the index.html file:

Styling: Modify the <style> block at the top to change colors, fonts, and layout. The CSS is well-commented and uses CSS variables for easy theme changes.

Logic: The <script> tag at the bottom contains all the logic for managing events and updating the countdown.

Contributing
This is a personal project, but feel free to fork the repository and make your own improvements!

License
This project is licensed under the ISC License.