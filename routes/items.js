import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

// CREATE
router.post("/", async(req, res) => {
    try {
        const item = await Item.create(req.body);
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ ALL
router.get("/", async(req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE
router.put("/:id", async(req, res) => {
    try {
        const updated = await Item.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE
router.delete("/:id", async(req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;