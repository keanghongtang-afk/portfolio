from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.database.models import Base

engine = create_engine("sqlite:///./app/database/portfolio.db")

Base.metadata.create_all(bind=engine)

Session = sessionmaker(bind=engine)
session = Session()