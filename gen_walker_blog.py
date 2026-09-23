import json
import os
import datetime

blog_path = 'src/data/blogs.json'

with open(blog_path, 'r', encoding='utf-8') as f:
    blogs = json.load(f)

new_blog = {
    "id": f"blog-{len(blogs)+1}",
    "slug": "vancouver-basement-renovation-roi-2026",
    "date": datetime.datetime.now().strftime("%B %d, %Y"),
    "translations": {
        "en": {
            "title": "Maximizing ROI on Vancouver Basement Renovations in 2026",
            "excerpt": "Discover how secondary suites and legal basement renovations are yielding massive returns in the Greater Vancouver housing market.",
            "content": "<p>With Vancouver's updated zoning laws, legal basement suites are more profitable than ever...</p>"
        },
        "fr": {
            "title": "Maximiser le retour sur investissement des rénovations de sous-sol à Vancouver",
            "excerpt": "Découvrez comment les suites secondaires génèrent des rendements massifs.",
            "content": "<p>Avec les nouvelles lois de zonage de Vancouver...</p>"
        },
        "es": {
            "title": "Maximizando el ROI en la renovación de sótanos en Vancouver",
            "excerpt": "Descubra cómo las suites secundarias generan retornos masivos.",
            "content": "<p>Con las nuevas leyes de zonificación de Vancouver...</p>"
        },
        "pa": {
            "title": "ਵੈਨਕੂਵਰ ਬੇਸਮੈਂਟ ਮੁਰੰਮਤ 'ਤੇ ROI ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਕਰਨਾ",
            "excerpt": "ਖੋਜ ਕਰੋ ਕਿ ਕਿਵੇਂ ਸੈਕੰਡਰੀ ਸੂਟ ਵੱਡੇ ਰਿਟਰਨ ਦੇ ਰਹੇ ਹਨ।",
            "content": "<p>ਵੈਨਕੂਵਰ ਦੇ ਨਵੇਂ ਜ਼ੋਨਿੰਗ ਕਾਨੂੰਨਾਂ ਨਾਲ...</p>"
        },
        "zh": {
            "title": "2026年温哥华地下室翻新最大化投资回报率",
            "excerpt": "了解二级套房如何带来巨额回报。",
            "content": "<p>随着温哥华新的分区法...</p>"
        }
    }
}

blogs.insert(0, new_blog)

with open(blog_path, 'w', encoding='utf-8') as f:
    json.dump(blogs, f, indent=2, ensure_ascii=False)

print("Walker Blog updated.")
