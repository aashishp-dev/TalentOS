from fastapi import APIRouter

from app.services.submission_generator import SubmissionGenerator

router = APIRouter()

generator = SubmissionGenerator()


@router.get("/submit")
def submit():

    return generator.generate_submission()