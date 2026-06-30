from fastapi import APIRouter

from app.services.data_loader import DataLoader
from app.services.candidate_parser import CandidateParser

router = APIRouter()

loader = DataLoader()

parser = CandidateParser()


@router.get("/candidate")
def candidate():

    candidates = loader.load_candidates()

    first = parser.parse(candidates[0])

    return first