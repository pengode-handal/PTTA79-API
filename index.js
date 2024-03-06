// Initializing express
const express = require("express");
const app = express();
// const path = require("path");
const utils = require("./utils");

// app.use(express.static(path.resolve(__dirname, "..", "client")));

// Testimoni untuk qr scanner dan qr generator
// app.get("/qr", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "..", "client", "index.html"));
// })

// Mengecek keberadaan data sekaligus status expirednya
app.get("/api/check", async (req, res) => {
    res.json(await utils.checkItem(req.query.code))
})

// Index website
app.get("/", (req, res) => {
    res.json({
        message: "Swslqmoqt datang"
    });
})

// Menambahkan data kedalam database dengan parameter query site.com/api/add?nama=value&email=value
app.get("/api/add", async (req, res) => {
    try {
        // if (window.frames.top.document.referrer.includes('eventpadz')){res.json(await createData(req.params.nama, req.params.email));}
        res.json(await utils.createData(req.query.nama, req.query.email));
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong: "+error,
        })
    }
})

// Rest API yang digunakan ketika scanning qr membuat status isExp dari unique code menjadi true
app.get('/api/done', async (req, res) => {
    const code = req.query.code;
    try {
        res.json(await utils.updateData(code, true));
    } catch (error) {
        res.status(500).json({
            message: "Error getting "+error
        })
    }
})

// Rest API yang membuat status isExp dari unique code menjadi false
app.get('/api/undone', async (req, res) => {
    const code = req.query.code;
    try {
        res.json(await utils.updateData(code, false))
    } catch (error) {
        res.status(500).json({
            message: "Error getting: "+error
        })
    }
})

// Menghapus data tertentu berdasrakan unique code
app.get('/api/delete', async (req, res) => {
    const code = req.query.code;
    try {
        res.json(await utils.deleteItem(code));
    } catch (error) {
        res.status(500).json({
            message: "Error getting: "+error
        }); return;
    }
})

// Filter berdasarkan kunci properti pengembalikan dalam bentuk array
app.get('/api/filter', async (req, res) => {
    try {
        const emails = await utils.getSelectedItems(req.query.q)
        res.json(emails.map(user => user[req.query.q]))
    } catch (error) {
        res.status(500).json({
            message: "Error getting: "+error
        }); return;
    }
})

// Home landing page REST API yang berisi seluruh list database kakel
app.get("/api", async (req, res) => {
    try {
        res.json(await utils.getAllItems())
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong: "+error
        }); return;
    }
})

// Menjalankan di port 1337
app.listen(1337);

module.exports = app;
