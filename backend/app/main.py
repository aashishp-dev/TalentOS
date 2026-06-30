from fastapi import FastAPI

from app.routes.test import router as test_router
from app.routes.jd import router as jd_router
from app.routes.candidate import router as candidate_router
from app.routes.ranking import router as ranking_router
from app.routes.submission import router as submission_router
app = FastAPI(
    title="TalentOS",
    version="1.0.0",
    description="India.RUN AI Candidate Ranking Engine"
)

app.include_router(test_router)
app.include_router(jd_router)
app.include_router(candidate_router)
app.include_router(ranking_router)
app.include_router(submission_router)
@app.get("/")
def home():
    return {
        "status": "running",
        "project": "TalentOS"
    }