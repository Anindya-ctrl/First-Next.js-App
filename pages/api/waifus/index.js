import dummyData from "../../../dummyData";

function handler(req, res) {
    return res.status(200).json(dummyData);
}

export default handler;
