from dao.arme_dao import ArmeDAO

class ArmeService:

    def __init__(self):
        self.arme_dao = ArmeDAO()

    def get_all_armes(self):
        return self.arme_dao.get_all()