export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:
    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */

  this.get('/skills', function() {
    return {
      data: [
        {
          type: 'skills',
          id: 1,
          attributes: {
            name: "Add/Subtract Constant From Both Sides"
          }
        }, {
          type: 'skills',
          id: 2,
          attributes: {
            name: "Combine Constant Terms",
          }
        }, {
          type: 'skills',
          id: 3,
          attributes: {
            name: "Divide Both Sides By The Variable Coefficient"
          }
        }, {
          type: 'skills',
          id: 4,
          attributes: {
            name: "Compute Quotient For Constant"
          }
        }, {
          type: 'skills',
          id: 5,
          attributes: {
            name: "Compute Quotient For Variable Coefficient"
          }
        }, {
          type: 'skills',
          id: 6,
          attributes: {
            name: "Multiply Simple Terms"
          }
        }, {
          type: 'skills',
          id: 7,
          attributes: {
            name: "Distribute"
          }
        }, {
          type: 'skills',
          id: 8,
          attributes: {
            name: "Combine Variable Terms"
          }
        }, {
          type: 'skills',
          id: 9,
          attributes: {
            name: "Add/Subtract Variable From Both Sides"
          }
        }
      ]
    };
  });

  this.get('/students', function() {
    return {
      data: [
        {
          type: 'students',
          id: 1,
          attributes: {
            name: "Adeline Sweet"
          }
        }, {
          type: 'students',
          id: 2,
          attributes: {
            name: "Austin Smith",
          }
        }, {
          type: 'students',
          id: 3,
          attributes: {
            name: "Christina Day"
          }
        }, {
          type: 'students',
          id: 4,
          attributes: {
            name: "Faith Aller"
          }
        }, {
          type: 'students',
          id: 5,
          attributes: {
            name: "Gaven Moore"
          }
        }, {
          type: 'students',
          id: 6,
          attributes: {
            name: "Haley Barkovich"
          }
        }, {
          type: 'students',
          id: 7,
          attributes: {
            name: "Kai Swan"
          }
        }, {
          type: 'students',
          id: 8,
          attributes: {
            name: "Landin Pillar"
          }
        }, {
          type: 'students',
          id: 9,
          attributes: {
            name: "Leah Driscoll"
          }
        }
      ]
    };
  });

  this.get('/skill-masteries', function() {
    return {
      data: [
        {
          type: 'skill-masteries',
          id: 1,
          attributes: {
            "student-id": 1,
            "skill-id": 2,
            percentage: 0.98,
            opportunity: 15
          }
        },{
          type: 'skill-masteries',
          id: 91,
          attributes: {
            "student-id": 1,
            "skill-id": 3,
            percentage: 0.98,
            opportunity: 15
          }
        },{
          type: 'skill-masteries',
          id: 92,
          attributes: {
            "student-id": 1,
            "skill-id": 4,
            percentage: 0.98,
            opportunity: 15
          }
        },{
          type: 'skill-masteries',
          id: 93,
          attributes: {
            "student-id": 1,
            "skill-id": 6,
            percentage: 0.98,
            opportunity: 15
          }
        }, {
          type: 'skill-masteries',
          id: 2,
          attributes: {
            "student-id": 1,
            "skill-id": 3,
            percentage: 0.75,
            opportunity: 15
          }
        }, {
          type: 'skill-masteries',
          id: 3,
          attributes: {
            "student-id": 2,
            "skill-id": 1,
            percentage: 0.40,
            opportunity: 3
          }
        }, {
          type: 'skill-masteries',
          id: 4,
          attributes: {
            "student-id": 2,
            "skill-id": 2,
            percentage: 0.97,
            opportunity: 20
          }
        }, {
          type: 'skill-masteries',
          id: 5,
          attributes: {
            "student-id": 2,
            "skill-id": 3,
            percentage: 0.92,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 6,
          attributes: {
            "student-id": 2,
            "skill-id": 4,
            percentage: 0.98,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 7,
          attributes: {
            "student-id": 3,
            "skill-id": 7,
            percentage: 0.92,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 8,
          attributes: {
            "student-id": 5,
            "skill-id": 8,
            percentage: 0.92,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 9,
          attributes: {
            "student-id": 7,
            "skill-id": 4,
            percentage: 0.98,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 10,
          attributes: {
            "student-id": 2,
            "skill-id": 8,
            percentage: 0.92,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 11,
          attributes: {
            "student-id": 3,
            "skill-id": 2,
            percentage: 0.98,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 12,
          attributes: {
            "student-id": 5,
            "skill-id": 1,
            percentage: 0.92,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 13,
          attributes: {
            "student-id": 7,
            "skill-id": 4,
            percentage: 0.98,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 14,
          attributes: {
            "student-id": 2,
            "skill-id": 4,
            percentage: 0.92,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 15,
          attributes: {
            "student-id": 3,
            "skill-id": 5,
            percentage: 0.92,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 16,
          attributes: {
            "student-id": 6,
            "skill-id": 5,
            percentage: 0.98,
            opportunity: 12
          }
        }, {
          type: 'skill-masteries',
          id: 17,
          attributes: {
            "student-id": 7,
            "skill-id": 2,
            percentage: 0.20,
            opportunity: 3
          }
        }, {
          type: 'skill-masteries',
          id: 19,
          attributes: {
            "student-id": 8,
            "skill-id": 9,
            percentage: 0.98,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 20,
          attributes: {
            "student-id": 8,
            "skill-id": 8,
            percentage: 0.98,
            opportunity: 12
          }
        }, {
          type: 'skill-masteries',
          id: 21,
          attributes: {
            "student-id": 8,
            "skill-id": 7,
            percentage: 0.20,
            opportunity: 13
          }
        }, {
          type: 'skill-masteries',
          id: 55,
          attributes: {
            "student-id": 9,
            "skill-id": 1,
            percentage: 0.98,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 56,
          attributes: {
            "student-id": 9,
            "skill-id": 3,
            percentage: 0.98,
            opportunity: 12
          }
        }, {
          type: 'skill-masteries',
          id: 57,
          attributes: {
            "student-id": 9,
            "skill-id": 7,
            percentage: 0.98,
            opportunity: 30
          }
        }, {
          type: 'skill-masteries',
          id: 65,
          attributes: {
            "student-id": 7,
            "skill-id": 5,
            percentage: 0.98,
            opportunity: 10
          }
        }, {
          type: 'skill-masteries',
          id: 66,
          attributes: {
            "student-id": 8,
            "skill-id": 5,
            percentage: 0.98,
            opportunity: 12
          }
        }, {
          type: 'skill-masteries',
          id: 67,
          attributes: {
            "student-id": 9,
            "skill-id": 5,
            percentage: 0.98,
            opportunity: 3
          }
        }, {
          type: 'skill-masteries',
          id: 68,
          attributes: {
            "student-id": 4,
            "skill-id": 5,
            percentage: 0.98,
            opportunity: 13
          }
        }, {
          type: 'skill-masteries',
          id: 48,
          attributes: {
            "student-id": 6,
            "skill-id": 7,
            percentage: 0.98,
            opportunity: 13
          }
        }
      ]
    };
  });


  this.get('/misconceptions', function() {
    return {
      data: [
        {
          type: 'misconceptions',
          id: 1,
          attributes: {
            name: "Combine unlike terms to make constant",
            count: 8
          }
        }, {
          type: 'misconceptions',
          id: 2,
          attributes: {
            name: "Combine unlike terms to make variable",
            count: 8
          }
        }, {
          type: 'misconceptions',
          id: 3,
          attributes: {
            name: "Different transformation on both sides",
            count: 2
          }
        }, {
          type: 'misconceptions',
          id: 4,
          attributes: {
            name: "Do transformation on one side only",
            count: 6
          }
        }, {
          type: 'misconceptions',
          id: 5,
          attributes: {
            name: "Substract instead of divide",
            count: 1
          }
        }
      ]
    };
  });
}
