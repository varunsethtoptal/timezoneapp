timezoneapp
===========

1. Make sure node is installed on your system. If not installed, download the installer and install http://nodejs.org/download/
2. Make sure redis is installed, download the redis server.
2. Clone the repository with the following: git clone https://github.com/varunsethtoptal/timezoneapp.git
3. Move to the root directory and install the dependencies via this command: npm install. 
	This will install the necessary dependencies such as express, socket.io, bcryptjs, ejs.
4. Start the redis server
5. Start the Timezone server via the following command: 
	[If want to supply port, do SET PORT=#PORTNUMBER, where #PORTNUMBER is the number of port]
   node timezoneapp  or node timezoneapp #PORTNUMBER.
6. Connect with the client browser through http://127.0.0.1:8000 or http://127.0.0.1:#PORTNUMBER