/*
This is resumeBuilder.js it contains all the objects that require
for build resume with other functions and code.

You can call it building block of resume :)

Author: Ravindra Barthwal
Github: https://www.github.com/ravindrabarthwal
*/


/*
--------------------------------------------------------------------

Bio Object: This is a basic object that contains my details and
contacts

--------------------------------------------------------------------
*/

var bio = {
  name: 'Ravindra Barthwal',
  role: 'Front-End, Back-End Programmer & Growth Hacker',

  contacts: {
    mobile: '(+91) 817-122-9088',
    email: 'rtechshow@gmail.com',
    github: 'www.github.com/ravindrabarthwal',
    location: 'Meerut, India'
  },

  welcomeMessage: 'I love to code',
  skills: ['HTML','CSS','JAVASCRIPT','Angular JS','PHP','WordPress','SEO & Growth Hacking'],
  biopic: 'http://ravindrabarthwal.github.io/portfolio/images/ravindra.jpg',

  display: function(){

          /*
      --------------------------------------------------------------------

      Adding these object details to index.html by replacing helper
      functions from helper.js using jQuery.

      --------------------------------------------------------------------
      */

      //Adding Name and Role to the index.html
      var HeaderName = HTMLheaderName.replace('%data%',this.name);
      var HeaderRole = HTMLheaderRole.replace('%data%',this.role);
      $('#header').prepend(HeaderName + HeaderRole);



      //Creating Contact details
      var HTMLmobile = HTMLcontactGeneric.replace('%contact%','mobile').replace('%data%',this.contacts.mobile);
      var HTMLemail = HTMLcontactGeneric.replace('%contact%','email').replace('%data%',this.contacts.email);
      var HTMLgithub = HTMLcontactGeneric.replace('%contact%','github').replace('%data%',this.contacts.github);
      var HTMLlocation = HTMLcontactGeneric.replace('%contact%','location').replace('%data%',this.contacts.location);
      // Adding Details to the page
      $('#topContacts').append(HTMLmobile + HTMLemail + HTMLgithub + HTMLlocation);
      $('#footerContacts').append(HTMLmobile + HTMLemail + HTMLgithub + HTMLlocation);



      //Change BioPic and WelCome Message
      var HTMLbioimg = HTMLbioPic.replace('%data%',this.biopic);
      var HTMLwelcome = HTMLwelcomeMsg.replace('%data%',this.welcomeMessage);
      var HTMLskillsStartMsg = HTMLskillsStart.replace('%data%',this.welcomeMessage);
      //Adding biopic and welcome msg
      $('#header').append(HTMLbioimg + HTMLwelcome + HTMLskillsStartMsg);


      //Iterate over skills array and append to the page
      for(var i = 0; i < this.skills.length; i++){
        $('#skills').append(HTMLskills.replace('%data%',this.skills[i]));
      }
      //Closing the Display Function.
  }
}


  /*
--------------------------------------------------------------------

Education Object: This objects hold information regarding to my
education.

--------------------------------------------------------------------
*/

var education = {
  schools : [
    {
      name: 'DAV Centenary Public School',
      location: 'Meerut, India',
      degree: 'Higher Secondary (+2)',
      majors: ['Physics', 'Chemistry', 'Maths', 'C.S'],
      dates: 'March 2016',
      url: 'http://www.davmeerut.org'
    }
  ],

  onlineCourses: [
    {
      title: 'FrontEnd Developer Nanodegree',
      school: 'Udacity',
      date: 'March 2016',
      url: 'https://www.udacity.com/degrees/front-end-web-developer-nanodegree--nd001'
    },

    {
      title: 'Web Devlopment',
      school: 'Pluralsight',
      date: 'March 2016',
      url: 'https://pluralsight.com'
    },

    {
      title: 'Growth Hacking & SEO',
      school: 'Udemy',
      date: 'December 2015',
      url: 'https://www.udemy.com/seo-ultimate-guide'
    },

    {
      title: 'Web Devlopment',
      school: 'TreeHouse',
      date: 'August 2015',
      url: 'https://teamtreehouse.com/ravindrabarthwal'
    },

    {
      title: 'Laravel',
      school: 'Laracasts.com',
      date: 'April 2015',
      url: 'https://laracasts.com'
    }
    ],

    display: function(){

             /*
            --------------------------------------------------------------------

            Adding Education section

            --------------------------------------------------------------------
            */

            $('#education').append(HTMLschoolStart);

            //Itterating over school array
            for (var i = 0; i < this.schools.length; i++) {

              var schoolName = HTMLschoolName.replace('%data%',this.schools[i].name).replace('%url%',this.schools[i].url);

              var schoolDegree = HTMLschoolDegree.replace('%data%',this.schools[i].degree);

              var schoolDates = HTMLschoolDates.replace('%data%',this.schools[i].dates);

              var schoolLocation = HTMLschoolLocation.replace('%data%',this.schools[i].location);

              //Adding these details to the Page
              $('.education-entry').append(schoolName + schoolDegree + schoolDates + schoolLocation);

              //Iterating Over Major Collection and adding on the page

              for (var j = 0; j < this.schools[i].majors.length; j++) {
                //Adding Majors to the this school
                $('.education-entry').append(HTMLschoolMajor.replace('%data%',this.schools[i].majors[j]));
              }
            }


            /*
            --------------------------------------------------------------------

            Adding Online Course Details

            --------------------------------------------------------------------
            */
            //Adding Onlince Classes Heading
            $('.education-entry').append(HTMLonlineClasses);

            for (var i = 0; i < this.onlineCourses.length; i++) {
              var onlineTitle = HTMLonlineTitle.replace('%data%',this.onlineCourses[i].title).replace('%url%',this.onlineCourses[i].url);

              var onlineSchool = HTMLonlineSchool.replace('%data%',this.onlineCourses[i].school);

              var onlineDates = HTMLonlineDates.replace('%data%',this.onlineCourses[i].date);

              var onlineURL = HTMLonlineURL.replace('%data%',this.onlineCourses[i].url).replace('%url%',this.onlineCourses[i].url);

              $('.education-entry').append(onlineTitle + onlineSchool + onlineDates + onlineURL);
            }
            //Closing Display Function below
    }
}


  /*
--------------------------------------------------------------------

Work Object: This objects hold information regarding to my
work experience.

--------------------------------------------------------------------
*/

var work = {
  jobs: [
    {
      employer: 'RTechShow',
      title: 'Content Writer and WordPress Manager',
      location: 'Meerut, India',
      dates: 'June 2014  -  Jan 2015',
      description: 'I was a technical expert and content writer at RTechShow (my own website). I used to write articles of tech news and programming.'
    }
  ],
  display: function(){
            /*
        --------------------------------------------------------------------

        Adding work Experience section

        --------------------------------------------------------------------
        */


        //Adding work experience div
        $('#workExperience').append(HTMLworkStart);
        //Iterating over the array of jobs
        for (var i = 0; i < this.jobs.length; i++) {
          var Workemployer = HTMLworkEmployer.replace('%data%',this.jobs[i].employer);
          var WorkTitle = HTMLworkTitle.replace('%data%',this.jobs[i].title);
          var WorkDates = HTMLworkDates.replace('%data%',this.jobs[i].dates);
          var WorkLocation = HTMLworkLocation.replace('%data%',this.jobs[i].location);
          var WorkDescription = HTMLworkDescription.replace('%data%',this.jobs[i].description);


          //Adding data to the new added div on workExperience
          $('.work-entry').append(Workemployer + WorkTitle + WorkDates + WorkLocation + WorkDescription);
        }
      //Closing Work Exp Function.
  }
}


/*
--------------------------------------------------------------------

Project Object: This objects hold information regarding to project i
made.

--------------------------------------------------------------------
*/

var projects = {
  projects: [
    {
      title: 'Project 1',
      dates: '2016',
      description: 'Lorem ipsum dolor sit amet, qui cu dicant suscipit. Brute antiopam ne nam, aliquip eruditi duo ad. Omnis malis cu eum. Nobis eleifend mediocritatem sed at, ea quo tempor salutandi dissentias, errem molestie argumentum mei et.',
      images: ['images/app.jpg']
    }
  ],
  display: function(){
                /*
          --------------------------------------------------------------------

          Adding Project Section

          --------------------------------------------------------------------
          */

          //Adding Project div
          $('#projects').append(HTMLprojectStart);

          //Iterating over projects array
          for (var i = 0; i < this.projects.length; i++) {
            var projectTitle = HTMLprojectTitle.replace('%data%',this.projects[i].title);

            var projectDates = HTMLprojectDates.replace('%data%',this.projects[i].dates);

            var projectDescription = HTMLprojectDescription.replace('%data%',this.projects[i].description);

            //Adding project Titl Dates and Description to the page
            $('.project-entry').append(projectTitle + projectDates + projectDescription);

            //Iterating over the images array inside a particular project
            for(var j = 0; j < this.projects[i].images.length; j++){
              var projectImg = HTMLprojectImage.replace('%data%',this.projects[i].images[j]);

              //Adding images to the current project
              $('.project-entry').append(projectImg);
            }

          }
    //Closing Display Function below
  }
}

bio.display();
work.display();
projects.display();
education.display();





/*
--------------------------------------------------------------------

Adding Map

--------------------------------------------------------------------
*/
//Adding Google Map Div
$('#mapDiv').append(googleMap);