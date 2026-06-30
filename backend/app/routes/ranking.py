from fastapi import APIRouter

from app.ranking.ranker import CandidateRanker

router = APIRouter()

ranker = CandidateRanker()


@router.get("/rank")
def rank():

    results = ranker.rank_candidates()

    avg_score = (
        round(
            sum(c["score"] for c in results) / len(results),
            2,
        )
        if results
        else 0
    )

    return {
        "summary": {
            "total_candidates": len(results),
            "average_score": avg_score,
            "top_score": max(
                (c["score"] for c in results),
                default=0,
            ),
        },
        "candidates": results,
    }