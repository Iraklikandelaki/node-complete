exports.getContent = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'HEY'}]
    });
};

exports.createContent = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toISOString() + Math.random(),
            title,
            content,
        }
    })
}