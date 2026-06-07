from pydantic import BaseModel

class EducationSchemas(BaseModel):
    school: str
    period: str
    major: str
    detail: str

class WorkExperianceSchemas(BaseModel):
    title: str
    company: str
    description: str
    period: str