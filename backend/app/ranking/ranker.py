from app.services.data_loader import DataLoader
from app.services.candidate_parser import CandidateParser

from app.ranking.skill_scorer import SkillScorer
from app.ranking.career_scorer import CareerScorer
from app.ranking.behavior_scorer import BehaviorScorer
from app.ranking.semantic_scorer import SemanticScorer
from app.ranking.reasoning_generator import ReasoningGenerator

from app.ranking.weights import (
    SKILL_WEIGHT,
    CAREER_WEIGHT,
    BEHAVIOR_WEIGHT,
    SEMANTIC_WEIGHT,
)


class CandidateRanker:

    def __init__(self):

        self.loader = DataLoader()
        self.parser = CandidateParser()

        self.skill = SkillScorer()
        self.career = CareerScorer()
        self.behavior = BehaviorScorer()
        self.semantic = SemanticScorer()

        self.reasoning = ReasoningGenerator()

    def rank_candidates(
        self,
        stage1_top=1000,
        final_top=100
    ):

        candidates = self.loader.load_candidates()

        stage1 = []

        print(f"Loaded {len(candidates)} candidates")
        print("Running Stage 1 Ranking...")

        # ----------------------------
        # STAGE 1
        # ----------------------------

        for candidate in candidates:

            parsed = self.parser.parse(candidate)

            skill = self.skill.score(parsed)
            career = self.career.score(parsed)
            behavior = self.behavior.score(parsed)

            fast_score = (
                skill["score"] * SKILL_WEIGHT +
                career["score"] * CAREER_WEIGHT +
                behavior["score"] * BEHAVIOR_WEIGHT
            )

            stage1.append({

                "parsed": parsed,

                "skill": skill,

                "career": career,

                "behavior": behavior,

                "fast_score": fast_score

            })

        stage1.sort(
            key=lambda x: x["fast_score"],
            reverse=True
        )

        top_candidates = stage1[:stage1_top]

        print(f"Stage 1 Complete -> Top {stage1_top}")

        # ----------------------------
        # STAGE 2
        # ----------------------------

        final = []

        print("Running Semantic Ranking...")

        for item in top_candidates:

            semantic = self.semantic.score(
                item["parsed"]
            )

            final_score = (
                item["fast_score"] +
                semantic["score"] * SEMANTIC_WEIGHT
            )

            reasoning = self.reasoning.generate(
                candidate=item["parsed"],
                skill=item["skill"],
                career=item["career"],
                behavior=item["behavior"],
                semantic=semantic
            )

            final.append({
    "candidate_id": item["parsed"]["candidate_id"],
    "rank": 0,  # Updated after sorting

    "score": round(final_score, 2),

    "reasoning": reasoning,

    # Candidate Information
    "profile": {
        "name": item["parsed"].get("name", ""),
        "email": item["parsed"].get("email", ""),
        "experience": item["parsed"].get("experience", 0),
        "location": item["parsed"].get("location", ""),
        "open_to_work": item["parsed"].get("open_to_work", False),
        "notice": item["parsed"].get("notice", 0),
    },

    # Skills
    "skills": item["parsed"].get("skills", []),

    # AI Score Breakdown
    "breakdown": {
        "skill": round(item["skill"]["score"], 2),
        "career": round(item["career"]["score"], 2),
        "behavior": round(item["behavior"]["score"], 2),
        "semantic": round(semantic["score"], 2),
    },

    # AI Confidence (simple average of component scores)
    "confidence": round(
        (
            item["skill"]["score"]
            + item["career"]["score"]
            + item["behavior"]["score"]
            + semantic["score"]
        ) / 4,
        2,
    ),
})

        final.sort(
            key=lambda x: x["score"],
            reverse=True
        )

        for i, candidate in enumerate(final):
            candidate["rank"] = i + 1

        print("Ranking Complete")

        return final[:final_top]