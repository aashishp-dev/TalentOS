from fastapi import APIRouter

from app.ranking.ranker import CandidateRanker

router = APIRouter()

ranker = CandidateRanker()


@router.get("/rank")
def rank():

    results = ranker.rank_candidates(10)

    return results