NOTES ON PROJECT:
NEEDS STYLING

I came close to accomplishing what I wanted to with this project (styling aside). The biggest pitfall was finding an API that
listed adequate information for the venues I wanted to include. I ended up resorting to using the Google Placee API for venue information. I spent an unbelievable amount of time trying to find an API that would include a JSON response that included
venue contact information, venue capacity or a link to the venue and I couldn't find that. A great deal of time was also spent
testing whether a given API worked or not too, including whether it would give a response at all, what kind of response it gave
(several times I jumped through hoops to get an API key only to find the result were not in JSON, which as far as we've learned, wouldn't work with Handlebars). Also, issues regarding authentication and not getting keys immediately added time to the research phases as well.

In the end, this project relies on two types of Ajax queries. One to Google Maps Geocode API, which provides a geolocation for both the users start and endpoint. Fortunately, this API is smart enough to take in the city/state name as a string from the text input form, and return the info as latitude and longitude components. As far as the project goes, I also split the users input so it would only return the name of the city and used this with the website for Panaramio (www.panaramio.com). This site allows you to
access a multitude of photos they've collected and filter the output based on tags. So as an example (also given other parameters) used in the url), this would provide a slide show of photos for a given city that the user input:
"http://www.panoramio.com/wapi/template/slideshow.html?tag=" + usersOrigin.split(",")[0] + \ ';width=450&amp;height=400&amp;delay=4.0"

That said, I really wanted to find an API that provided photos of U.S. cities (be it monuments or shots of buildings, etc.) but spent a great deal of time looking and testing to no avail. This was a work around, as I got my first taste of using the tag
<iframe> to get the slide show to provide photos using the website.

The Google Embed API was then used to generate driving directions from the users entered staring point to the end point. This was also a bit of a work around, as I got this to work based on the APIs iframe directions as well. The users input for their destination was split up and rejoined into a new variable that put the city/state together as so - 'NEWYORK+ NY' to make it work, and accounted for whether or not the city was one or two words (the API is also smart enough to make this work with a 3 word city as well).

Finally, using the Google Places API, a call was made based on the geocode location and the radius I provided that returned a JSON list of information that could be parsed with Handlebars. The info I was able to use was pretty basic (name, address, rating and price level). A result for photos showed up in the JSON response, but it was too complicated for me to figure out how to work with Handlebars (probably even without Handlebars as well). It's is buried inside 3 separate arrays going further into the object, and the value looked like:

"<a href="https://maps.google.com/maps/contrib/107793891769224338620/photos">Molly Darcy&#39;s Irish Pub &amp; Restaurant</a>"


Toward the end of my code you'll see I attempted to create a link using a general Google search url and the results of the names given for each club, but I'm pretty sure this is against Googles policy.

All an all I feel I've learned a lot about reading docs, and feel like I have a much better handle on responses and Handlebars which is great!
