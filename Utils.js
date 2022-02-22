const Logger = (req, res) => {
    console.log("(L)req.body >> ", req.body);
    console.log("(L)query.id >> ", req.query.id)
}

export default Logger