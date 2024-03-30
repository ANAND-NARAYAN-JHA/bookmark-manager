exports.getHome = async (req, res, next) => {
    try {
        
        // Return the array of books in the response
        res.status(200).json( {"hello":"there"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

