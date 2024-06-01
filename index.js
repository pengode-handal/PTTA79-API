const express = require("express");
const app = express();
// const path = require("path");
const utils = require("./utils");

app.get("/api/check", async (req, res) => {
    res.json(await utils.checkItem(req.query.code));
});

// Index website
app.get("/", (req, res) => {
    res.json({
        message: "Swslqmoqt datang",
    });
});

// Menambahkan data kedalam database dengan parameter query site.com/api/add?nama=value&email=value
app.get("/api/add", async (req, res) => {
    try {
        // if (window.frames.top.document.referrer.includes('eventpadz')){res.json(await createData(req.params.nama, req.params.email));}
        res.json(await utils.createData(req.query.nama, req.query.email));
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong: " + error,
        });
    }
});

// Rest API yang digunakan ketika scanning qr membuat status isExp dari unique code menjadi true
app.get("/api/done/konsum", async (req, res) => {
    try {
        let f = await utils.checkItem(req.query.code);
        res.json(
            f.data.isExp
                ? { Error: "Jangan Marukkk" }
                : await utils.updateData("isExpKonsum", req.query.code, true)
        );
    } catch (error) {
        res.status(500).json({
            message: "Error getting " + error,
        });
    }
});
app.get("/api/done/souvenir", async (req, res) => {
    try {
        let f = await utils.checkItem(req.query.code);
        res.json(
            f.data.isExp
                ? { Error: "Jangan Marukkk" }
                : await utils.updateData("isExpSouvenir", req.query.code, true)
        );
    } catch (error) {
        res.status(500).json({
            message: "Error getting " + error,
        });
    }
});

// Rest API yang membuat status isExp dari unique code menjadi false
app.get("/api/undone/konsum", async (req, res) => {
    const code = req.query.code;
    try {
        res.json(await utils.updateData("isExpKonsum", code, false));
    } catch (error) {
        res.status(500).json({
            message: "Error getting: " + error,
        });
    }
});
app.get("/api/undone/souvenir", async (req, res) => {
    const code = req.query.code;
    try {
        res.json(await utils.updateData("isExpSouvenir", code, false));
    } catch (error) {
        res.status(500).json({
            message: "Error getting: " + error,
        });
    }
});

// Menghapus data tertentu berdasrakan unique code
app.get("/api/delete", async (req, res) => {
    const code = req.query.code;
    try {
        res.json(await utils.deleteItem(code));
    } catch (error) {
        res.status(500).json({
            message: "Error getting: " + error,
        });
        return;
    }
});

// Filter berdasarkan kunci properti pengembalikan dalam bentuk array
app.get("/api/filter", async (req, res) => {
    try {
        const emails = await utils.getSelectedItems(req.query.q);
        res.json(emails.map((user) => user[req.query.q]));
    } catch (error) {
        res.status(500).json({
            message: "Error getting: " + error,
        });
        return;
    }
});

// Home landing page REST API yang berisi seluruh list database kakel
app.get("/api/all", async (req, res) => {
    try {
        res.json(await utils.getAllItems());
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong: " + error,
        });
        return;
    }
});

// Menjalankan di port 1337
app.listen(1337);

module.exports = app;
