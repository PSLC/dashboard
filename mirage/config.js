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

  this.get('/skill-masteries', function() {
    return {
      data: [
        {
          type: 'skill-masteries',
          id: 1,
          attributes: {
            name: "Add/Subtract Constant From Both Sides",
            count: 11
          }
        }, {
          type: 'skill-masteries',
          id: 2,
          attributes: {
            name: "Combine Constant Terms",
            count: 13
          }
        }, {
          type: 'skill-masteries',
          id: 3,
          attributes: {
            name: "Divide Both Sides By The Variable Coefficient",
            count: 11
          }
        }, {
          type: 'skill-masteries',
          id: 4,
          attributes: {
            name: "Compute Quotient For Constant",
            count: 12
          }
        }, {
          type: 'skill-masteries',
          id: 5,
          attributes: {
            name: "Compute Quotient For Variable Coefficient",
            count: 11
          }
        }, {
          type: 'skill-masteries',
          id: 6,
          attributes: {
            name: "Multiply Simple Terms",
            count: 8
          }
        }, {
          type: 'skill-masteries',
          id: 7,
          attributes: {
            name: "Distribute",
            count: 8
          }
        }, {
          type: 'skill-masteries',
          id: 8,
          attributes: {
            name: "Combine Variable Terms",
            count: 7
          }
        }, {
          type: 'skill-masteries',
          id: 9,
          attributes: {
            name: "Add/Subtract Variable From Both Sides",
            count: 7
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
