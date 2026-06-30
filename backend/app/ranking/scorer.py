from app.ranking.skill_scorer import SkillScorer
from app.ranking.career_scorer import CareerScorer
from app.ranking.behavior_scorer import BehaviorScorer
from app.ranking.semantic_scorer import SemanticScorer

from app.ranking.weights import (
    SKILL_WEIGHT,
    CAREER_WEIGHT,
    BEHAVIOR_WEIGHT,
    SEMANTIC_WEIGHT
)


class CandidateScorer:

    def __init__(self):

        self.skill = SkillScorer()

        self.career = CareerScorer()

        self.behavior = BehaviorScorer()

        self.semantic = SemanticScorer()

    def score(self, candidate):

        # ----------------------------
        # Individual Scores
        # ----------------------------

        skill = self.skill.score(candidate)

        career = self.career.score(candidate)

        behavior = self.behavior.score(candidate)

        semantic = self.semantic.score(candidate)

        # ----------------------------
        # Weighted Final Score
        # ----------------------------

        final_score = (

            skill["score"] * SKILL_WEIGHT +

            career["score"] * CAREER_WEIGHT +

            behavior["score"] * BEHAVIOR_WEIGHT +

            semantic["score"] * SEMANTIC_WEIGHT

        )

        # ----------------------------
        # Combine Reasons
        # ----------------------------

        reasons = []

        if skill["reason"]:
            reasons.append(skill["reason"])

        if career["reason"]:
            reasons.append(career["reason"])

        if behavior["reason"]:
            reasons.append(behavior["reason"])

        if semantic["reason"]:
            reasons.append(semantic["reason"])

        # Remove duplicates while preserving order
        seen = set()
        final_reasons = []

        for reason in reasons:
            if reason not in seen:
                final_reasons.append(reason)
                seen.add(reason)

        return {

            "score": round(final_score, 2),

            "reasoning": " | ".join(final_reasons),

            "breakdown": {

                "skill": round(skill["score"], 2),

                "career": round(career["score"], 2),

                "behavior": round(behavior["score"], 2),

                "semantic": round(semantic["score"], 2)

            }

        }