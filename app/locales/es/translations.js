export default {
  // "some.translation.key": "Text for some.translation.key",
  //
  // "a": {
  //   "nested": {
  //     "key": "Text for a.nested.key"
  //   }
  // },
  //
  // "key.with.interpolation": "Text with {{anInterpolation}}"
  "navbar" : {
    "brand" : "STC",
    "home" : "Home",
    "student": "Student",
    "teacher" : "Teacher",
    "course" : "Course"
  },

    "student" : {
        "index" : {
          "heading" : "List of All Students"
        },
        "buttons" : {
          "create" : "Create New Student",
        }
    },

    "teacher" : {
        "index" : {
            "heading" : "List of All Teachers"
        },
        "buttons" : {
            "create" : "Create New Teacher",
        }
    },

    "course" : {
        "index" : {
            "heading" : "List of All Courses"
        },
        "buttons" : {
            "create" : "Create New Course",
        }
    },

    a : {
        edit : "Edit",
        delete : "Delete"
    },

    delete : {
      confirm : {
          name : "Yes, Delete it",
          title : "Confirm Delete Operation",
          message : "You are about to delete {{object}} with ID: {{id}}. Are you sure?",
          type : "default",
      },
      cancel : {
          name : "Cancel the Operation",
          type : "info",
      }
    },

    create : {
      button : {
          name : "Create {{object}}"
      }
    },

    edit : {
      button : {
          name : "Edit {{object}}"
      }
    }
};
