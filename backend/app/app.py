#import modules
from app.database.models import Skill
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
#import services
from app.services.emailService import send_message
from app.database.db import session
from app.database.models import Education,WorkExperiance
#import Schemas
from app.schemas import EducationSchemas,WorkExperianceSchemas

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

"""
Send Email From Client's side to my email
"""
@app.post("/send-message")
def SendMessage(
    name: str,
    email: str,
    message: str
):
    return send_message(
        name,
        email,
        message
    )


"""
Create CRUD for education and work background
"""
@app.get("/education")
def get_education():
    edu_data = session.query(Education).all()
    session.close()
    return edu_data

@app.get("/work")
def get_work_experiance():
    try:
        works = []
        work_data = session.query(WorkExperiance).all()
        skill_data = []
        for work in work_data:
            for skill in work.skill:
                skill_data.append(skill.title)
            works.append({
                "id": work.id,
                "title": work.title,
                "company": work.company,
                "description": work.description,
                "period": work.period,
                "skill": skill_data
            })
    except Exception as e:
        return {"message": str(e)}
    finally: 
        session.close()
    return works

@app.post("/education")
def add_education(
    edu: EducationSchemas
):
    edu = Education(
        school=edu.school,
        period=edu.period,
        major=edu.major,
        detail=edu.detail
    )
    try:
        session.add(edu)
        session.commit()
        session.refresh(edu)
        return {"message": "Education added successfully"}
    except Exception as e:
        return {"message": str(e)}
    finally:
        session.close()

@app.post("/work")
def add_work_experiance(
    work: WorkExperianceSchemas
):
    works = WorkExperiance(
        title=work.title,
        company=work.company,
        description=work.description,
        period=work.period
    )
    try:
        session.add(works)
        session.commit()
        session.refresh(works)
        return {"message": "Work experiance added successfully"}
    except Exception as e:
        return {"message": str(e)}
    finally:
        session.close()
"""
CRUD for skills
"""
@app.post("/skill")
def add_skill(  
    skill: list[str],
    work_id: int = None,
    edu_id: int = None
):
    try:
        for skill in skill:
            skill = Skill(
                work_id = work_id,
                edu_id = edu_id,
                title = skill
            )
            session.add(skill)
            session.commit()
            session.refresh(skill)
        return {"message": "Skill added successfully"}
    except Exception as e:
        return {"message": str(e)}
    finally:
        session.close()

@app.delete("/skill/{id}")
def delete_skill(id: int):
    try:
        skill = session.query(Skill).filter(Skill.id == id).first()
        session.delete(skill)
        session.commit()
        return {"message": "Skill deleted successfully"}
    except Exception as e:
        return {"message": str(e)}
    finally:
        session.close()


@app.put("/education/{id}")
def update_education(
    id: int,
    school: str,
    period: str,
    major: str,
    detail: str,
    skillLearn: str
):
    edu = session.query(Education).filter(Education.id == id).first()
    edu.school = school
    edu.period = period
    edu.major = major
    edu.detail = detail
    edu.skillLearn = skillLearn
    session.commit()
    return {"message": "Education updated successfully"}

@app.put("/work/{id}")
def update_work_experiance(
    id: int,
    title: str,
    company: str,
    description: str,
    period: str
):
    work = session.query(WorkExperiance).filter(WorkExperiance.id == id).first()
    work.title = title
    work.company = company
    work.description = description
    work.period = period
    session.commit()
    return {"message": "Work experiance updated successfully"}

@app.delete("/education/{id}")
def delete_education(id: int):
    edu = session.query(Education).filter(Education.id == id).first()
    session.delete(edu)
    session.commit()
    return {"message": "Education deleted successfully"}

@app.delete("/work/{id}")
def delete_work_experiance(id: int):
    work = session.query(WorkExperiance).filter(WorkExperiance.id == id).first()
    session.delete(work)
    session.commit()
    return {"message": "Work experiance deleted successfully"}

