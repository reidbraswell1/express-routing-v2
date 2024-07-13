import express from "express";
import db from "../mockdb/index.js";

const router = express.Router();


// GET Route
router.get("/:id?", (req, res, next) => {
    try {
        res.render('index');
    } catch (err) {
        next(err);
    }
});

// POST Route
router.post("/", (req, res, next) => {
    try {
        res.render('index');
    } catch (err) {
        next(err);
    }
});

// PUT Route
router.put("/:id?", (req, res, next) => {
    try {
        res.render('index');
    } catch (err) {
        next(err);
    }
});

// DELETE Route
router.get("/:id?", (req, res, next) => {
    try {
        res.render('index');
    } catch (err) {
        next(err);
    }
});

export default router;