var bio = { name: "Rishi Gupta",
            role: "Product Manager",
            contacts: {
              mobile: "321-948-5140",
              email: "rishig@mac.com",
              github: "https://github.com/rishigupta9999",
              location: "Seattle, WA"
            },
            welcome_message: "Welcome to my fancy Javascript resume",
            skills: ["C++", "OpenGL", "iOS", "Ruby"],
            biopic: "rishi.jpg",
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
  ]
};

var work = { "jobs":
    [
        {   employer: "Microsoft",
            title: "Program Manager",
            location: "Redmond, WA",
            dates: "2015 - 2016",
            description:  "- Led Xbox Live developer experience initiatives. These include developer tools and developer education." +
                          "- Drove the development of a developer token service, which allows developer tools to perform enhanced operations on Xbox Live services." +
                          "-- Example scenarios are reading multiplayer session history, resetting achievements, and many others." + 
                          "- Managed development of several new development tools used by AAA 3rd and 1st party game developers." +
                          "-- These tools include trace analysis for recommending more effective calling patterns, managing Xbox Live development accounts, and multiplayer session transaction history." +
                          "- Implemented new documentation pipeline for the Xbox One XDK and Xbox Live SDK." +
                          "-- Allowed all PMs and engineers to easily contribute peer-reviewed content." +
                          "-- Turnaround time for changes went from one day to less than an hour." +
                          "-- Wrote a C# tool to automate CHM file merging and conversion which saved several hours per release."
        },
        {   company: "Neon Games",
            city: "Santa Monica",
            title: "Product Manager",
            years_worked: "2008-2014"
        },
        {   company: "Apple",
            city: "Cupertino",
            title: "Software Engineer",
            years_worked: "2008-2012"
        }
    ]
}

var projects = { "projects":
  [
    {
      "title": "Madden 2006-2008",
      "platforms": [ "Xbox 360", "Playstation 3" ],
      "years_released": "2006-2008"
    },
    {
      "title": "iOS 3 - 7",
      "platforms": [ "iPhone, iPad" ],
      "years_released": "2009-2012"
    },
    {
      "title": "Netflix",
      "platforms": [ "Nintendo Wii U" ],
      "years_released": "2012"
    },
  ]
}

function displayWork()
{
    for (curJob in work.positions)
    {
        $("#workExperience").append(HTMLworkStart);

        var workData = HTMLworkEmployer.replace("%data%", work.positions[curJob].company);
        var workTitle = HTMLworkTitle.replace("%data%", work.positions[curJob].title);

        $(".work-entry:last").append(workData+workTitle)
    }
}

displayWork();

function locationizer(x)
{
    var retArray = new Array;

    for (curWork in x)
    {
        retArray.push(x[curWork].city);
    }

    return retArray;
}

console.log(locationizer(work.positions));


$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#topContacts").append(HTMLemail.replace("%data%", bio.e_mail));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.phone));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.github));

function clickFunc(loc)
{
    logClicks(loc.pageX, loc.pageY)
}

var fooVar = clickFunc;

$(document).click(clickFunc);

function inName(name)
{
    var names = name.split(" ");

    var firstName = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    var lastName = names[1].toUpperCase();

    return firstName + ' ' + lastName;
}

$("#main").append(internationalizeButton)

console.log(inName("rishi Gupta"));

projects.display = function()
{
    $("#projects").append(HTMLprojectStart);

}