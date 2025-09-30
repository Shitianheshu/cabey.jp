export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        // Forward to Google Apps Script
        await fetch("https://script.google.com/macros/s/AKfycbyIqsKRANwDwWkZ4e9BzTfFJvstLBmhVw_doFExzf2deS1WycK36F9bj2F7urkSLanivA/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        res.status(200).json({ status: "success" });
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
}
