
![Untitled-1](https://github.com/Poshtriggha/Afflux/assets/134752035/3432ac52-b1a2-4fcb-83c6-70fd1c17dcdd)

Aim of Project:
To develop a converter that converts from one currency to another. For example United State Dollar to Ghanaian Cedi. This converter also handles cryptocurrency conversions eg. Bitcoin to Solana ; The converter also handles cryptocurrency to fiat currency conversions. Eg. Bitcoin to USD.

Team Members:
Nana Kwame Adjei-Antwi (Backend Developer)
Ezeh Chekwube (Frontend Developer)


Timeline Of Project:
Week 1: Landing Page and Currency converter Api Integration
Week 2: Data Visualization, Cryptocurrency Converter, UI cleanup, responsive UI for mobile

This project was created for people who frequently interact with forex or stock trading and investment apps. This app was also created for cryptocurrency enthusiast.

Our personal focus was creating a site that integrates with APIs. We wanted the experience of developing an app that is suitable for production,  one that has authentication, backend , frontend , visualization and some chatbot integration. This was so that members of this team can further their skills in these areas.










Why we chose to work on this project
After completing a few ALX projects together, Ezeh and I decided that we would work on a project together. Ezeh has keen interest and eye for frontend technology and I am interested in backend and computing in general. We wanted to choose a project that would enable to share knowledge. We went with a currency conversion app mainly because it needs integration with APIs which makes it a bit more advanced than your regular web project. A project like this would enable us both to work on several frontend and backend areas including UI/UX, authentication, web programming, API integration and working with math. We also chose this app because we follow the stock market and crypto market everyday and also share opinions and portfolio information. We decided to bridge these two passions together.



Architecture Diagram


Technologies Used

HTML & CSS : HTML and CSS used to design user interface.
Javascript: Used in API integration and obtaining user information from HTML forms.
Firebase: Used for user login, registration and logout.
Coingecko API: API used to obtain current cryptocurrency prices.
Exchangerate API: API used to obtain current values of currencies.
Our most difficult technical challenge
The most difficult technical challenge faced was creating a data visualization tool showing the relationship between currency pair values. This would involve giving the user an input where they choose the currency pair, the time period and the type of chart they want. There are complexities at each stage of these:
First the currency pair would require dealing with an external api
This Api would have to not only provide present data but also historical data which many providers would lock behind a paywall. 
For the time period you would have to ensure that the user gets historical data as far back as maybe a year or five and granular values such as changes per hour or per minute
The type of chart also whether you want an xy chart or yx chart depending on what x and y are, what info this chart is supposed to display
For now we have an interim solution where:
Our workaround for creating the visualization tool by leveraging another site's graph creator is a clever and practical solution to the challenge we faced. Here's a more detailed exploration of how we implemented this workaround:

1. User Input: To begin with, we designed a user interface that allowed users to input the currency pair they were interested in and specify the time period for which they wanted to visualize the data. This input form included a dropdown menu to choose currency ,time period pickers and type of graph to gather the necessary information.

2. Data Extraction: Once the user provided the currency pair and time period, our app extracted this information and prepared it for further processing. This involved validating the input, ensuring data consistency, and formatting the values in a way that could be used by the external graph creator. Investing.com is the external graph creator.

3. External Graph Creator (Investing.com):Instead of building a graph creation tool from scratch, we identified and integrated with an external service or API that specialized in generating graphs based on input data. Investing.com provides third-party graphing platform or a data visualization service that offered customizable charting options.

4. Data Submission: Our app then sent the extracted currency pair and time period data to the external graph creator's API or interface. This involved making HTTP requests, providing the necessary parameters, and handling responses from the external service.

5. Graph Display: After the external graph creator processed the data and generated the graph, our app received the graph image or embeddable code. We then displayed this generated graph within your app's interface, presenting the visual representation of the currency pair's performance over the specified time period to the user.

By adopting this approach, we were able to overcome the challenges of creating a complex visualization tool from scratch while still providing users with valuable insights and data visualization capabilities. This workaround not only saved development time and resources but also allowed us to leverage the expertise and infrastructure of external services specialized in data visualization.


5. What we’ve learned
Technical take-aways: We learnt that it’s easier to let a more trusted and experienced third party to handle authentication in this case Firebase. We want users to feel secure when using our services and know that we Firebase was the most secure option for us

We’ve also learnt how difficult creating visualization tools can be at this scale and how even after the skeleton of the project has been created, cleaning everything up for a production ready experience can be very difficult.

What i might do differently:
Get a preset design in mind. For our landing page our design was preset so we knew what we were going for. However when it came to the converters we let the backend dictate too much of our design

As an engineer, from this project I learned to shy away from novel problems and embrace the uncomfortable

This project has increased my interest in building projects. However it seems I lose interest after basic functionality has been acquired


My belief was that converter apps were rather simple. However there are entire business who form the backbone of these APIs many rely on. And even when we borrow so much from them, we still faced many complexities. Imagine those on their end. Maintaining a flagship api for a currency or crypto is no easy task






 
6. Ambitious, passionate, learner

[https://github.com/Poshtriggha/Afflux](https://poshtriggha.github.io/Afflux/)https://poshtriggha.github.io/Afflux/
