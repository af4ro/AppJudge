# services/appjudgeAPI/project/api/models/Team.py

from sqlalchemy.sql import func
from project import db

class Team(db.Model):
    __tablename__ = 'team'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128), nullable=False)
    info = db.Column(db.String(1280), nullable=False)
    
    def __init__(self, name="", info=""):
        self.name = name
        self.info = info

    # returns the JSON for a Judge class
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'info': self.info,
        }

    # sets the basic info for the Judge
    def set_info(self, name = "", username = "", info = "AppJam+ Team"):
        self.name = name
        self.info = info