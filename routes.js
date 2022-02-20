const controller = require('./controllers');

const addBlogValidation = {
    body: {
        type: 'object',
        required: [
            'studentID'
        ],
        properties: {
            studentID: { type: 'integer' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                studentID: { type: 'integer' },
                studentName: { type: 'string' }
            }
        }
    }
}

const routes = [
    {
        method: 'GET',
        url: '/report',
        handler: controller.getReports
    },
    {
        method: 'POST',
        url: '/add',
        schema: addBlogValidation,
        handler: controller.addReport
    },
    {
        method: 'POST',
        url: '/update',
        handler: controller.updateReport
    },
    {
        method: 'DELETE',
        url: '/delete',
        handler: controller.deleteReport
    }
];

module.exports = routes;