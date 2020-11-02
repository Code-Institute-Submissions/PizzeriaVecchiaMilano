
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

I built a responsive navbar, that shows a toggle menu when the screen size is below 991px. 

To build it I followed an accurate and guided tutorial that you can find at this [link](https://youtu.be/gt8zOLQ8A0w)




## UX

### WIREFRAMES

I built the wireframes using the balsamiq.cloud service.

![home](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/1homepage.png?raw=true)
![menu](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/2menu.png?raw=true)
![story](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/3ourstory.png?raw=true)
![gallery](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/4gallery.png?raw=true)
![order](https://raw.githubusercontent.com/OmarBedawi/PizzeriaVecchiaMilano/master/assets/images/readMe_files/wireframes/5orderon-line.png?raw=true)




The homepage presents a carousel with pictures followed by the awards won by the pizzeria and a position map.

The menu page gives the possibility to see a pizza when you hover the mouse on it: infact an image will appear.

The ourstory page is telling a piece of history of the pizzeria. At the bottom of the page there is also a little video about pizza preparation.

The gallery page is a sort of memories page for the customers who want to share their time in the pizzeria.

The order on line page is for who want a home delivery or to pick up at the pizzeria.

The CSS file is divided by comments, that I used as title to separate the pages.

This make any future correction or research much easier ![css](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/myfolder/pictures/jordan-css.png)

And I did the same for the mobile and other screen sizes ![css2](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/documentation/jordan-mob.png?raw=true)

For the Html files has been the same ![html](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/documentation/html.png?raw=true)
Every element built, has a comment explaining the reasons and eventually the source of that code

### Users
We are expecting users of any age, not with the mandatory to be a basketball fan but only pleasure for nice shoes.



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

The site was tested through the [W3C Markup Validator](https://validator.w3.org/#validate_by_input) for Html and Css.
I had to correct an error in the <header>. Was about a <div> nested in <ul>.

The validator still call as an error some of the classes regarding the map section.

The project still presenting 2 little bugs in the contacs.html page: 
1. in the form, the "Describe your shoes" area has the cursor not align at the top but in the middle
1. the form is not having regular margin-bottom on all screen sizes despite I made lot of tentatives

The site was also tested through different browser (Mozilla Firefox, Google Chrome and Internet Explorer) and different screen sizes
![here](https://raw.githubusercontent.com/OmarBedawi/Jordans/master/documentation/screens.png?raw=true)

## Deployment

The project is hosted on [GitHub Pages](https://github.com/OmarBedawi/Jordans)

The process involved:
- Host a git repository on GitHub. Explained [here](https://help.github.com/en/articles/create-a-repo).
- The root folder contains README.md and index.html files
- On GitHub repository settings page move to GitHub Pages section
- Change source to master branch. (Or any desired branch)
- Provided link will be your projects home (index.html) page.
 
To deploy your own version of the website:
- Have git installed
- Visit the [repository]([GitHub](https://github.com/OmarBedawi/Jordans))
- Click 'Clone or download' and copy the code for http
- Open your chosen IDE (in my case Gitpod)
- Open a terminal in your root directory
- Type 'git clone ' followed by the code taken from github repository
    - ```git clone https://github.com/OmarBedawi/Jordans-ifd-project.git```
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





<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

Welcome OmarBedawi,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project.

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the backend lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here are the updates since the original video was made:

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

--------

Happy coding!





