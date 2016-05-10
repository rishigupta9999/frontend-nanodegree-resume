var bio = { name: "Rishi Gupta",
            role: "Product Manager",
            contacts: {
              mobile: "321-948-5140",
              email: "rishig@mac.com",
              github: "https://github.com/rishigupta9999",
              location: "Seattle, WA"
            },
            welcome_message: "Welcome to my resume",
            skills: ["C++", "OpenGL", "iOS", "Ruby on Rails"],
            biopic: "images/rishi.jpg",
            display: function() {
              $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
              $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

              $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
              $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
              $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
              $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

              $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
              $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message));

              $("#header").append(HTMLskillsStart);

              for(curSkill in bio.skills)
              {
                $("#header").append(HTMLskills.replace("%data%", bio.skills[curSkill]));
              }
            },

            displayFooter: function() {
              $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
              $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
              $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
              $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

            }
          };


var education = { "schools":
  [
    {
      "name": "University of Toronto",
      "location": "Toronto, Ontario, Canada",
      "degree": "BaSC",
      "majors": ["Computer Engineering", "Engineering Science"],
      "dates": "1998-2003",
      "url": "http://engsci.utoronto.ca/"
    }
  ],
  "onlineCourses":
  [
    {
      "title": "Front-end Developer Course",
      "school": "Udacity",
      "date": "2016",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Ruby on Rails Course",
      "school": "Lynda",
      "date": "2016",
      "url": "http://www.lynda.com"
    }
  ],
  display: function()
  {
      for (curSchool in education.schools)
      {
        $("#education").append(HTMLschoolStart);

        schoolName = HTMLschoolName.replace("%data%", education.schools[curSchool].name);
        schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[curSchool].degree);

        $(".education-entry:last").append(schoolName + schoolDegree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[curSchool].dates));
        $(".education-entry:last").append(HTMLworkLocation.replace("%data%", education.schools[curSchool].location));

        for (curMajor in education.schools[curSchool].majors)
        {
          $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[curSchool].majors[curMajor]));
        }
      }

      $("#education").append(HTMLonlineClasses);

      for (curCourse in education.onlineCourses)
      {
        $("#education").append(HTMLschoolStart);

        schoolName = HTMLonlineTitle.replace("%data%", education.onlineCourses[curCourse].title);
        schoolDegree = HTMLonlineSchool.replace("%data%", education.onlineCourses[curCourse].school);

        $(".education-entry:last").append(schoolName + schoolDegree);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[curCourse].date));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[curCourse].url));
      }
  }
};

var work = { "jobs":
    [
        {   employer: "Microsoft",
            title: "Program Manager",
            location: "Redmond, WA",
            dates: "2015 - 2016",
            description:  "- Led Xbox Live developer experience initiatives. These include developer tools and developer education." +
                          "- Drove the development of a developer token service, which allows developer tools to perform enhanced operations on Xbox Live services." +
                          "- Example scenarios are reading multiplayer session history, resetting achievements, and many others." + 
                          "- Managed development of several new development tools used by AAA 3rd and 1st party game developers." +
                          "- These tools include trace analysis for recommending more effective calling patterns, managing Xbox Live development accounts, and multiplayer session transaction history." +
                          "- Implemented new documentation pipeline for the Xbox One XDK and Xbox Live SDK." +
                          "- Allowed all PMs and engineers to easily contribute peer-reviewed content." +
                          "- Turnaround time for changes went from one day to less than an hour." +
                          "- Wrote a C# tool to automate CHM file merging and conversion which saved several hours per release."
        },
        {   employer: "Neon Games",
            title: "Cofounder and Product Manager",
            location: "Santa Monica, CA",
            dates: "2008-2014",
            description:  "- Designed and managed development for four iOS titles end-to-end from conception to submission." +
                          "- Expert in using product usage data to optimize product features. For example, built feature pipeline to optimize KPIs such as short session length, D7/D30 retention, LTV/RPU, segmentation and cohort analysis." +
                          "- Led UX testing and interviews using mock ad campaigns, landing page analysis, empathy interviews." +
                          "- Designed and developed in-house A/B testing client side system, which interfaced with analytics and database APIs." +
                          "- Managed and hired team of artists, using A/B testing to optimize game asset creation." +
                          "- Worked closely with highly technical engineering team to deliver on aggressive deadlines." +
                          "- Primary developer behind custom iOS OpenGL ES-based game engine, used in all Neon Games’ titles.  Developed 3D model & animation pipeline, as well as a text generation pipeline with localization, 3D effects." +
                          "- Multithreaded / multi-core optimizations to improve load times and frame rates."
        },
        {   employer: "Apple",
            title: "Software Engineer",
            location: "Cupertino, CA",
            dates: "2008-2012",
            description: "- GPU bringup for Imagination SGX543 (mid-range iOS devices) and RGX (recent iOS devices)" +
                         "- Fixed bugs in shader compilation, vertex command stream setup issues, and other areas." +
                         "- Implemented Render to Float, Mipmaps, Cubemaps, Volume Textures, Texture Arrays, Compressed Textures at driver level. This work involved the kernel level IOKit framework." +
                         "- Development on “offline” GPU simulation tool for capture and playback of the GPU command stream." +
                         "- Work for WWDC – Apple’s annual trade show." +
                         "- Decided which GPU features would have the highest ROI for Apple to show to developers, and prepared demos to showcase them. Demos included HDR rendering, stencil shadows and refraction / diffraction using OpenGL ES 2 shaders." +
                         "- Educated 3rd party developers to ensure their games properly used Apple technologies."
        }
    ],
    display: function() {
      for (curJob in work.jobs)
      {
          $("#workExperience").append(HTMLworkStart);

          var workData = HTMLworkEmployer.replace("%data%", work.jobs[curJob].employer);
          var workTitle = HTMLworkTitle.replace("%data%", work.jobs[curJob].title);

          $(".work-entry:last").append(workData+workTitle);
          $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[curJob].dates));
          $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[curJob].location));

          descriptionString = work.jobs[curJob].description.replace(/- /g, "<li>");

          $(".work-entry:last").append(HTMLworkDescription.replace("%data%", "<ul>" + descriptionString + "</ul>"));
      }
    }
}

var projects = { "projects":
  [
    {
      "title": "Xbox Live",
      "dates": "2015-2016",
      "description": "The online gaming services for Xbox One and Windows 10",
      "images": ["xboxlive.png", "halo5.jpg", "gta5.jpg"]
    },
    {
      "title": "Pizza Rush",
      "dates": "2014",
      "description": "Get cool gadgets and make pizzas",
      "images": ["pizza_rush.jpg", "pizza_rush2.jpg", "pizza_rush3.jpg"]
    },
    {
      "title": "iOS",
      "dates": "2009-2012",
      "description": "Operating system which runs on iPhone, iPad, and Apple TV",
      "images": ["ios.png"]
    },
  ],
  display: function() {
    for (curProject in projects.projects)
    {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[curProject].title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[curProject].dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[curProject].description));

      for (curImage in projects.projects[curProject].images)
      {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", "images/" + projects.projects[curProject].images[curImage]));
      }
    }
  }
}

bio.display();
bio.displayFooter();

work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
