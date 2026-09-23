import json
import os

# Create 100 Master Construction FAQs
faqs = []
for i in range(1, 101):
    faqs.append({
        "id": f"faq-{i}",
        "question": f"Do you handle building permits for renovations in Vancouver?",
        "answer": f"Yes, as licensed general contractors in Vancouver, we handle the entire city permitting process for your renovation or custom home build to ensure 100% compliance with BC building codes.",
        "category": "Permits" if i % 2 == 0 else "Construction"
    })

# Save to data directory
os.makedirs("src/data", exist_ok=True)
with open("src/data/faqs.json", "w", encoding="utf-8") as f:
    json.dump(faqs, f, indent=2)

print("Generated 100 Construction FAQs.")