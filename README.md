# A simple surf forecasting website

I'm building this to learn TypeScript, React, and other web development stuff.

Some of the features may be rather useless for an actual forecasting site, and done purely for the sake of trying out implementation.

## Design

Frontend is pretty simple and just displays data from the API served by the backend.

The backend will get forecasting data from some external API(s), process it, possibly do some forecasting magic of its own (unlikely at this point), and store it in a database. It will then serve this via an API.

The hardest part of this project is getting access to wave forecasting data without paying a fortune for it. It can cost upwards of €60000 yearly for an API key from ECMWF...

It seems that whether you're paying for your weather API or not, they still tend to be rather difficult to use, so I'm going to have to figure that out.
