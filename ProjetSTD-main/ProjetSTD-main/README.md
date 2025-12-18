# Prototype Flask (local)

## Prérequis
- Python 3.10+ (idéalement)

## Lancer en local
```bash
cd back
python -m venv .venv
# Windows: .venv\Scripts\activate
source .venv/bin/activate

pip install -r requirements.txt
python serveurFlask.py
```

Puis ouvrir: http://127.0.0.1:5000

## Structure
- `back/templates/index.html` : page principale
- `back/static/css/style.css` : styles
- `back/static/js/*.js` : scripts (données + logique)
