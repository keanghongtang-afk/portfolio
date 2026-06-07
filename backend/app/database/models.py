from sqlalchemy import Column, String, Integer, Boolean, create_engine,ForeignKey
from sqlalchemy.orm import declarative_base,relationship


Base = declarative_base()

class  Education(Base):
    __tablename__ = "education"

    id = Column(Integer, primary_key=True)
    school = Column(String)
    period = Column(String)
    major = Column(String)
    detail = Column(String)
    skill = relationship(
        "Skill",back_populates="skill_education"
    )

class WorkExperiance(Base):
    __tablename__ = "work_experiance"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    company = Column(String)
    description = Column(String)
    period = Column(String)
    skill = relationship(
        "Skill",back_populates="skill_work"
    )

class Skill(Base):
    __tablename__ = "skill"

    id = Column(Integer, primary_key=True)
    edu_id = Column(ForeignKey("education.id"))
    work_id = Column(ForeignKey("work_experiance.id"))
    title = Column(String)
    
    skill_education = relationship(
        "Education",back_populates="skill"
    )
    skill_work = relationship(
        "WorkExperiance",back_populates="skill"
    )