from fastapi import APIRouter

from app.services.jd_parser import JDParser

router = APIRouter()

parser = JDParser()


@router.get("/jd")
def job_description():
    return parser.parse()