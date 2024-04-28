const express = require("express");
const app = express();
// const path = require("path");
const utils = require("./utils");
const sizeOf = require("image-size");
const { createCanvas, registerFont, Image } = require("canvas");
const fontPath = "./fonts/Ruang.ttf";
registerFont(fontPath, { family: "Ruang" });
// app.use(express.static(path.resolve(__dirname, "..", "client")));

// Testimoni untuk qr scanner dan qr generator
// app.get("/qr", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "..", "client", "index.html"));
// })

app.get("/api/font", async (req, res) => {
    // Mengambil teks dan ukuran font dari query URL
    const text = req.query.q;
    const color = req.query.color || "black";
    const size = parseInt(req.query.size);

    if (!text || !size || isNaN(size)) {
        res.status(400).send("Parameter teks atau ukuran font tidak valid");
        return;
    }
    // Membuat canvas
    const canvas = createCanvas(540, 500);
    const ctx = canvas.getContext("2d");
    // Mengatur font
    ctx.font = `${size || 24}px "Ruang"`;

    // Menghapus gambar latar belakang
    const padding = 20;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    const textWidth = ctx.measureText(text).width; // Lebar teks
    const canvasCenterX = canvas.width / 2;
    const textX = canvasCenterX - textWidth / 2; // Posisi X di tengah - setengah lebar teks

    const textHeight = ctx.measureText(text).actualBoundingBoxAscent; // Tinggi teks (perkiraan)
    const canvasCenterY = canvas.height / 2;
    const textY = canvasCenterY - textHeight / 2;
    const maxWidth = canvas.width - padding * 2;
    // ctx.fillText(text, X, Y);
    function wrapText(ctx, text, maxWidth) {
        let words = text.split(" "); // Memisahkan kata-kata
        let line = ""; // Baris teks saat ini
        let y =
            canvasCenterY - ctx.measureText(text).actualBoundingBoxAscent / 2; // Posisi Y awal
        let x = padding; // Posisi X awal (dengan padding)

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const lineWidth = ctx.measureText(line + word).width; // Lebar baris saat ini

            // Memeriksa apakah kata berikutnya akan melebihi lebar maksimum
            if (lineWidth > maxWidth) {
                // Menulis baris saat ini
                ctx.fillText(line, x, y); // Menulis di tengah (dengan padding)
                y += ctx.measureText(word).actualBoundingBoxAscent; // Pindah ke baris baru
                x = padding; // Reset posisi X ke awal baris
                line = word; // Memulai baris baru dengan kata saat ini
            } else {
                line += " " + word; // Menambahkan kata ke baris saat ini
            }
        }

        // Menulis baris terakhir
        ctx.fillText(
            line,
            (maxWidth - ctx.measureText(line).width) / 2 + padding,
            y
        );
    }

    // Menulis teks dengan pembungkusan
    wrapText(ctx, text, maxWidth);
    const imageData = canvas.toDataURL("image/png");

    const imageBuffer = Buffer.from(imageData.split(",")[1], "base64");

    res.contentType("image/png");
    res.send(imageBuffer);
});

const menipulatingImages = (
    image,
    size = 24,
    text = "Default",
    width = 0,
    height = 0,
    color = "black",
    textAlign = "center",
    baseLine = "middle"
) => {
    const dimensions = sizeOf(image);
    if (width == "center") {
        width = dimensions.width / 2;
    }
    const canvas = createCanvas(dimensions.width, dimensions.height);
    const ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = image;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.textAlign = textAlign;
    ctx.textBaseline = baseLine;

    ctx.font = `${size}px "Ruang"`;
    ctx.fillText(text, width, height);

    const imageData = canvas.toDataURL("image/png");

    const imageBuffer = Buffer.from(imageData.split(",")[1], "base64");
    return imageBuffer;
};

app.get("/api/images/nadeshiko", async function (req, res) {
    const {
        q: text,
        color = "white",
        size = 24,
        w: width = 50,
        h: height = 50,
    } = req.query;
    if (!text || !size || isNaN(size)) {
        res.status(400).json({
            error: "Parameter teks atau ukuran font tidak valid",
        });
        return;
    }
    res.contentType("image/png");
    res.send(
        menipulatingImages(
            "./images/nadeshiko.jpg",
            size,
            text,
            width,
            height,
            color.replace("=", "#")
        )
    );
});

app.get("/api/images/paper", async function (req, res) {
    const {
        q: text,
        color = "black",
        size = 24,
        w: width = 154,
        h: height = 355,
    } = req.query;
    if (!text || !size || isNaN(size)) {
        res.status(400).json({
            error: "Parameter teks atau ukuran font tidak valid",
        });
        return;
    }
    res.contentType("image/png");
    res.send(
        menipulatingImages(
            "./images/paper.jpg",
            size,
            text,
            width,
            height,
            color
        )
    );
});

app.get("/api/images/chizuru", async function (req, res) {
    const {
        q: text,
        color = "black",
        size = 24,
        w: width = 366,
        h: height = 600,
        align = "center",
        baseline = "middle",
    } = req.query;
    if (!text || !size || isNaN(size)) {
        res.status(400).json({
            error: "Parameter teks atau ukuran font tidak valid",
        });
        return;
    }
    res.contentType("image/png");
    res.send(
        menipulatingImages(
            "./images/kyaaa.jpg",
            size,
            text,
            width,
            height,
            color.replace("=", "#"),
            align,
            baseline
        )
    );
});

app.get("/api/images/nyot", async function (req, res) {
    const {
        q: text,
        color = "#fff",
        size = 24,
        w: width = 285,
        h: height = 510,
        align = "center",
        baseline = "middle",
    } = req.query;
    if (!text || !size || isNaN(size)) {
        res.status(400).json({
            error: "Parameter teks atau ukuran font tidak valid",
        });
        return;
    }
    res.contentType("image/png");
    res.send(
        menipulatingImages(
            "./images/ahh.jpg",
            size,
            text,
            width,
            height,
            color.replace("=", "#"),
            align,
            baseline
        )
    );
});

app.get("/api/images/rikka", async function (req, res) {
    const {
        q: text,
        color = "black",
        size = 24,
        w: width,
        h: height = 610,
        align = "center",
        baseline = "middle",
    } = req.query;
    if (!text || !size || isNaN(size)) {
        res.status(400).json({
            error: "Parameter teks atau ukuran font tidak valid",
        });
        return;
    }
    res.contentType("image/png");
    res.send(
        menipulatingImages(
            "./images/rikka.png",
            size,
            text,
            width,
            height,
            color.replace("=", "#"),
            align,
            baseline
        )
    );
});

// Mengecek keberadaan data sekaligus status expirednya
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
app.get("/api/done", async (req, res) => {
    const code = req.query.code;
    try {
        res.json(await utils.updateData(code, true));
    } catch (error) {
        res.status(500).json({
            message: "Error getting " + error,
        });
    }
});

// Rest API yang membuat status isExp dari unique code menjadi false
app.get("/api/undone", async (req, res) => {
    const code = req.query.code;
    try {
        res.json(await utils.updateData(code, false));
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
