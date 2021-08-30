import dummyData from "../../../dummyData";

function handler(req, res) {
    const { id } = req.query;

    if(id > dummyData.length) return res.status(200).json({ error: 'Invalid id provided.' });

    return res.status(200).json(dummyData[id - 1]);
}

export default handler;
