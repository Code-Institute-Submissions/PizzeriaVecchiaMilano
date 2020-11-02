
# Pizzeria Vecchia Milano

This is the source code of the Pizzeria Vecchia Milano. 

The website aims to easily display the content, and facilitate customers to make their choice and to place their own order.

This website is suitable for everyone who want to enjoy a delicious pizza in the pizzeria or at home.

To see it in action just click this [link](https://omarbedawi.github.io/PizzeriaVecchiaMilano/)


## Installation

In the head of the project I have installed the links to have access to different libraries. 
![head](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/1head&mail.png?raw=true)

1. Bootstap 4: a library with templates for buttons, forms, jumbotrons and so many other components. For this project for example I used it to build the responsive navigation bar and the green button on the navabar.
1. Font Awesome: is an icon library. 
1. Cdnjs is a Javascript library and below the external link to the style.css file.
1. In the <head> of the orderonline page there is the link to connect to the sendEmailJs service.
  This service, every time an order is sent, make sure to send an email with the order to the pizzeria, and a confirmation email to the customer.
1. At the bottom of the page is where the javascript files are located. In every page html page for example there is the <script> to make the navbar responsive for every screen size. 
  
![javascript](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/2javascript_bottom.png?raw=true)



## UX

I built a responsive navbar, that shows a toggle menu when the screen size is below 991px. 

To build it I followed an accurate and guided tutorial that you can find at this [link](https://youtu.be/gt8zOLQ8A0w)

The homepage presents a carousel with pictures followed by the awards won by the pizzeria and a google map.

The menu page gives the possibility to see a pizza when you hover the mouse on it: infact an image of the pizza you are hovering on, will appear.

The ourstory page is telling a piece of history of the pizzeria. At the bottom of the page there is also a short video of them in action.

The gallery page is a collection of pictures shared by the pizzeria staff and the customers.

The order on-line page is for who want a home delivery or to pick up at the pizzeria.

The CSS file is divided by comments, that I used as title to separate the html pages or elements like map and carousel and the different screen sizes

This make any future correction or research much easier 

![css](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/css_comments.png?raw=true)


![css2](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/css_screens.png?raw=true)





### WIREFRAMES

I built the wireframes using the balsamiq.cloud service.

![home](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/1homepage.png?raw=true)
![menu](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/2menu.png?raw=true)
![story](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/3ourstory.png?raw=true)
![gallery](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/4gallery.png?raw=true)
![order](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/5orderon-line.png?raw=true)




### Users

The website is preferably for 16 years old or older.


## Technologies Used

This project makes use of:
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - HTML for strucutre
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - CSS for Styling
- [JavaScript](https://www.w3schools.com/jsref/)
    - **JavaScript** for application controller
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Google Chrome](https://www.google.com/chrome/)
    - Used for browser and dev tools
- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new)
    - Used for browser and dev tools
- [Microsoft Edge](https://www.microsoft.com/en-us)
    - Used for browser and dev tools
- [Google](https://www.google.com/)
    - **Google** was used for research.
- [Bootstrap](https://getbootstrap.com/)
    - HTML and CSS Framework from **Bootstrap**
    - This project was built using the **Gitpod** IDE
- [Git](https://git-scm.com/)
    - **Git** used for Version Control
- [GitHub](https://github.com/)
    - Repository hosted on **GitHub**
- [Github Pages](https://pattern-projects.github.io/oireachtas-ifd-project/)
    - Website hosted on **Github Pages**




## Testing

The code was tested through the [W3C Markup Validator](https://validator.w3.org/#validate_by_input) for Html and Css.


Responsive Navbar:
1. Go to any html page.
1. Try to reduce the screen size to any size below 991px and verify that a toggle menu appears on the top right angle of the screen.
1. Try to click on the toggle menu and verify that a list with all the pages of the website appears to you.
1. Try to click on every page provided by the toggle menu and verify that the pages are all connected between each other and reachable from any other page.



Carousel:
1. Go to the "index" page.
1. Click on the right arrow of the carousel and verify that the second image slide to the center of the carousel.
1. Click on the right arrow of the carousel and verify that the left arrow appears.
1. After the first click on the right arrow, click on left arrow to go back to the first picture, and verify that the left arrow disappears.
1. Click on the right arrow until you reach the last picture, and verify that the right arrow disappears.


Video:
1. Go to the "our story" page.
1. Scroll to the end of the page where the video is placed, try to click on the "play" command and verify that the video is playing.


Gallery:
1. Go to the "gallery" page.
1. Set the size of the screen to at least 992px and verify that every raw has 4 column of pictures.
1. Set the size of the screen between 576px and 992px and verify that every raw has 3 column of pictures.
1. Set the size of the screen to less than 576px and verify that every raw has 2 column of pictures.


Contact form:
1. Go to the "Order on-line" page.
1. Try to submit the form with empty fields and verify that an error message about the required fields appears.
1. Try to submit the form with an invalid email address and verify that a relevant error message appears.
1. Try to submit the form with all inputs valid (and a valid email ) and verify that a confirmation email is sent to the email address provided.



























The site was also tested through different browser (Mozilla Firefox, Google Chrome and Microsoft Edge) and different screen sizes
![screens](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/responsive.png?raw=true)

## Deployment

The project is hosted on [GitHub Pages](https://github.com/OmarBedawi/PizzeriaVecchiaMilano)

The process involved:
- Host a git repository on GitHub. Explained [here](https://help.github.com/en/articles/create-a-repo).
- The root folder contains README.md and index.html files
- On GitHub repository settings page move to GitHub Pages section
- Change source to master branch. (Or any desired branch)
- Provided link will be your projects home (index.html) page.
 
To deploy your own version of the website:
- Have git installed
- Visit the [repository]([GitHub](https://github.com/OmarBedawi/PizzeriaVecchiaMilano))
- Click 'Clone or download' and copy the code for http
- Open your chosen IDE (in my case Gitpod)
- Open a terminal in your root directory
- Type 'git clone ' followed by the code taken from github repository
    - ```git clone https://github.com/OmarBedawi/PizzeriaVecchiaMilano-ifd-project.git```
- When this completes you have your own version of the website
    - Feel free to make any changes to it
- The website can be run by opening one of the HTML files within a web browser
- Visit the link provided
- Your website with any made changes will appear
- Saved changes to the website will appear here after refreshing the page

The benefits of hosting your website on GitHub pages is that any pushed changes to your project will automatically update the website. Development branches can be created and merged to the master when complete.

It may take a moment for changes to appear on the hosted website.

During development the site is written in Gitpod.

### Acknowledgements
Thank you to the following for inspiration, motivation and the direction I needed:

- Seun Owonikoko    @seun_mentor
- Code Institute staff
