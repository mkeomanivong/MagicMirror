/* Magic Mirror Config File
 * 
 * By: Max Keomanivong
 * 
 * Setting up config file for raspberry pi
 */
 
 var config = {
		port: 8080;
		ipWhitelist: ["192.168.1.1", "::ffff:192.168.1.1", "::1"],
		language: 'en';
		units: 'metric',
		
		modules:[
							{
							module: 'alert'
							},
							{
							module: 'newsfeed',
							position: 'bottom_bar'
							config: {
								feeds: [
								{
									title: "New York Times",
									url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
								},
								]
								showSourceTitle: true,
								showPublishDate: true,
								showDiscription: true
								reloadInterval: 300000,
								updateInterval: 10000,
								animationSpeed: 2500,
								maxNewsItems: 0,
								removeStartTags: 'title', 'discription', 'both',
								
							}
							},
						],
		}
		
