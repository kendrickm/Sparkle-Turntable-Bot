/**
 * This file contains the configurable elements of sparkle.js.
 * Replace ##### with your information
 */

//Bot information
//To find your auth/userid: http://alaingilbert.github.com/Turntable-API/bookmarklet.html
exports.AUTH   = 'auth+live+#####';  //Bot's auth code
exports.USERID = '#####';            //Bot's userid
exports.LAPTOP = 'chrome';			 //Bot laptop type
exports.MAINADMIN = '#####';         //Your userid

//Sets up the bot admin array
exports.admins = new Array();
exports.admins[0]  = '#####'; //Admin 1 userid
exports.admins[1]  = '#####'; //Admin 2 userid, etc

//Room codes
//Use bookmarklet to find room codes.
exports.ROOMID = '4e9d6e14a3f75112a202cb1d'; //Indie/Classic Alternative 1 + Down

//Database setup
exports.useDatabase   = true;
exports.DATABASE      = 'nodejs_mysql_sparkle';
exports.SONG_TABLE    = 'SONGLIST';
exports.CHAT_TABLE    = 'CHATLOG';
exports.HOLIDAY_TABLE = 'HOLIDAY_GREETINGS';
exports.DBLOGIN       =  {
	user: '#####',
	password: '#####',
}				//A mysql login for your bot

//TCP Setup
exports.useTCP = true;
exports.tcpPort = 8180;
exports.tcpHost = '0.0.0.0';

//Last.fm API key for use with last.fm API calls
//Obtain an API key at http://www.last.fm/api/ or disable under Flags
exports.lastfmkey = 'a8bd9d284f15c247a2c3e29095ffa3cd';

//Flags
exports.logConsoleEvents = false;	//Log room data in console
exports.autoAwesome      = true;	//Auto-awesomes every song
exports.autoRejoin       = true;	//Will re-join a room after being booted
exports.reportSongStats = true;		//Reports song stats in chat after each song
exports.welcomeUsers    = true;		//Welcomes users in chat
exports.welcomeGreeting = 'Hiya papaya ';	//Greeting for users
exports.ownerResponse   = 'Kendy is my owner!'; //Owner response
exports.oneDownEnforce  = false;		//Enforce a One & Down room policy
exports.botSing			= false;	//Bot sings parts of certain songs
exports.uselastfmAPI    = true;	//Use the last.fm API for certain calls
