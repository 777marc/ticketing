import express from "express";

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('hi marc!');
});

export { router as currentUserRouter };