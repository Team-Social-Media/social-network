export const serverError = (error, req, res) => {
    res.status(500).send({
        error: 500,
        route: req.path,
        query: req.query,
        body: req.body,
        message: typeof (error) === 'string' ? error : `SERVER ERROR: ${error.message}`,
    });
};