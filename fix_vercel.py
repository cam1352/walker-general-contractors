import json
data = {
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
with open("vercel.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)