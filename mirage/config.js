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
            title: "Add/Subtract Constant From Both Sides",
            count: 11
          }
        }, {
          type: 'skills',
          id: 2,
          attributes: {
            title: "Combine Constant Terms",
            count: 13
          }
        }, {
          type: 'skills',
          id: 3,
          attributes: {
            title: "Divide Both Sides By The Variable Coefficient",
            count: 11
          }
        }, {
          type: 'skills',
          id: 4,
          attributes: {
            title: "Compute Quotient For Constant",
            count: 12
          }
        }, {
          type: 'skills',
          id: 5,
          attributes: {
            title: "Compute Quotient For Variable Coefficient",
            count: 11
          }
        }, {
          type: 'skills',
          id: 6,
          attributes: {
            title: "Multiply Simple Terms",
            count: 8
          }
        }, {
          type: 'skills',
          id: 7,
          attributes: {
            title: "Distribute",
            count: 8
          }
        }, {
          type: 'skills',
          id: 8,
          attributes: {
            title: "Combine Variable Terms",
            count: 7
          }
        }, {
          type: 'skills',
          id: 9,
          attributes: {
            title: "Add/Subtract Variable From Both Sides",
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
            title: "Combine unlike terms to make constant",
            count: 8
          }
        }, {
          type: 'misconceptions',
          id: 2,
          attributes: {
            title: "Combine unlike terms to make variable",
            count: 8
          }
        }, {
          type: 'misconceptions',
          id: 3,
          attributes: {
            title: "Different transformation on both sides",
            count: 2
          }
        }, {
          type: 'misconceptions',
          id: 4,
          attributes: {
            title: "Do transformation on one side only",
            count: 6
          }
        }, {
          type: 'misconceptions',
          id: 5,
          attributes: {
            title: "Substract instead of divide",
            count: 1
          }
        }
      ]
    };
  });
}
