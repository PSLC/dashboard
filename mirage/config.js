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
            label: "Add/Subtract Constant From Both Sides",
            value: 11
          }
        }, {
          type: 'skills',
          id: 2,
          attributes: {
            label: "Combine Constant Terms",
            value: 13
          }
        }, {
          type: 'skills',
          id: 3,
          attributes: {
            label: "Divide Both Sides By The Variable Coefficient",
            value: 11
          }
        }, {
          type: 'skills',
          id: 4,
          attributes: {
            label: "Compute Quotient For Constant",
            value: 12
          }
        }, {
          type: 'skills',
          id: 5,
          attributes: {
            label: "Compute Quotient For Variable Coefficient",
            value: 11
          }
        }, {
          type: 'skills',
          id: 6,
          attributes: {
            label: "Multiply Simple Terms",
            value: 8
          }
        }, {
          type: 'skills',
          id: 7,
          attributes: {
            label: "Distribute",
            value: 8
          }
        }, {
          type: 'skills',
          id: 8,
          attributes: {
            label: "Combine Variable Terms",
            value: 7
          }
        }, {
          type: 'skills',
          id: 9,
          attributes: {
            label: "Add/Subtract Variable From Both Sides",
            value: 7
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
            label: "Combine unlike terms to make constant",
            value: 8
          }
        }, {
          type: 'misconceptions',
          id: 2,
          attributes: {
            label: "Combine unlike terms to make variable",
            value: 8
          }
        }, {
          type: 'misconceptions',
          id: 3,
          attributes: {
            label: "Different transformation on both sides",
            value: 2
          }
        }, {
          type: 'misconceptions',
          id: 4,
          attributes: {
            label: "Do transformation on one side only",
            value: 6
          }
        }, {
          type: 'misconceptions',
          id: 5,
          attributes: {
            label: "Substract instead of divide",
            value: 1
          }
        }
      ]
    };
  });
}
