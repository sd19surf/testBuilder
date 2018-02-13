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
	  "name": "'Convective Winds gte 50 knots or Hail gte .75in'", "color": "ff0000"
	},
	{
	  "name": "'Freezing Precipitation'", "color": "9933ff"
	},
	{
	  "name": "'Blizzard and or Heavy Snow'", "color": "09C3F5"
	},
	{
	  "name": "'Heavy Rain'", "color": "66ff00"
	},
	{
	  "name": "'Non-Convective Winds gte 50 knots'", "color": "000000"
	},
	{
	  "name": "'Unsuitable Alternate - CIG or VIS(lt 1000 or lt 2)'", "color": "ffff00"
	},
	{
	  "name": "'Significant Tropical'", "color": "ff9900"
	},
	{
	  "name": "'Convective Winds gte 35 knots but lt 50 knots or Hail gte .75in'", "color": "347940"
	}
 ]
};
