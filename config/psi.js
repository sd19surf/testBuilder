var psi = {  
   "ConfidenceLevel":[  
     {
	"name":"High","value": 3
     },
     {
	"name": "Moderate","value": 2
     },
     {
	"name":"Low", "value": 1
      }
   ],

	"Severity": [
	{
	  "name":"Disruptive", "value": 1
	},
	{
	  "name": "Moderate", "value": 2
	},
	{
	  "name": "Critical", "value": 3
	},
	{
	  "name": "Catastrophic", "value": 4
	}
   ],

	"ThreatProbability": [
	{
	  "name": "Isolated", "value": 1
	},
	{
	  "name": "Scattered","value": 2
	},
	{
	  "name": "Numerous", "value": 3
	},
	{
	  "name": "Frequent", "value": 4
	},
	{
	  "name": "Persistent", "value": 5
	}
       ]
};

var criteria = {
	"Criteria": [
	{
	  "name": "Tornado", "color": "0000ff"
	},
	{	
	  "name": "Convective Winds >= 50 knots/Hail >= 3/4in", "color": "ff0000"
	},
	{
	  "name": "Freezing Precipitation", "color": "9933ff"
	},
	{
	  "name": "Blizzard and or Heavy Snow", "color": "09C3F5"
	},
	{
	  "name": "Heavy Rain", "color": "66ff00"
	},
	{
	  "name": "Non-Convective Winds >= 50 knots", "color": "000000"
	},
	{
	  "name": "Unsuitable Alternate - CIG/VIS(<1000/2)", "color": "ffff00"
	},
	{
	  "name": "Significant Tropical", "color": "ff9900"
	},
	{
	  "name": "Convective Winds >= 35 knots but < 50 knots/Hail < 3/4in", "color": "347940"
	}

