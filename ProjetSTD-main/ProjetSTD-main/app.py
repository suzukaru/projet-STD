from flask import Flask, render_template, jsonify
from services.arme_service import ArmeService

def create_app():
    app = Flask(__name__)
    arme_service = ArmeService()

    @app.get("/")
    def index():
        return render_template("index.html")

    @app.route("/api/armes")
    def armes():
        armes = arme_service.get_all_armes()
        return jsonify([
        {"id": arme.id, "name": arme.name, "color": arme.color}
        for arme in armes
    ])

    return app

if __name__ == "__main__":
    app = create_app()
    # Accessible sur http://127.0.0.1:5000
    app.run(host="127.0.0.1", port=5000, debug=True)
