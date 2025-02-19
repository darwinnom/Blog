const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public")); // Serve static files like CSS

const blogs = [
    { title: "Poating", date: "February 19, 2025", content: "Hello I'm darwin" },
];

app.get("/", (req, res) => {
    res.render("index", { blogs });
});

app.get("/blog/:id", (req, res) => {
    const blog = blogs[req.params.id];
    if (blog) {
        res.render("blog", { blog });
    } else {
        res.status(404).send("Blog Not Found");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
