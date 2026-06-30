from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.test import router as test_router
from app.routes.jd import router as jd_router
from app.routes.candidate import router as candidate_router
from app.routes.ranking import router as ranking_router
from app.routes.submission import router as submission_router

app = FastAPI(
    title="TalentOS",
    version="1.0.0",
    description="India.RUN AI Candidate Ranking Engine",
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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
        "project": "TalentOS",
    }